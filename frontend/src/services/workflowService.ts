// Handles CRUD operations for workflows (fetch, create, update workflows).
import api from './api';

export interface Workflow {
  id: number;
  name: string;
  description: string;
}

export const fetchWorkflows = async (): Promise<Workflow[]> => {
  const response = await api.get('/workflows');
  return response.data;
};

export const fetchWorkflowById = async (workflowId: number): Promise<Workflow> => {
  const response = await api.get(`/workflows/${workflowId}`);
  return response.data;
};

export const createWorkflow = async (workflowData: Partial<Workflow>): Promise<Workflow> => {
  const response = await api.post('/workflows', workflowData);
  return response.data;
};

export const updateWorkflow = async (workflowId: number, workflowData: Partial<Workflow>): Promise<Workflow> => {
  const response = await api.put(`/workflows/${workflowId}`, workflowData);
  return response.data;
};
