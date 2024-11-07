import { useState } from 'react';
import { ImageGenerationRequest, ImageGenerationResult } from '../types/imageGeneration';
import { generateImage } from '../services/aiService';

const useImageGeneration = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<ImageGenerationResult | null>(null);

  const handleGenerateImage = async (request: ImageGenerationRequest) => {
    setLoading(true);
    setError(null);
    try {
      const result = await generateImage(request);
      setGeneratedImage(result);
    } catch (err) {
      setError('Image generation failed',err);
    } finally {
      setLoading(false);
    }
  };

  return { generatedImage, loading, error, handleGenerateImage };
};

export default useImageGeneration;
