import { useState } from 'react';
import axios from 'axios';

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

const useImageGeneration = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateImage = async (params: ImageGenerationRequest) => {
    setLoading(true);
    setError(null);
    setImageUrl(null);
    try {
      const response = await axios.post('/api/openai/generate-image', params);
      const { resultUrl } = response.data;
      setImageUrl(resultUrl);
    } catch (err) {
      setError('Failed to generate image.');
    } finally {
      setLoading(false);
    }
  };

  return { generateImage, imageUrl, loading, error };
};

export default useImageGeneration;
