from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from app.db.base_class import Base
from datetime import datetime, timezone

def utc_now():
    return datetime.now(timezone.utc)

class ImageTask(Base):
    __tablename__ = "image_tasks"

    id = Column(Integer, primary_key=True, index=True)
    image_url = Column(String, nullable=True)
    status = Column(String, default="pending")
    task_id = Column(Integer, ForeignKey("tasks.id"))
    created_at = Column(DateTime, default=utc_now)
    updated_at = Column(DateTime, default=utc_now, onupdate=utc_now)
