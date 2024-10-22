from pydantic import BaseModel

class TaskSchema(BaseModel):
    name: str

class ImageTaskSchema(BaseModel):
    prompt: str
    style: str
