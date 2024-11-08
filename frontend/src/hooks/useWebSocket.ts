import { useState, useEffect, useCallback } from 'react';
import { Workflow } from '../types/workflow';
import { getAllWorkflows, createWorkflow, updateWorkflow } from '../services/workflowService';

const useWorkflow = () => {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [activeWorkflow, setActiveWorkflow] = useState<Workflow | null>(null);

  useEffect(() => {
    const fetchWorkflows = async () => {
      try {
        const data = await getAllWorkflows();
        setWorkflows(data);
      } catch (error) {
        console.error('Error fetching workflows:', error);
      }
    };
    fetchWorkflows();
  }, []);

  const addWorkflow = useCallback(async (workflowName: string) => {
    try {
      const newWorkflow = await createWorkflow({ name: workflowName });
      setWorkflows((prevWorkflows) => [...prevWorkflows, newWorkflow]);
    } catch (error) {
      console.error('Error adding workflow:', error);
    }
  }, []);

  const updateActiveWorkflow = useCallback(async (updatedWorkflow: Workflow) => {
    try {
      const updated = await updateWorkflow(updatedWorkflow.id, updatedWorkflow);
      setActiveWorkflow(updated);
    } catch (error) {
      console.error('Error updating workflow:', error);
    }
  }, []);

  return {
    workflows,
    activeWorkflow,
    setActiveWorkflow,
    addWorkflow,
    updateActiveWorkflow,
  };
};

export default useWorkflow;
