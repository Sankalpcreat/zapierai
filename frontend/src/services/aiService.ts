import api from './api';
import { ImageGenerationRequest, ImageGenerationResult } from '../types/imageGeneration';

export const generateImage = async (request: ImageGenerationRequest): Promise<ImageGenerationResult> => {
  const response = await api.post<ImageGenerationResult>('/generate-image', request);
  return response.data;
};
