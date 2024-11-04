import api from './api';
import { WorkflowCreate, WorkflowResponse } from '../types/workflow';

export const createWorkflow = async (workflowData: WorkflowCreate): Promise<WorkflowResponse> => {
  const response = await api.post<WorkflowResponse>('/workflows', workflowData);
  return response.data;
};

export const getWorkflows = async (): Promise<WorkflowResponse[]> => {
  const response = await api.get<WorkflowResponse[]>('/workflows');
  return response.data;
};

export const getWorkflowById = async (workflowId: number): Promise<WorkflowResponse> => {
  const response = await api.get<WorkflowResponse>(`/workflows/${workflowId}`);
  return response.data;
};

export const updateWorkflow = async (workflowId: number, workflowData: WorkflowCreate): Promise<WorkflowResponse> => {
  const response = await api.put<WorkflowResponse>(`/workflows/${workflowId}`, workflowData);
  return response.data;
};

export const deleteWorkflow = async (workflowId: number): Promise<void> => {
  await api.delete(`/workflows/${workflowId}`);
};
