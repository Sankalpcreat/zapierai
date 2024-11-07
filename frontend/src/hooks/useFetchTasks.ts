import { useEffect, useState } from 'react';
import { getTasksByWorkflowId } from '../services/taskService';
import { Task } from '../types/task';

const useFetchTasks = (workflowId: number) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasksByWorkflowId(workflowId);
        setTasks(data);
      } catch (err) {
        setError('Failed to fetch tasks',err);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, [workflowId]);

  return { tasks, loading, error };
};

export default useFetchTasks;
