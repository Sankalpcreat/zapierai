from pydantic import BaseModel
from typing import Optional, Any

class TaskCreate(BaseModel):
    name: str
    workflow_id: int

class TaskResponse(BaseModel):
    id: int
    name: str
    status: str
    result: Optional[Any] = None
    workflow_id: int

    class Config:
        orm_mode = True
