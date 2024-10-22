from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from app.db.base_class import Base
from datetime import datetime, timezone

def utc_now():
    return datetime.now(timezone.utc)

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    status = Column(String, default="pending")
    parent_task_id = Column(Integer, ForeignKey("tasks.id"), nullable=True)  
    created_at = Column(DateTime, default=utc_now)
    updated_at = Column(DateTime, default=utc_now, onupdate=utc_now)
