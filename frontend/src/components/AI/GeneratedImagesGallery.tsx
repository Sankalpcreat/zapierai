import React from 'react';
import { ImageGenerationResult } from '../../types/imageGeneration';
import ImagePreview from './ImagePreview';

interface GeneratedImagesGalleryProps {
  images: ImageGenerationResult[];
}

const GeneratedImagesGallery: React.FC<GeneratedImagesGalleryProps> = ({ images }) => {
  return (
    <div className="generated-images-gallery">
      <h2>Generated Images</h2>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <ImagePreview key={image.requestId} image={image} />
        ))}
      </div>
    </div>
  );
};

export default GeneratedImagesGallery;
