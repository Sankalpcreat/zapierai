from app.models.image_model import ImageTask
from app.db.session import SessionLocal
from app.tasks.image_tasks import generate_image_task

async def create_image_task(image_data):
    db = SessionLocal()
    new_image_task = ImageTask(status="pending")
    db.add(new_image_task)
    db.commit()


    task_id = generate_image_task.delay(new_image_task.id, image_data.prompt)
    return task_id.id
