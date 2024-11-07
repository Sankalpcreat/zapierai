import React from 'react';
import { Handle, Position } from 'reactflow';
import 'reactflow/dist/style.css';

interface TaskNodeProps {
  data: {
    label: string;
  };
}

const TaskNode: React.FC<TaskNodeProps> = ({ data }) => {
  return (
    <div className="bg-white border border-gray-300 shadow-lg rounded-md p-4 text-center">
      <div className="font-semibold text-gray-700">{data.label}</div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle type="target" position={Position.Top} id="b" />
    </div>
  );
};

export default TaskNode;
