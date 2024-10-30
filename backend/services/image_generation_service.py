import requests
from core.config import OPENAI_API_KEY


def generate_image(prompt: str) -> str:
    headers = {
        "Authorization": f"Bearer {OPENAI_API_KEY}",
        "Content-Type": "application/json",
    }
    data = {
        "prompt": prompt,
        "n": 1,  
        "size": "1024x1024",  
        "response_format": "url",  
    }

    response = requests.post("https://api.openai.com/v1/images/generations", json=data, headers=headers)
    
    if response.status_code == 200:
        result = response.json()
        return result['data'][0]['url']
    else:
        raise Exception("Image generation failed with error: " + response.text)
