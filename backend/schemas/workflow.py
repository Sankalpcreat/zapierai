from pydantic import BaseModel


class WorkflowCreate(BaseModel):
    name: str
    description: str = None


class WorkflowResponse(BaseModel):
    id: int
    name: str
    description: str
    is_active: bool

    class Config:
        orm_mode = True
