from sqlalchemy.orm import Session
from models.task import Task
from schemas.task import TaskCreate

def get_task_status(db: Session, task_id: int):
    return db.query(Task).filter(Task.id == task_id).first()

def get_task_result(db: Session, task_id: int):
    task = db.query(Task).filter(Task.id == task_id).first()
    if task and task.status == 'completed':
        return task.result
    return None

def update_task_status(db: Session, task_id: int, status: str):
    task = db.query(Task).filter(Task.id == task_id).first()
    if task:
        task.status = status
        db.commit()
        db.refresh(task)
    return task

def create_new_task(db: Session, task_data:TaskCreate):
    task = Task(
        name=task_data.name,
        workflow_id=task_data.workflow_id,
        status="pending"
    )
    db.add(task)
    db.commit()
    db.refresh(task)
    return task
