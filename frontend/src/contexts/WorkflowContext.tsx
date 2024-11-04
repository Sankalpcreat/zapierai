import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Workflow } from '../types/workflow';

interface WorkflowContextProps {
  activeWorkflow: Workflow | null;
  setActiveWorkflow: (workflow: Workflow) => void;
  workflows: Workflow[];
  addWorkflow: (workflow: Workflow) => void;
}

const WorkflowContext = createContext<WorkflowContextProps | undefined>(undefined);

export const WorkflowProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [activeWorkflow, setActiveWorkflow] = useState<Workflow | null>(null);

  const addWorkflow = (workflow: Workflow) => {
    setWorkflows((prev) => [...prev, workflow]);
  };

  return (
    <WorkflowContext.Provider value={{ activeWorkflow, setActiveWorkflow, workflows, addWorkflow }}>
      {children}
    </WorkflowContext.Provider>
  );
};

export const useWorkflowContext = (): WorkflowContextProps => {
  const context = useContext(WorkflowContext);
  if (!context) {
    throw new Error('useWorkflowContext must be used within a WorkflowProvider');
  }
  return context;
};
