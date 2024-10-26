import { useState, useEffect } from 'react';
import axios from 'axios';

export interface Task {
  id: number;
  name: string;
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
}

const useFetchTasks = (workflowId: number) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!workflowId) return;

    const fetchTasks = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/api/workflows/${workflowId}/tasks`);
        setTasks(response.data);
      } catch (err) {
        setError('Failed to fetch tasks.');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [workflowId]);

  return { tasks, loading, error };
};

export default useFetchTasks;
