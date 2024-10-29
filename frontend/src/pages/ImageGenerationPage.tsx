import React, { useState } from 'react';
import useImageGeneration from '../hooks/useImageGeneration';

const ImageGenerationPage: React.FC = () => {
  const { generateImage, imageUrl, loading, error } = useImageGeneration();
  const [prompt, setPrompt] = useState<string>('');
  const [width, setWidth] = useState<number>(512);
  const [height, setHeight] = useState<number>(512);

  const handleGenerateImage = () => {
    generateImage({ prompt, width, height });
  };

  return (
    <div className="image-generation-page">
      <h1 className="text-2xl mb-4">AI Image Generation</h1>

      <div className="input-form">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter prompt"
          className="input-field mb-4"
        />

        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
          className="input-field mb-4"
          placeholder="Width"
        />

        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
          className="input-field mb-4"
          placeholder="Height"
        />

        <button onClick={handleGenerateImage} className="btn btn-primary mb-4">
          Generate Image
        </button>
      </div>

      {loading && <p>Generating image...</p>}
      {error && <p>{error}</p>}
      {imageUrl && (
        <div className="generated-image">
          <img src={imageUrl} alt="Generated AI" className="w-full h-auto" />
        </div>
      )}
    </div>
  );
};

export default ImageGenerationPage;
