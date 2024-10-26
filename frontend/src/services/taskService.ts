import api from './api';

export interface Task {
  id: number;
  name: string;
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
  workflowId: number;
}

export const fetchTasksByWorkflow = async (workflowId: number): Promise<Task[]> => {
  const response = await api.get(`/workflows/${workflowId}/tasks`);
  return response.data;
};

export const updateTaskStatus = async (taskId: number, status: 'pending' | 'in-progress' | 'completed' | 'failed'): Promise<Task> => {
  const response = await api.put(`/tasks/${taskId}/status`, { status });
  return response.data;
};

export const createTask = async (taskData: Partial<Task>): Promise<Task> => {
  const response = await api.post('/tasks', taskData);
  return response.data;
};
