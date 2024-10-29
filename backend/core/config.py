import os
from dotenv import load_dotenv

load_dotenv()

# Database configuration
DATABASE_URL = os.getenv("DATABASE_URL")

# Redis configuration
REDIS_URL = os.getenv("REDIS_URL")

# OpenAI API key
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

# WebSocket URL
WEBSOCKET_URL = os.getenv("WEBSOCKET_URL", "ws://localhost:8000")

# Celery configuration
CELERY_BROKER_URL = REDIS_URL
CELERY_RESULT_BACKEND = REDIS_URL
