from sqlalchemy import Column, Integer, String, ForeignKey, JSON
from sqlalchemy.orm import relationship
from core.database import Base

class Task(Base):
    __tablename__ = "tasks"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    status = Column(String, default="pending")
    result = Column(JSON, nullable=True)
    
    # Foreign key to workflow
    workflow_id = Column(Integer, ForeignKey('workflows.id'))
    workflow = relationship("Workflow", back_populates="tasks")

    # Task chaining (next and previous tasks)
    next_task_id = Column(Integer, ForeignKey('tasks.id'), nullable=True)
    next_task = relationship("Task", remote_side=[id], backref="previous_task")

    def __repr__(self):
        return f"<Task(id={self.id}, name={self.name}, status={self.status})>"
