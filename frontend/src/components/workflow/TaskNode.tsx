// Represents individual tasks within the workflow.
import React from 'react';

export interface TaskNodeType {
  id: number;
  name: string;
  type: 'ai-image-generation' | 'api' | 'email';
  status?: 'pending' | 'in-progress' | 'completed';
  config?: Record<string,undefined>;
}
interface TaskNodeProps {
  task: TaskNodeType;
}

const TaskNode: React.FC<TaskNodeProps> = ({ task }) => {
  return (
    <div className="task-node bg-gray-200 p-4 border rounded">
      <h3 className="text-lg font-bold">{task.name}</h3>
      <p>Type: {task.type}</p>
      <p>Status: {task.status || 'pending'}</p>
    </div>
  );
};

export default TaskNode;