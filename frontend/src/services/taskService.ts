import api from './api';
import { TaskCreate, TaskResponse, TaskStatus } from '../types/task';

export const createTask = async (taskData: TaskCreate): Promise<TaskResponse> => {
  const response = await api.post<TaskResponse>('/tasks', taskData);
  return response.data;
};

export const getTasksByWorkflowId = async (workflowId: number): Promise<TaskResponse[]> => {
  const response = await api.get<TaskResponse[]>(`/tasks/workflow/${workflowId}`);
  return response.data;
};

export const updateTaskStatus = async (taskId: number, status: TaskStatus): Promise<TaskResponse> => {
  const response = await api.put<TaskResponse>(`/tasks/${taskId}/status`, { status });
  return response.data;
};
