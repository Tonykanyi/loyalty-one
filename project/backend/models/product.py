from pydantic import BaseModel, Field

class ProductBase(BaseModel):
    name: str
    category: str
    quantity: int = Field(ge=0)
    rating: float = Field(ge=0, le=5)
    image: str

class ProductCreate(ProductBase):
    pass

class ProductUpdate(ProductBase):
    pass

class Product(ProductBase):
    id: int

    class Config:
        from_attributes = True