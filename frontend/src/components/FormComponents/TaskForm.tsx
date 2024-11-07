import React, { useState } from 'react';

interface TaskFormProps {
  onSave: (taskName: string, taskType: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSave }) => {
  const [taskName, setTaskName] = useState('');
  const [taskType, setTaskType] = useState('api');

  const handleSubmit = () => {
    onSave(taskName, taskType);
    setTaskName('');
  };

  return (
    <div className="task-form p-4 bg-white shadow-md rounded-md">
      <h3 className="text-lg font-bold mb-3">Configure Task</h3>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="mb-3 p-2 border rounded w-full"
      />
      <select
        value={taskType}
        onChange={(e) => setTaskType(e.target.value)}
        className="mb-3 p-2 border rounded w-full"
      >
        <option value="api">API Call</option>
        <option value="image">Image Generation</option>
        <option value="conditional">Conditional Logic</option>
      </select>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
      >
        Save Task
      </button>
    </div>
  );
};

export default TaskForm;
