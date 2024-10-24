from pydantic import BaseModel
from typing import Optional

class WorkflowCreate(BaseModel):
    name:str
    description:Optional[str]=None

class WorkflowResponse(BaseModel):
    id:int
    name:str
    description:Optional[str]=None
    is_active=bool

    class Config:
        orm_mode=True