from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.orm import relationship
from core.database import Base

class Workflow(Base):
    __tablename__ = "workflows"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String)
    is_active = Column(Boolean, default=True)

    tasks = relationship("Task", back_populates="workflow")
