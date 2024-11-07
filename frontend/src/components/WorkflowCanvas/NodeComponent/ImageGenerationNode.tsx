import React from 'react';
import { Handle, Position } from 'reactflow';
import 'reactflow/dist/style.css';
import { FaImage } from 'react-icons/fa';

interface ImageGenerationNodeProps {
  data: {
    label: string;
  };
}

const ImageGenerationNode: React.FC<ImageGenerationNodeProps> = ({ data }) => {
  return (
    <div className="bg-blue-100 border border-blue-300 shadow-lg rounded-md p-4 flex items-center space-x-2">
      <FaImage className="text-blue-500" />
      <div className="font-semibold text-blue-700">{data.label}</div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle type="target" position={Position.Top} id="b" />
    </div>
  );
};

export default ImageGenerationNode;
