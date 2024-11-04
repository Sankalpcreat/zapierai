import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ImageGenerationResult } from '../types/imageGeneration';

interface ImageGenerationContextProps {
  generatedImages: ImageGenerationResult[];
  addGeneratedImage: (image: ImageGenerationResult) => void;
}

const ImageGenerationContext = createContext<ImageGenerationContextProps | undefined>(undefined);

export const ImageGenerationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [generatedImages, setGeneratedImages] = useState<ImageGenerationResult[]>([]);

  const addGeneratedImage = (image: ImageGenerationResult) => {
    setGeneratedImages((prev) => [...prev, image]);
  };

  return (
    <ImageGenerationContext.Provider value={{ generatedImages, addGeneratedImage }}>
      {children}
    </ImageGenerationContext.Provider>
  );
};

export const useImageGenerationContext = (): ImageGenerationContextProps => {
  const context = useContext(ImageGenerationContext);
  if (!context) {
    throw new Error('useImageGenerationContext must be used within an ImageGenerationProvider');
  }
  return context;
};
