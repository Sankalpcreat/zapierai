import { useEffect, useState } from 'react';
import { Task } from '../types/task';
import { useTaskContext } from '../contexts/TaskContext';
import axios from 'axios';

const useFetchTasks = (workflowId: number) => {
  const { addTask } = useTaskContext();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get<Task[]>(`/api/tasks/workflow/${workflowId}`);
        response.data.forEach((task) => addTask(task));
      } catch (err) {
        setError('Failed to fetch tasks',err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [workflowId, addTask]);

  return { loading, error };
};

export default useFetchTasks;
