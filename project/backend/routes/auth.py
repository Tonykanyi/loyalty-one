from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from ..database import get_db
from ..auth.utils import verify_password, create_access_token

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    with get_db() as db:
        cursor = db.cursor()
        cursor.execute(
            "SELECT password, is_admin FROM users WHERE username = ?",
            (form_data.username,)
        )
        user = cursor.fetchone()
        
        if not user or not verify_password(form_data.password, user[0]):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Incorrect username or password"
            )
        
        access_token = create_access_token({
            "sub": form_data.username,
            "is_admin": user[1]
        })
        return {"access_token": access_token, "token_type": "bearer"}