from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session
from core.database import SessionLocal
from services.user_service import get_user_by_token

# Dependency to get the DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Dependency to get the current user based on the token (for authenticated routes)
def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    user = get_user_by_token(token, db)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return user
