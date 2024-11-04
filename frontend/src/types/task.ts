interface AIImageGenerationResult {
  imageUrl: string;
}

interface ApiTaskResult {
  response: string | object;
}

interface EmailTaskResult {
  status: 'sent' | 'failed';
  timestamp: string;
}

// Union type for possible task results
type TaskResult = AIImageGenerationResult | ApiTaskResult | EmailTaskResult;

// Define configuration options specifically for each type of task
interface AIImageGenerationConfig {
  prompt: string;
  style?: string;
  width: number;
  height: number;
}

interface ApiTaskConfig {
  endpoint: string;
  apiKey?: string;
  payload?: Record<string, string | number | boolean>;
}

interface EmailTaskConfig {
  to: string;
  subject: string;
  body: string;
}

// Union type for possible task configurations
type TaskConfig = AIImageGenerationConfig | ApiTaskConfig | EmailTaskConfig;

// Task creation interface
export interface TaskCreate {
  workflowId: number;
  name: string;
  type: 'ai-image-generation' | 'api' | 'email';
  config?: TaskConfig;
}

// Task response interface
export interface TaskResponse {
  id: number;
  name: string;
  type: 'ai-image-generation' | 'api' | 'email';
  config?: TaskConfig;
  status: TaskStatus;
  result?: TaskResult;
  createdAt: string;
  updatedAt: string;
}

// Define possible task statuses as a union of literal types
export type TaskStatus = 'pending' | 'in-progress' | 'completed' | 'failed';
