from fastapi import WebSocket
from typing import List

class WebSocketManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket, client_id: str):
        await websocket.accept()
        self.active_connections.append((client_id, websocket))

    async def disconnect(self, client_id: str):
        connection = next((conn for conn in self.active_connections if conn[0] == client_id), None)
        if connection:
            self.active_connections.remove(connection)

    async def send_message(self, client_id: str, message: str):
        connection = next((conn for conn in self.active_connections if conn[0] == client_id), None)
        if connection:
            await connection[1].send_text(message)

websocket_manager = WebSocketManager()
