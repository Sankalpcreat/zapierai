from fastapi import APIRouter
from app.services.task_service import create_task, get_task_status
from app.models.pydantic_schemas import TaskSchema

router = APIRouter()

@router.post("/create/")
async def create_new_task(task_data: TaskSchema):
    task_id = await create_task(task_data)
    return {"task_id": task_id, "status": "submitted"}

@router.get("/status/{task_id}")
async def task_status(task_id: str):
    return await get_task_status(task_id)
