from fastapi import APIRouter, Depends, HTTPException, status
from typing import List, Optional
from ..models.product import Product, ProductCreate, ProductUpdate
from ..database import get_db
from ..auth.dependencies import get_current_admin

router = APIRouter(prefix="/products", tags=["products"])

@router.get("/", response_model=List[Product])
async def get_products(category: Optional[str] = None):
    with get_db() as db:
        cursor = db.cursor()
        
        if category:
            cursor.execute("SELECT * FROM products WHERE category = ?", (category,))
        else:
            cursor.execute("SELECT * FROM products")
        
        products = cursor.fetchall()
        return [
            {
                "id": p[0],
                "name": p[1],
                "category": p[2],
                "quantity": p[3],
                "rating": p[4],
                "image": p[5]
            }
            for p in products
        ]

@router.get("/{product_id}", response_model=Product)
async def get_product(product_id: int):
    with get_db() as db:
        cursor = db.cursor()
        cursor.execute("SELECT * FROM products WHERE id = ?", (product_id,))
        product = cursor.fetchone()
        
        if not product:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Product not found"
            )
        
        return {
            "id": product[0],
            "name": product[1],
            "category": product[2],
            "quantity": product[3],
            "rating": product[4],
            "image": product[5]
        }

@router.post("/", response_model=Product)
async def create_product(
    product: ProductCreate,
    _: str = Depends(get_current_admin)
):
    with get_db() as db:
        cursor = db.cursor()
        cursor.execute(
            """
            INSERT INTO products (name, category, quantity, rating, image)
            VALUES (?, ?, ?, ?, ?)
            """,
            (
                product.name,
                product.category,
                product.quantity,
                product.rating,
                product.image
            )
        )
        db.commit()
        return {**product.dict(), "id": cursor.lastrowid}

@router.put("/{product_id}", response_model=Product)
async def update_product(
    product_id: int,
    product: ProductUpdate,
    _: str = Depends(get_current_admin)
):
    with get_db() as db:
        cursor = db.cursor()
        cursor.execute(
            """
            UPDATE products
            SET name=?, category=?, quantity=?, rating=?, image=?
            WHERE id=?
            """,
            (
                product.name,
                product.category,
                product.quantity,
                product.rating,
                product.image,
                product_id
            )
        )
        db.commit()
        
        if cursor.rowcount == 0:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Product not found"
            )
        
        return {**product.dict(), "id": product_id}

@router.delete("/{product_id}")
async def delete_product(
    product_id: int,
    _: str = Depends(get_current_admin)
):
    with get_db() as db:
        cursor = db.cursor()
        cursor.execute("DELETE FROM products WHERE id=?", (product_id,))
        db.commit()
        
        if cursor.rowcount == 0:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Product not found"
            )
        
        return {"message": "Product deleted successfully"}