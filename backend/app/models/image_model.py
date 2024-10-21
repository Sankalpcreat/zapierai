from sqlalchemy import Column, Integer, String, DateTime
from app.db.base_class import Base
from datetime import datetime, timezone

def utc_now():
    return datetime.now(timezone.utc)

class ImageTask(Base):
    __tablename__ = "image_tasks"

    id = Column(Integer, primary_key=True, index=True)
    image_url = Column(String)
    status = Column(String)
    created_at = Column(DateTime, default=utc_now)
    updated_at = Column(DateTime, default=utc_now, onupdate=utc_now)