from sqlalchemy.orm import Session
from models.task import Task
from schemas.task import TaskCreate, TaskStatus


def create_new_task(task_data: TaskCreate, db: Session):
    """
    Create a new task in the database.
    """
    new_task = Task(
        name=task_data.name,
        status=task_data.status,
        workflow_id=task_data.workflow_id,
        next_task_id=task_data.next_task_id
    )
    db.add(new_task)
    db.commit()
    db.refresh(new_task)
    return new_task


def get_tasks_by_workflow(workflow_id: int, db: Session):
   
    return db.query(Task).filter(Task.workflow_id == workflow_id).all()


def update_task_status(task_id: int, task_status: TaskStatus, db: Session):
    """
    Update the status of a task by its ID.
    """
    task = db.query(Task).filter(Task.id == task_id).first()
    if task:
        task.status = task_status.status
        db.commit()
        db.refresh(task)
        return task
    return None


def update_task_result(task_id: int, result: dict, db: Session, error: str = None):
    """
    Update the result or error of a task.
    """
    task = db.query(Task).filter(Task.id == task_id).first()
    if task:
        task.result = result if not error else {"error": error}
        task.status = "completed" if not error else "failed"
        db.commit()
        db.refresh(task)
        return task
    return None
