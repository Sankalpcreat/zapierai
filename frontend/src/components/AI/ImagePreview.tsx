import React from 'react';
import { ImageGenerationResult } from '../../types/imageGeneration';

interface ImagePreviewProps {
  image: ImageGenerationResult;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ image }) => {
  return (
    <div className="image-preview">
      <img src={image.resultUrl} alt="Generated AI" className="w-full h-auto" />
      <p>Generated on: {new Date(image.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default ImagePreview;
