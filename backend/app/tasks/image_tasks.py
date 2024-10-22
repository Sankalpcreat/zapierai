from celery import shared_task
from app.services.image_generation_service import generate_image
from app.db.session import SessionLocal
from app.models.image_model import ImageTask
from sqlalchemy.exc import SQLAlchemyError

@shared_task
def generate_image_task(task_id: int, prompt: str):

    db = SessionLocal()
    try:
     
        image_task = db.query(ImageTask).filter(ImageTask.id == task_id).first()
        if not image_task:
            print(f"Task with ID {task_id} not found.")
            return


        image_task.status = "in_progress"
        db.commit()
        

        print(f"Started generating image for task {task_id} with prompt: {prompt}")
        
       
        image_url = generate_image(prompt)
        
       
        image_task.status = "completed"
        image_task.image_url = image_url
        db.commit()

        print(f"Completed image generation for task {task_id}. Image URL: {image_url}")
    
    except SQLAlchemyError as e:
 
        db.rollback()
        print(f"Database error for task {task_id}: {e}")
        if image_task:
            image_task.status = "failed"
            db.commit()

    except Exception as e:
  
        print(f"Error during image generation for task {task_id}: {e}")
        if image_task:
            image_task.status = "failed"
            db.commit()
    
    finally:
   
        db.close()
