from fastapi import APIRouter, Depends, HTTPException, WebSocket, WebSocketDisconnect
from sqlalchemy.orm import Session
from schemas.task import TaskResponse
from services.task_service import get_task_status, get_task_result
from core.database import get_db
from core.websocket import ConnectionManager

router=APIRouter()
manager=ConnectionManager()


@router.get("/{task_id}/status",response_mode=TaskResponse)
def get_task_status_by_id(task_id:int,db:Session=Depends(get_db)):
    task=get_task_result(db,task_id)
    if task is None:
        raise HTTPException(status_code=404,detail="Task not found")
    return task

@router.get("/{task_id}/result", response_model=TaskResponse)
def get_task_result_by_id(task_id: int, db: Session = Depends(get_db)):
    task = get_task_result(db, task_id)
    if task is None:
        raise HTTPException(status_code=404, detail="Task result not found")
    return task

@router.websocket("/ws/{task_id}")
async def task_status_updates(websocket: WebSocket, task_id: int):
    await manager.connect(websocket)
    try:
        while True:
            # Example: You can implement sending real-time status updates here.
            await websocket.send_text(f"Task {task_id} is being processed.")
    except WebSocketDisconnect:
        manager.disconnect(websocket)