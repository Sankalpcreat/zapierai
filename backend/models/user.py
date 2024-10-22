from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func
from passlib.context import CryptContext
from . import Base


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, nullable=False)
    email = Column(String(120), unique=True, nullable=False)
    password_hash = Column(String(128), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    def verify_password(self, password: str) -> bool:
    
        return pwd_context.verify(password, self.password_hash)
    
    def set_password(self, password: str) -> None:
      
        self.password_hash = pwd_context.hash(password)
