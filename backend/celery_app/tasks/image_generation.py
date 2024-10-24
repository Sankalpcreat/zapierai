from celery_app import celery_app
from services.image_generation_service import generate_image

@celery_app.task(bind=True)
def generate_image_task(self, prompt: str, api_key: str):
    try:
        image_url = generate_image(prompt, api_key)
        return image_url
    except Exception as e:
        raise self.retry(exc=e, countdown=60, max_retries=3)
