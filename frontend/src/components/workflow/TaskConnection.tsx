// Visualizes the connections between tasks
import React from 'react';
import React from 'react';
import { TaskNodeType } from './TaskNode';

export interface TaskConnectionType {
  from: TaskNodeType;
  to: TaskNodeType;
}

const TaskConnection: React.FC<TaskConnectionType> = ({ from, to }) => {
  return (
    <svg className="task-connection absolute">
      <line
        x1={from.config?.x || 0}
        y1={from.config?.y || 0}
        x2={to.config?.x || 0}
        y2={to.config?.y || 0}
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
};

export default TaskConnection;
