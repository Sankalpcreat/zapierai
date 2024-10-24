from fastapi import FastAPI
from api import router as api_router
from core.websocket import ConnectionManager

app = FastAPI()


app.include_router(api_router)

manager = ConnectionManager()

@app.get("/")
def read_root():
    return {"message": "Welcome to the AI Workflow Automation Platform"}


@app.websocket("/ws/tasks/{task_id}")
async def websocket_endpoint(websocket, task_id: int):
    await manager.connect(websocket)
    try:
        while True:
          
            await websocket.send_text(f"Task {task_id} status update")
    except WebSocketDisconnect:
        manager.disconnect(websocket)
