// Visualizes the connections between tasks
import React from 'react';

const TaskConnection: React.FC<{ from: any; to: any }> = ({ from, to }) => {
  return (
    <svg className="task-connection">
      <line
        x1={from.x}
        y1={from.y}
        x2={to.x}
        y2={to.y}
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
};

export default TaskConnection;
