from app.db.session import SessionLocal
from app.models.task_model import Task
from app.tasks.image_tasks import generate_image_task

async def create_task(task_data):
    db = SessionLocal()
    new_task = Task(name=task_data.name, status="pending")
    db.add(new_task)
    db.commit()


    task_id = generate_image_task.delay(new_task.id)
    return task_id.id

async def get_task_status(task_id):
    db = SessionLocal()
    task = db.query(Task).filter(Task.id == task_id).first()
    return {"task_id": task.id, "status": task.status}
