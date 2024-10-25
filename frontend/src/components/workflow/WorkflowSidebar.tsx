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
  const handleAddAITask = () => {
    const newTask = {
      id: Date.now(),
      name: 'AI Image Generation',
      type: 'ai-image-generation',
      prompt: 'A beautiful sunset over the mountains',
      width: 512,
      height: 512,
      status: 'pending',
    };
    onAddTask(newTask);
  };


  return (
    <div className="workflow-sidebar">
      <h2 className="text-lg mb-2">Add Tasks</h2>
      <button onClick={handleAddTask} className="btn btn-primary">
        Add New Task
      </button>
      <button onClick={handleAddAITask} className="btn btn-blue mb-4">
        Add AI Image Task
      </button>

    </div>
  );
};

export default WorkflowSidebar;
