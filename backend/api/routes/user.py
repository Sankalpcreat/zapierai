from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from core.database import get_db
from schemas.user import UserCreate, UserLogin, UserResponse
from services.user_service import create_new_user, authenticate_user, get_current_user

router = APIRouter()

# Register a new user
@router.post("/register", response_model=UserResponse)
def register_user(user: UserCreate, db: Session = Depends(get_db)):
    new_user = create_new_user(user, db)
    return new_user

# User login
@router.post("/login", response_model=UserResponse)
def login_user(user: UserLogin, db: Session = Depends(get_db)):
    authenticated_user = authenticate_user(user, db)
    if not authenticated_user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return authenticated_user

# Get current user
@router.get("/me", response_model=UserResponse)
def get_user_profile(current_user: UserResponse = Depends(get_current_user)):
    return current_user
