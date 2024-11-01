// src/components/AI/ImageGenerator.tsx

import axios from 'axios';
import { ImageGenerationRequest, ImageGenerationResult } from '../../types/imageGeneration';

const ImageGenerator = async (params: ImageGenerationRequest): Promise<ImageGenerationResult> => {
  try {
    const response = await axios.post('/api/generate-image', {
      prompt: params.prompt,
      width: params.width,
      height: params.height,
    });
    return {
      requestId: response.data.task_id,
      resultUrl: response.data.image_url,
      createdAt: new Date().toISOString(),
    };
  } catch (error) {
    console.error('Error generating image:', error);
    throw new Error('Image generation failed');
  }
};

export default ImageGenerator;
