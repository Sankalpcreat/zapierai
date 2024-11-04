import React, { useState } from 'react';
import { ImageGenerationRequest } from '../../types/imageGeneration';
import ImageGenerator from './ImageGenerator';

interface ImageGenerationFormProps {
  onImageGenerated: (imageUrl: string) => void;
}

const ImageGenerationForm: React.FC<ImageGenerationFormProps> = ({ onImageGenerated }) => {
  const [prompt, setPrompt] = useState<string>('');
  const [width, setWidth] = useState<number>(512);
  const [height, setHeight] = useState<number>(512);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateImage = async () => {
    setLoading(true);
    setError(null);
    try {
      const request: ImageGenerationRequest = { prompt, width, height };
      const result = await ImageGenerator(request);
      onImageGenerated(result.resultUrl);
    } catch (err) {
      setError('Failed to generate image',err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="image-generation-form">
      <h2>Generate AI Image</h2>
      <input
        type="text"
        placeholder="Enter prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <input
        type="number"
        placeholder="Width"
        value={width}
        onChange={(e) => setWidth(parseInt(e.target.value))}
      />
      <input
        type="number"
        placeholder="Height"
        value={height}
        onChange={(e) => setHeight(parseInt(e.target.value))}
      />
      <button onClick={handleGenerateImage} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Image'}
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default ImageGenerationForm;
