from celery_app import celery_app

from celery_app.tasks import image_generation, task_manager, notification

if __name__ == "__main__":
    celery_app.start()
