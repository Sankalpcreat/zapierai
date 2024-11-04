import { useState } from 'react';
import { ImageGenerationRequest, ImageGenerationResult } from '../types/imageGeneration';
import { useImageGenerationContext } from '../contexts/ImageGenerationContext';
import axios from 'axios';

const useImageGeneration = () => {
  const { addGeneratedImage } = useImageGenerationContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const generateImage = async (request: ImageGenerationRequest) => {
    setLoading(true);
    try {
      const response = await axios.post<ImageGenerationResult>('/api/generate-image', request);
      addGeneratedImage(response.data);
    } catch (err) {
      setError('Image generation failed',err);
    } finally {
      setLoading(false);
    }
  };

  return { generateImage, loading, error };
};

export default useImageGeneration;
