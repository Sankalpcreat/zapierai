from pydantic import BaseModel
from typing import Optional, Any

# Schema for creating a task
class TaskCreate(BaseModel):
    name: str
    workflow_id: int
    next_task_id: Optional[int] = None 


class TaskResponse(BaseModel):
    id: int
    name: str
    status: str
    result: Optional[Any] = None  
    workflow_id: int
    next_task_id: Optional[int] = None

    class Config:
        orm_mode = True


class TaskStatus(BaseModel):
    status: str
