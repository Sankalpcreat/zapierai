import os
from dotenv import load_dotenv
from pydantic import BaseSettings

# Load environment variables from .env file
load_dotenv()

class Settings(BaseSettings):
    DATABASE_URL: str = os.getenv("DATABASE_URL")
    CELERY_BROKER_URL: str = os.getenv("CELERY_BROKER_URL")
    CELERY_BACKEND_URL: str = os.getenv("CELERY_BACKEND_URL")
    JWT_SECRET_KEY: str = os.getenv("JWT_SECRET_KEY")
    WEBSOCKET_URL: str = os.getenv("WEBSOCKET_URL", "ws://localhost:8000/ws")

    class Config:
        case_sensitive = True

settings = Settings()
