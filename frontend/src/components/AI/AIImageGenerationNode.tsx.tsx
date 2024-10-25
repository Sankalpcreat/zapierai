import React, { useState } from 'react';
import { ImageGenerationRequest } from '../../types/imageGeneration';
import ImageGenerator from './ImageGenerator'; 

interface AIImageGenerationNodeProps {
  task: ImageGenerationRequest;
  onConnect?: (fromTask: any, toTask: any) => void;
}

const AIImageGenerationNode: React.FC<AIImageGenerationNodeProps> = ({ task, onConnect }) => {
  const [status, setStatus] = useState<'pending' | 'in-progress' | 'completed' | 'failed'>('pending');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerateImage = async () => {
    setStatus('in-progress');
    try {
      const result = await ImageGenerator(task);  
      setGeneratedImage(result.resultUrl); 
      setStatus('completed');


      if (onConnect) {
        onConnect(task, 'nextTask');  
      }
    } catch (error) {
      console.error('Failed to generate image:', error);
      setStatus('failed');
    }
  };

  return (
    <div className="ai-task-node bg-blue-200 p-4 border rounded shadow-md">
      <h3>{task.prompt}</h3>
      <p>Style: {task.style || 'Default'}</p>
      <p>Size: {task.width}x{task.height}</p>

      
      {status === 'pending' && (
        <button onClick={handleGenerateImage} className="btn btn-primary">
          Generate Image
        </button>
      )}


      {generatedImage && (
        <div className="generated-image mt-4">
          <img src={generatedImage} alt="Generated AI" className="w-full h-auto" />
          <p className="text-sm mt-2">Generated successfully</p>
        </div>
      )}

   
      {status === 'in-progress' && <p>Generating image...</p>}
      {status === 'failed' && <p className="text-red-600">Image generation failed</p>}
    </div>
  );
};

export default AIImageGenerationNode;
