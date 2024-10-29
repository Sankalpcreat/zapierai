from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from schemas.task import TaskCreate, TaskResponse,TaskStatus
from services.task_service import create_new_task, get_tasks_by_workflow, update_task_status
from core.database import get_db
from fastapi import WebSocket, WebSocketDisconnect
from core.websocket import ConnectionManager

router = APIRouter()
manager = ConnectionManager()

@router.get("/workflow/{workflow_id}", response_model=list[TaskResponse])
def list_tasks(workflow_id: int, db: Session = Depends(get_db)):
    tasks = get_tasks_by_workflow(workflow_id, db)
    return tasks

# Create a new task
@router.post("/", response_model=TaskResponse)
def create_task(task: TaskCreate, db: Session = Depends(get_db)):
    new_task = create_new_task(task, db)
    return new_task

# Update task status
@router.put("/{task_id}/status", response_model=TaskResponse)
def update_task_status_route(task_id: int, status: TaskStatus, db: Session = Depends(get_db)):
    updated_task = update_task_status(task_id, status, db)
    if not updated_task:
        raise HTTPException(status_code=404, detail="Task not found")
    return updated_task

@router.websocket("/ws/{task_id}")
async def websocket_endpoint(websocket: WebSocket, task_id: int):
    await manager.connect(websocket)
    try:
        while True:
            # Example of sending task updates over WebSocket
            await websocket.send_text(f"Task {task_id} status update.")
    except WebSocketDisconnect:
        manager.disconnect(websocket)
