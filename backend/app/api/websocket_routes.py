from fastapi import APIRouter, WebSocket
from app.websocket.websocket_manager import websocket_manager

router = APIRouter()

@router.websocket("/ws/{client_id}")
async def websocket_endpoint(websocket: WebSocket, client_id: str):
    await websocket_manager.connect(websocket, client_id)
    try:
        while True:
            data = await websocket.receive_text()
            await websocket_manager.send_message(client_id, data)
    except Exception as e:
        await websocket_manager.disconnect(client_id)
