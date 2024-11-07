import { useEffect, useState } from 'react';
import { getAllWorkflows } from '../services/workflowService';
import { Workflow } from '../types/workflow';

const useFetchWorkflows = () => {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorkflows = async () => {
      try {
        const data = await getAllWorkflows();
        setWorkflows(data);
      } catch (err) {
        setError('Failed to fetch workflows',err);
      } finally {
        setLoading(false);
      }
    };
    fetchWorkflows();
  }, []);

  return { workflows, loading, error };
};

export default useFetchWorkflows;
