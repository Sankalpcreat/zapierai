import openai

def generate_image(prompt: str, api_key: str):
  
    openai.api_key = api_key

    try:
        response = openai.Image.create(
            prompt=prompt,
            n=1,
            size="1024x1024" 
        )
        
        if response['data']:
            return response['data'][0]['url']  
        else:
            raise Exception("No image URL returned.")
    
    except Exception as e:
        raise Exception(f"Error during image generation: {str(e)}")
