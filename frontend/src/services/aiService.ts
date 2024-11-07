import api from './api';
import { ImageGenerationRequest, ImageGenerationResult } from '../types/imageGeneration';

export const generateImage = async (params: ImageGenerationRequest): Promise<ImageGenerationResult> => {
  const response = await api.post<ImageGenerationResult>('/generate-image', params);
  return response.data;
};
