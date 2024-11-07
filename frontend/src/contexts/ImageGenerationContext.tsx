import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ImageGenerationRequest, ImageGenerationResult } from '../types/imageGeneration';
import { generateImage } from '../services/aiService';

interface ImageGenerationContextType {
  generateImageRequest: (params: ImageGenerationRequest) => Promise<ImageGenerationResult>;
  lastGeneratedImage?: ImageGenerationResult;
}

const ImageGenerationContext = createContext<ImageGenerationContextType | undefined>(undefined);

export const ImageGenerationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lastGeneratedImage, setLastGeneratedImage] = useState<ImageGenerationResult | undefined>();

  const generateImageRequest = async (params: ImageGenerationRequest): Promise<ImageGenerationResult> => {
    const result = await generateImage(params);
    setLastGeneratedImage(result);
    return result;
  };

  return (
    <ImageGenerationContext.Provider value={{ generateImageRequest, lastGeneratedImage }}>
      {children}
    </ImageGenerationContext.Provider>
  );
};

export const useImageGenerationContext = () => {
  const context = useContext(ImageGenerationContext);
  if (!context) {
    throw new Error('useImageGenerationContext must be used within an ImageGenerationProvider');
  }
  return context;
};
