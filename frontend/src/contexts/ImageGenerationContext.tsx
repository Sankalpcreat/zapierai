// - Manages AI image generation tasks.
// - Provides functions to add new generation tasks and update task statuses (with result URLs).
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ImageGenerationRequest, ImageGenerationResult } from '../types/imageGeneration';

interface ImageGenerationContextType {
    requests: ImageGenerationRequest[];
    results: ImageGenerationResult[];
    addRequest: (request: ImageGenerationRequest) => void;
    updateResult: (result: ImageGenerationResult) => void;
  }

const ImageGenerationContext = createContext<ImageGenerationContextType | undefined>(undefined);

export const ImageGenerationContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [requests, setRequests] = useState<ImageGenerationRequest[]>([]);
    const [results, setResults] = useState<ImageGenerationResult[]>([]);


  const addRequest = (request: ImageGenerationRequest) => {
    setRequests([...requests, request]);
  };
  const updateResult = (result: ImageGenerationResult) => {
    setResults([...results, result]);
  };

  return(
    <ImageGenerationContext.Provider value={requests,results,addRequest,updateResult}>
        {children}
    </ImageGenerationContext.Provider>
  )
}

export const useImageGenerationContext = () => {
    const context = useContext(ImageGenerationContext);
    if (!context) {
      throw new Error('useImageGenerationContext must be used within an ImageGenerationContextProvider');
    }
    return context;
  };
  
