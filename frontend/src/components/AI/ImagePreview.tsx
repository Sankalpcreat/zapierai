
import React from 'react';
import { ImageGenerationResult } from '../../types/imageGeneration';

interface ImagePreviewProps {
  image: ImageGenerationResult;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ image }) => (
  <div className="border rounded p-2">
    <img src={image.resultUrl} alt="Generated AI" className="w-full h-auto" />
    <p className="text-sm mt-2">Generated on: {new Date(image.createdAt).toLocaleString()}</p>
  </div>
);

export default ImagePreview;
