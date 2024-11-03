import React, { useEffect, useState } from 'react';
import { useWorkflowContext } from '../../contexts/WorkflowContext';
import { TaskNodeType, TaskStatus } from '../../types/task';

interface TaskExecutionEngineProps {
  tasks: TaskNodeType[];  
  onTaskComplete: (taskId: number, status: TaskStatus) => void;
}

const TaskExecutionEngine: React.FC<TaskExecutionEngineProps> = ({ tasks, onTaskComplete }) => {
  const { activeWorkflow } = useWorkflowContext();
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  useEffect(() => {
    if (tasks.length > 0 && currentTaskIndex < tasks.length) {
      executeTask(tasks[currentTaskIndex]);
    }
  }, [currentTaskIndex]);

  const executeTask = async (task: TaskNodeType) => {
    try {
      console.log(`Executing task: ${task.name}`);

      if (task.type === 'ai-image-generation') {
     
        await new Promise((resolve) => setTimeout(resolve, 3000));
        onTaskComplete(task.id, 'completed');
      } else if (task.type === 'api-call') {
  
        await new Promise((resolve) => setTimeout(resolve, 2000));
        onTaskComplete(task.id, 'completed');
      } else {
        throw new Error('Task type not supported');
      }

    
      if (currentTaskIndex < tasks.length - 1) {
        setCurrentTaskIndex((prevIndex) => prevIndex + 1);
      }
    } catch (error) {
      console.error(`Task failed: ${task.name} with error: ${error.message}`);
      onTaskComplete(task.id, 'failed');
    }
  };

  return (
    <div className="task-execution-engine">
      <h2 className="text-lg font-bold">Executing Workflow: {activeWorkflow?.name}</h2>
      <p>Current Task: {tasks[currentTaskIndex]?.name || 'No task in progress'}</p>
    </div>
  );
};

export default TaskExecutionEngine;
