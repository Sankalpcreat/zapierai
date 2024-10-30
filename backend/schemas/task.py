from pydantic import BaseModel
from typing import Optional, Any

class TaskCreate(BaseModel):
    name: str
    workflow_id: int

class TaskStatus(BaseModel):
    status: str

    class Config:
        orm_mode = True
class TaskResponse(BaseModel):
    id: int
    name: str
    status: str
    result: Optional[Any] = None
    workflow_id: int

    class Config:
        orm_mode = True
