import React, { useState } from 'react';
import { ImageGenerationRequest } from '../../types/imageGeneration';

interface ImageGenerationFormProps {
  onSubmit: (data: ImageGenerationRequest) => void;
}

const ImageGenerationForm: React.FC<ImageGenerationFormProps> = ({ onSubmit }) => {
  const [prompt, setPrompt] = useState('');
  const [width, setWidth] = useState(1024);
  const [height, setHeight] = useState(1024);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ prompt, width, height });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 border rounded shadow-md">
      <h2 className="text-lg font-semibold">Generate AI Image</h2>
      <div className="mb-4">
        <label htmlFor="prompt">Prompt</label>
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter an AI prompt here"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="width">Width</label>
        <input
          type="number"
          id="width"
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="height">Height</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="btn btn-primary">Generate Image</button>
    </form>
  );
};

export default ImageGenerationForm;
