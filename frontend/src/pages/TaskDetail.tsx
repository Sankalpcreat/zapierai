import React from 'react';
import { useParams } from 'react-router-dom';
import { updateTaskStatus } from '../services/taskService';
import { TaskStatusIndicator } from '../components/workflow/TaskStatusIndicator';

const TaskDetail: React.FC = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const [status, setStatus] = React.useState<'pending' | 'in-progress' | 'completed' | 'failed'>('pending');

  const handleStatusChange = async (newStatus: 'pending' | 'in-progress' | 'completed' | 'failed') => {
    await updateTaskStatus(Number(taskId), newStatus);
    setStatus(newStatus);
  };

  return (
    <div className="task-detail-page">
      <h1 className="text-2xl mb-4">Task {taskId}</h1>

      <TaskStatusIndicator status={status} />

      <div className="status-actions">
        <button onClick={() => handleStatusChange('in-progress')} className="btn btn-blue">In Progress</button>
        <button onClick={() => handleStatusChange('completed')} className="btn btn-green">Complete Task</button>
        <button onClick={() => handleStatusChange('failed')} className="btn btn-red">Fail Task</button>
      </div>
    </div>
  );
};

export default TaskDetail;
