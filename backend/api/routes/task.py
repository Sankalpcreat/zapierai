from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from schemas.task import TaskCreate, TaskResponse
from services.task_service import create_new_task, get_task_status, get_task_result
from core.database import get_db
from fastapi import WebSocket, WebSocketDisconnect
from core.websocket import ConnectionManager

router = APIRouter()
manager = ConnectionManager()

@router.post("/", response_model=TaskResponse)
def create_task(task: TaskCreate, db: Session = Depends(get_db)):
    return create_new_task(db, task)

@router.get("/{task_id}/status", response_model=TaskResponse)
def get_task_status_by_id(task_id: int, db: Session = Depends(get_db)):
    task = get_task_status(db, task_id)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    return task

@router.get("/{task_id}/result", response_model=TaskResponse)
def get_task_result_by_id(task_id: int, db: Session = Depends(get_db)):
    task = get_task_result(db, task_id)
    if not task or task.status != "completed":
        raise HTTPException(status_code=404, detail="Task result not available")
    return task

@router.websocket("/ws/{task_id}")
async def websocket_endpoint(websocket: WebSocket, task_id: int):
    await manager.connect(websocket)
    try:
        while True:
            # Example of sending task updates over WebSocket
            await websocket.send_text(f"Task {task_id} status update.")
    except WebSocketDisconnect:
        manager.disconnect(websocket)
