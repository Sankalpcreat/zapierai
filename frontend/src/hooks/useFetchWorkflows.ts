import { useEffect, useState } from 'react';
import { Workflow } from '../types/workflow';
import { useWorkflowContext } from '../contexts/WorkflowContext';
import axios from 'axios';

const useFetchWorkflows = () => {
  const { addWorkflow } = useWorkflowContext();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorkflows = async () => {
      try {
        const response = await axios.get<Workflow[]>('/api/workflows');
        response.data.forEach((workflow) => addWorkflow(workflow));
      } catch (err) {
        setError('Failed to fetch workflows',err);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkflows();
  }, [addWorkflow]);

  return { loading, error };
};

export default useFetchWorkflows;
