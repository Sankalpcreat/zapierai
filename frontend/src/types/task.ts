export interface TaskCreate {
    name: string;
    type: 'api' | 'ai-image-generation' | 'manual';  
    config?: TaskConfig;                            
  }

export interface TaskConfig {
    apiEndpoint?: string;      
    imageGenerationParams?: ImageGenerationParams;  
    retryLimit?: number;        
  }

  export interface TaskResponse {
    id: number;
    name: string;
    type: 'api' | 'ai-image-generation' | 'manual';
    config?: TaskConfig;
    status: 'pending' | 'in-progress' | 'completed' | 'failed';
    createdAt: string;
    updatedAt?: string;
    workflowId: number; 
  }

  export interface Task {
    id: number;
    name: string;
    type: 'api' | 'ai-image-generation' | 'manual';
    config?: TaskConfig;
    status: 'pending' | 'in-progress' | 'completed' | 'failed';
    workflowId: number;
  }

  