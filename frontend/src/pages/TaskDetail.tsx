import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTasksByWorkflow, updateTaskStatus } from '../services/taskService';
import { Task, TaskStatus } from '../types/task';

const TaskDetail: React.FC = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    const loadTask = async () => {
      if (taskId) {
        const taskData = await fetchTasksByWorkflow(parseInt(taskId));
        setTask(taskData);
      }
    };
    loadTask();
  }, [taskId]);

  const handleUpdateStatus = async (newStatus: TaskStatus) => {
    if (task) {
      const updatedTask = await updateTaskStatus(task.id, newStatus);
      setTask(updatedTask);
    }
  };

  return (
    <div className="task-detail">
      <h1 className="text-2xl mb-4">Task: {task?.name}</h1>
      <p>Type: {task?.type}</p>
      <p>Status: {task?.status}</p>

      <button onClick={() => handleUpdateStatus('in-progress')} className="btn btn-blue">Start Task</button>
      <button onClick={() => handleUpdateStatus('completed')} className="btn btn-green">Complete Task</button>
    </div>
  );
};

export default TaskDetail;
