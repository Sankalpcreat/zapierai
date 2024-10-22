from sqlalchemy import Column, Integer, String, DateTime
from app.db.base_class import Base
from datetime import datetime, timezone

def get_utc_now():
    return datetime.now(timezone.utc)

class Task(Base):
    __tablename__ = "tasks"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    status = Column(String)
    created_at = Column(DateTime, default=get_utc_now)
    updated_at = Column(DateTime, default=get_utc_now, onupdate=get_utc_now)