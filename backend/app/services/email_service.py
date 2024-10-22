import requests
from app.cors.config import settings

async def send_email(recipient: str, subject: str, body: str):
    response = requests.post(
        "https://api.resend.com/email",
        json={"to": recipient, "subject": subject, "body": body},
        headers={"Authorization": f"Bearer {settings.STABLE_DIFFUSION_API_KEY}"}
    )
    return response.status_code