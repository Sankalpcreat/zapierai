from celery_app import celery_app
from core.websocket import ConnectionManager

manager = ConnectionManager()

@celery_app.task(bind=True)
def notify_task_completion(self, task_id: int, message: str):
    try:
        manager.broadcast_message(f"Task {task_id}: {message}")
    except Exception as e:
        raise self.retry(exc=e, countdown=60, max_retries=3)
