import api from './api';
import { TaskCreate, TaskResponse, TaskStatus } from '../types/task';

// Function to create a new task
export const createTask = async (taskData: TaskCreate): Promise<TaskResponse> => {
  const response = await api.post<TaskResponse>('/tasks', taskData);
  return response.data;
};

// Function to fetch tasks by workflow ID
export const fetchTasksByWorkflow = async (workflowId: number): Promise<TaskResponse[]> => {
  const response = await api.get<TaskResponse[]>(`/tasks/workflow/${workflowId}`);
  return response.data;
};

// Function to update the status of a task
export const updateTaskStatus = async (taskId: number, status: { status: TaskStatus }): Promise<TaskResponse> => {
  const response = await api.put<TaskResponse>(`/tasks/${taskId}/status`, status);
  return response.data;
};
