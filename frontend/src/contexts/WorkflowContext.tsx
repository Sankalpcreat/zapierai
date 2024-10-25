import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Workflow } from '../types/workflow';


interface WorkflowContextType {
  workflows: Workflow[];
  activeWorkflow: Workflow | null;
  addWorkflow: (workflow: Workflow) => void;
  setActiveWorkflow: (workflow: Workflow) => void;
}


const WorkflowContext = createContext<WorkflowContextType | undefined>(undefined);

export const WorkflowContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [activeWorkflow, setActiveWorkflowState] = useState<Workflow | null>(null);

  const addWorkflow = (workflow: Workflow) => {
    setWorkflows([...workflows, workflow]);
  };

  const setActiveWorkflow = (workflow: Workflow) => {
    setActiveWorkflowState(workflow);
  };

  return (
    <WorkflowContext.Provider value={{ workflows, activeWorkflow, addWorkflow, setActiveWorkflow }}>
      {children}
    </WorkflowContext.Provider>
  );
};

export const useWorkflowContext = () => {
  const context = useContext(WorkflowContext);
  if (!context) {
    throw new Error('useWorkflowContext must be used within a WorkflowContextProvider');
  }
  return context;
};
