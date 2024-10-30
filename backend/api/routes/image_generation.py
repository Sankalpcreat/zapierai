from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from services.image_generation_service import generate_image
from core.database import get_db
from schemas.task import TaskResponse
from services.task_service import update_task_result

router = APIRouter()

# Generate an image using the AI image generation API
@router.post("/generate/{task_id}", response_model=TaskResponse)
def generate_image_task(task_id: int, prompt: str, db: Session = Depends(get_db)):
    try:
      
        image_url = generate_image(prompt)

    
        task_result = update_task_result(task_id, {"image_url": image_url}, db)
        return task_result

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
