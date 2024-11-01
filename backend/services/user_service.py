from sqlalchemy.orm import Session
from models.user import User
from schemas.user import UserCreate, UserLogin
from core.security import verify_password, hash_password  # Ensure these exist for password management
from fastapi import HTTPException, status


# Create a new user
def create_new_user(user_data: UserCreate, db: Session) -> User:
    # Hash the password before saving it
    hashed_password = hash_password(user_data.password)
    new_user = User(
        username=user_data.username,
        email=user_data.email,
        hashed_password=hashed_password
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user


# Authenticate a user
def authenticate_user(user_data: UserLogin, db: Session) -> User:
    user = db.query(User).filter(User.email == user_data.email).first()
    if not user or not verify_password(user_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )
    return user
