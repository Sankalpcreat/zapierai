// Manages conditional logic between tasks (success and failure paths).
import React, { useState } from 'react';

interface TaskConditionalLogicProps {
  onConditionSet: (successTaskId: number, failureTaskId: number) => void;
  tasks: { id: number; name: string }[];
}

const TaskConditionalLogic: React.FC<TaskConditionalLogicProps> = ({ onConditionSet, tasks }) => {
  const [successTaskId, setSuccessTaskId] = useState<number | null>(null);
  const [failureTaskId, setFailureTaskId] = useState<number | null>(null);

  const handleSetCondition = () => {
    if (successTaskId !== null && failureTaskId !== null) {
      onConditionSet(successTaskId, failureTaskId);
    } else {
      alert('Please select both success and failure tasks.');
    }
  };

  return (
    <div className="task-conditional-logic">
      <h3 className="text-lg font-semibold mb-4">Set Conditional Logic</h3>

      <label htmlFor="successTask">On Success</label>
      <select
        id="successTask"
        value={successTaskId || ''}
        onChange={(e) => setSuccessTaskId(parseInt(e.target.value))}
        className="select-field mb-4"
      >
        <option value="" disabled>Select a task</option>
        {tasks.map((task) => (
          <option key={task.id} value={task.id}>
            {task.name}
          </option>
        ))}
      </select>

      <label htmlFor="failureTask">On Failure</label>
      <select
        id="failureTask"
        value={failureTaskId || ''}
        onChange={(e) => setFailureTaskId(parseInt(e.target.value))}
        className="select-field mb-4"
      >
        <option value="" disabled>Select a task</option>
        {tasks.map((task) => (
          <option key={task.id} value={task.id}>
            {task.name}
          </option>
        ))}
      </select>

      <button onClick={handleSetCondition} className="btn btn-primary mt-4">
        Set Conditional Logic
      </button>
    </div>
  );
};

export default TaskConditionalLogic;
