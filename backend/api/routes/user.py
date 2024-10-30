from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from schemas.user import UserCreate, UserLogin, UserResponse
from services.user_service import create_new_user, authenticate_user
from core.database import get_db

router = APIRouter()

# Register a new user
@router.post("/register", response_model=UserResponse)
def register_user(user_data: UserCreate, db: Session = Depends(get_db)):
    new_user = create_new_user(user_data, db)
    return new_user

# User login
@router.post("/login", response_model=UserResponse)
def login_user(user_data: UserLogin, db: Session = Depends(get_db)):
    user = authenticate_user(user_data, db)
    return user


