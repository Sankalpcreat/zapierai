from fastapi import WebSocket
from typing import List

class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []

    # Add a new WebSocket connection
    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    # Remove a disconnected WebSocket connection
    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    # Send a message to a specific WebSocket connection
    async def send_message(self, message: str, websocket: WebSocket):
        await websocket.send_text(message)

    # Broadcast a message to all connected WebSockets
    async def broadcast_message(self, message: str):
        for connection in self.active_connections:
            await self.send_message(message, connection)

# Initialize the connection manager
manager = ConnectionManager()
