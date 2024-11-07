import api from './api';
import { WorkflowCreate, Workflow } from '../types/workflow';

export const createWorkflow = async (workflowData: WorkflowCreate): Promise<Workflow> => {
  const response = await api.post<Workflow>('/workflows', workflowData);
  return response.data;
};

export const getAllWorkflows = async (): Promise<Workflow[]> => {
  const response = await api.get<Workflow[]>('/workflows');
  return response.data;
};

export const getWorkflowById = async (workflowId: number): Promise<Workflow> => {
  const response = await api.get<Workflow>(`/workflows/${workflowId}`);
  return response.data;
};

export const updateWorkflow = async (workflowId: number, workflowData: WorkflowCreate): Promise<Workflow> => {
  const response = await api.put<Workflow>(`/workflows/${workflowId}`, workflowData);
  return response.data;
};

export const deleteWorkflow = async (workflowId: number): Promise<void> => {
  await api.delete(`/workflows/${workflowId}`);
};
