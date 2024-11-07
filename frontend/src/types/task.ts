export type TaskStatus = 'pending' | 'in-progress' | 'completed' | 'failed';

interface BaseTaskConfig {
  id: number;
  name: string;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
}

export interface AIImageGenerationConfig extends BaseTaskConfig {
  type: 'ai-image-generation';
  prompt: string;
  width: number;
  height: number;
}

export interface ApiTaskConfig extends BaseTaskConfig {
  type: 'api';
  endpoint: string;
  payload?: Record<string, unknown>;
}

export interface EmailTaskConfig extends BaseTaskConfig {
  type: 'email';
  to: string;
  subject: string;
  body: string;
}

export type TaskConfig = AIImageGenerationConfig | ApiTaskConfig | EmailTaskConfig;

export interface TaskCreate {
  workflowId: number;
  name: string;
  type: 'ai-image-generation' | 'api' | 'email';
  config?: TaskConfig;
}

export interface TaskResponse extends TaskCreate {
  id: number;
  status: TaskStatus;
  result?: Record<string, unknown>;
}
