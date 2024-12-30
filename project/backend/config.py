from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    SECRET_KEY: str = "zJhJAFeOff"  
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    DATABASE_URL: str = "ecommerce.db"
    CORS_ORIGINS: list = ["*"]

settings = Settings()