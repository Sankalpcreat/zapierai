from fastapi import APIRouter
from app.services.image_generation_service import create_image_task
from app.models.pydantic_schemas import ImageTaskSchema

router = APIRouter()

@router.post("/generate/")
async def generate_image(image_task: ImageTaskSchema):
    task_id = await create_image_task(image_task)
    return {"task_id": task_id, "status": "submitted"}
