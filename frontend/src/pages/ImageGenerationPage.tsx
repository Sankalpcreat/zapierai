import React, { useState } from 'react';
import { generateImage } from '../services/aiService';
import { ImageGenerationRequest } from '../types/imageGeneration';
import GeneratedImagesGallery from '../components/AI/GeneratedImagesGallery';

const ImageGenerationPage: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [width, setWidth] = useState(512);
  const [height, setHeight] = useState(512);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);

  const handleGenerateImage = async () => {
    const request: ImageGenerationRequest = { prompt, width, height };
    const result = await generateImage(request);
    setGeneratedImages((prev) => [...prev, result.resultUrl]);
  };

  return (
    <div className="image-generation-page">
      <h1 className="text-2xl mb-4">AI Image Generation</h1>
      <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Enter prompt" />
      <input type="number" value={width} onChange={(e) => setWidth(Number(e.target.value))} placeholder="Width" />
      <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} placeholder="Height" />
      <button onClick={handleGenerateImage} className="btn btn-primary mt-2">Generate Image</button>
      <GeneratedImagesGallery images={generatedImages} />
    </div>
  );
};

export default ImageGenerationPage;
