from app.db.init_db import init_db

async def on_startup():
    await init_db()
    print("Application startup: Database initialized.")
