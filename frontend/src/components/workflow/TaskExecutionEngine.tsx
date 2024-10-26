import React, { useEffect, useState } from 'react';
import { useWorkflowContext } from '../../contexts/WorkflowContext';

interface TaskExecutionEngineProps {
  tasks: any[];  
  onTaskComplete: (taskId: number, status: 'completed' | 'failed') => void;
}

const TaskExecutionEngine: React.FC<TaskExecutionEngineProps> = ({ tasks, onTaskComplete }) => {
  const { activeWorkflow } = useWorkflowContext();
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  useEffect(() => {
    if (tasks && tasks.length > 0) {
      executeTask(tasks[currentTaskIndex]);
    }
  }, [currentTaskIndex]);

  const executeTask = async (task: any) => {
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
        setCurrentTaskIndex(currentTaskIndex + 1);
      }
    } catch (error) {
      console.error(`Task failed: ${task.name}`);
      onTaskComplete(task.id, 'failed');
    }
  };

  return (
    <div className="task-execution-engine">
      <h2 className="text-lg font-bold">Executing Workflow: {activeWorkflow?.name}</h2>
      <p>Current Task: {tasks[currentTaskIndex]?.name}</p>
    </div>
  );
};

export default TaskExecutionEngine;
