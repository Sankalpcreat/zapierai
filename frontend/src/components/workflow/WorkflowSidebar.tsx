import React from 'react';

const WorkflowSidebar: React.FC<{ onAddTask: (task: any) => void }> = ({ onAddTask }) => {
  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),  
      name: 'New Task',
      status: 'pending',
      config: {},
    };
    onAddTask(newTask);
  };

  return (
    <div className="workflow-sidebar">
      <h2 className="text-lg mb-2">Add Tasks</h2>
      <button onClick={handleAddTask} className="btn btn-primary">
        Add New Task
      </button>
    </div>
  );
};

export default WorkflowSidebar;
