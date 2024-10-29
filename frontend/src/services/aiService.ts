// Handles AI image generation requests by sending prompts and dimensions to the backend and returning the result.
import api from './api';

export interface ImageGenerationRequest {
  prompt: string;
  width: number;
  height: number;
  style?: string;
}

export interface ImageGenerationResponse {
  resultUrl: string;
  createdAt: string;
}

export const generateImage = async (params: ImageGenerationRequest): Promise<ImageGenerationResponse> => {
  const response = await api.post('/openai/generate-image', params);
  return response.data;
};
