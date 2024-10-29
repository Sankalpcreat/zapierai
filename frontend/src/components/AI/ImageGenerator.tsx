//basic openai response send and generate the image and thus show the result
import axios from 'axios';
import { ImageGenerationRequest, ImageGenerationResult } from '../../types/imageGeneration';

const ImageGenerator = async (params: ImageGenerationRequest): Promise<ImageGenerationResult> => {
  try {
    const response = await axios.post('/api/openai/generate-image', {
      prompt: params.prompt,
      style: params.style,
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
    throw new Error('Failed to generate image',error);
  }
};

export default ImageGenerator;
