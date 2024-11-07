// src/components/WorkflowCanvas/ConnectionLine.tsx
import React from 'react';
import { BezierEdge, EdgeProps } from 'reactflow';
import 'reactflow/dist/style.css';

const ConnectionLine: React.FC<EdgeProps> = (props) => {
  return <BezierEdge {...props} style={{ stroke: '#4a90e2', strokeWidth: 2 }} />;
};

export default ConnectionLine;
