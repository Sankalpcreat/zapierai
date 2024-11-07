import React from 'react';
import { Handle, Position } from 'reactflow';
import 'reactflow/dist/style.css';
import { FaQuestionCircle } from 'react-icons/fa';

interface ConditionalNodeProps {
  data: {
    label: string;
  };
}

const ConditionalNode: React.FC<ConditionalNodeProps> = ({ data }) => {
  return (
    <div className="bg-yellow-100 border border-yellow-300 shadow-lg rounded-md p-4 flex items-center space-x-2">
      <FaQuestionCircle className="text-yellow-500" />
      <div className="font-semibold text-yellow-700">{data.label}</div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle type="target" position={Position.Top} id="b" />
    </div>
  );
};

export default ConditionalNode;
