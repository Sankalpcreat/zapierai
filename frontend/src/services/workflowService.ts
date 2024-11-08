import api from './api';
import { WorkflowCreate, Workflow } from '../types/workflow';


export const getAllWorkflows = async (): Promise<Workflow[]> => {
  try {
    const response = await api.get<Workflow[]>('/workflows');
    return response.data;
  } catch (error) {
    console.error('Error fetching workflows:', error);
    throw error;
  }
};

export const createWorkflow = async (workflowData: WorkflowCreate): Promise<Workflow> => {
  try {
    const response = await api.post<Workflow>('/workflows', workflowData);
    return response.data;
  } catch (error) {
    console.error('Error creating workflow:', error);
    throw error;
  }
};


export const getWorkflowById = async (workflowId: number): Promise<Workflow> => {
  try {
    const response = await api.get<Workflow>(`/workflows/${workflowId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching workflow with ID ${workflowId}:`, error);
    throw error;
  }
};


export const updateWorkflow = async (workflowId: number, workflowData: WorkflowCreate): Promise<Workflow> => {
  try {
    const response = await api.put<Workflow>(`/workflows/${workflowId}`, workflowData);
    return response.data;
  } catch (error) {
    console.error(`Error updating workflow with ID ${workflowId}:`, error);
    throw error;
  }
};


export const deleteWorkflow = async (workflowId: number): Promise<void> => {
  try {
    await api.delete(`/workflows/${workflowId}`);
  } catch (error) {
    console.error(`Error deleting workflow with ID ${workflowId}:`, error);
    throw error;
  }
};
