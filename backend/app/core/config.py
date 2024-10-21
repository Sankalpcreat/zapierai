import os
from pydantic import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "AI Image Automation"
    DATABASE_URL: str = os.getenv("DATABASE_URL", "postgresql://user:password@localhost/db")
    REDIS_URL: str = os.getenv("REDIS_URL", "redis://localhost:6379/0")
    STABLE_DIFFUSION_API_KEY: str = os.getenv("STABLE_DIFFUSION_API_KEY", "")
    
    class Config:
        case_sensitive = True

settings = Settings()
