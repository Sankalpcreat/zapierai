from app.models.image_model import ImageTask
from app.models.task_model import Task
from app.db.session import SessionLocal
from app.tasks.image_tasks import generate_image_task

async def create_image_task(image_data, parent_task_id=None):
    db = SessionLocal()

    # Create the parent task
    new_task = Task(name="Generate Image", parent_task_id=parent_task_id)
    db.add(new_task)
    db.commit()

    # Create the image task with a pending status
    new_image_task = ImageTask(status="pending", task_id=new_task.id)
    db.add(new_image_task)
    db.commit()

    # Trigger Celery task
    task_id = generate_image_task.delay(new_image_task.id, image_data.prompt)
    return task_id.id
