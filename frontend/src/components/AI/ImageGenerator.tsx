import axios from 'axios';
import { ImageGenerationRequest, ImageGenerationResult } from '../../types/imageGeneration';

const ImageGenerator = async (params: ImageGenerationRequest): Promise<ImageGenerationResult> => {
  try {
    const response = await axios.post('/api/generate-image', {
      prompt: params.prompt,
      width: params.width,
      height: params.height,
    });

    const { resultUrl } = response.data;
    return {
      requestId: params.id,
      resultUrl,
      createdAt: new Date().toISOString(),
    };
  } catch (error) {
    console.error('Failed to generate image:', error);
    throw new Error('Image generation failed');
  }
};

export default ImageGenerator;
