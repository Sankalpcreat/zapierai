// Shows the real-time status of tasks
import React from 'react'

interface TaskStatusIndicatorProps{
    status:'pending'| 'in-progress'|'completed'|'failed';
}

const TaskStatusIndicator: React.FC<TaskStatusIndicatorProps> = ({ status }) => {
    const getStatusColor = () => {
      switch (status) {
        case 'pending':
          return 'text-gray-500';
        case 'in-progress':
          return 'text-blue-500';
        case 'completed':
          return 'text-green-500';
        case 'failed':
          return 'text-red-500';
        default:
          return 'text-gray-500';
      }
    };
    return (
        <div className={`task-status-indicator ${getStatusColor()}`}>
          {status === 'pending' && <p>Task is pending...</p>}
          {status === 'in-progress' && <p>Task is in progress...</p>}
          {status === 'completed' && <p>Task completed successfully!</p>}
          {status === 'failed' && <p>Task failed to complete.</p>}
        </div>
      );
    };

export  default TaskStatusIndicator