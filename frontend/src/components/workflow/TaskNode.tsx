// Represents individual tasks within the workflow.
import React from 'react';

const TaskNode: React.FC<{ task: any }> = ({ task }) => {
  return (
    <div className="task-node bg-gray-200 p-4 border rounded">
      <h3 className="text-lg font-bold">{task.name}</h3>
      <p>Type: {task.type}</p>
      <p>Status: {task.status}</p>
    </div>
  );
};

export default TaskNode;
