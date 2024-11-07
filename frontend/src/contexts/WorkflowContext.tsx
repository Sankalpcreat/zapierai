import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Workflow } from '../types/workflow';
import { getAllWorkflows } from '../services/workflowService';

interface WorkflowContextType {
  workflows: Workflow[];
  activeWorkflow: Workflow | null;
  setActiveWorkflow: (workflow: Workflow | null) => void;
  fetchWorkflows: () => Promise<void>;
}

const WorkflowContext = createContext<WorkflowContextType | undefined>(undefined);

export const WorkflowProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [activeWorkflow, setActiveWorkflow] = useState<Workflow | null>(null);

  const fetchWorkflows = async () => {
    try {
      const data = await getAllWorkflows();
      setWorkflows(data);
    } catch (error) {
      console.error('Failed to fetch workflows:', error);
    }
  };

  useEffect(() => {
    fetchWorkflows();
  }, []);

  return (
    <WorkflowContext.Provider value={{ workflows, activeWorkflow, setActiveWorkflow, fetchWorkflows }}>
      {children}
    </WorkflowContext.Provider>
  );
};

export const useWorkflowContext = () => {
  const context = useContext(WorkflowContext);
  if (!context) {
    throw new Error('useWorkflowContext must be used within a WorkflowProvider');
  }
  return context;
};
