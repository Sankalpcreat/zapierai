from typing import Generator
from fastapi import Depends
from sqlalchemy.orm import Session
from core.database import get_db

# Dependency for getting the database session
def get_db_dependency() -> Generator[Session, None, None]:
    db = get_db()
    try:
        yield db
    finally:
        db.close()
