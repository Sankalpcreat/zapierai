// src/contexts/ImageGenerationContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ImageGenerationRequest, ImageGenerationResult } from '../types/imageGeneration';
import { generateImage } from '../services/imageGenerationService';

interface ImageGenerationContextType {
  generateImage: (params: ImageGenerationRequest) => Promise<ImageGenerationResult>;
  images: ImageGenerationResult[];
  addImage: (image: ImageGenerationResult) => void;
}

const ImageGenerationContext = createContext<ImageGenerationContextType | undefined>(undefined);

export const ImageGenerationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<ImageGenerationResult[]>([]);

  const addImage = (image: ImageGenerationResult) => {
    setImages((prevImages) => [...prevImages, image]);
  };

  const handleGenerateImage = async (params: ImageGenerationRequest): Promise<ImageGenerationResult> => {
    const result = await generateImage(params);
    addImage(result);
    return result;
  };

  return (
    <ImageGenerationContext.Provider value={{ generateImage: handleGenerateImage, images, addImage }}>
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
