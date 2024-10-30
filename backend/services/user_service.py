from sqlalchemy.orm import Session
from models.task import Task
from schemas.task import TaskCreate, TaskStatus

# Create a new task
def create_new_task(task_data: TaskCreate, db: Session) -> Task:
    new_task = Task(
        name=task_data.name,
        workflow_id=task_data.workflow_id,
        next_task_id=task_data.next_task_id
    )
    db.add(new_task)
    db.commit()
    db.refresh(new_task)
    return new_task

# Get tasks by workflow ID
def get_tasks_by_workflow(workflow_id: int, db: Session) -> list[Task]:
    return db.query(Task).filter(Task.workflow_id == workflow_id).all()

# Update task status
def update_task_status(task_id: int, status: TaskStatus, db: Session) -> Task:
    task = db.query(Task).filter(Task.id == task_id).first()
    if task:
        task.status = status.status
        db.commit()
        db.refresh(task)
    return task

# Update task result (e.g., image generation result)
def update_task_result(task_id: int, result: dict, db: Session) -> Task:
    task = db.query(Task).filter(Task.id == task_id).first()
    if task:
        task.result = result
        db.commit()
        db.refresh(task)
    return task
