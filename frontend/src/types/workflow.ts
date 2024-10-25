import { Task } from './task';


export interface WorkflowCreate {
    name: string;
    description: string;
    tasks: TaskCreate[]; 
  }

  export interface WorkflowResponse {
    id: number;           
    name: string;
    description: string;
    tasks: Task[];        
    createdAt: string;    
    updatedAt?: string;   
    status: 'active' | 'completed' | 'pending'; 
  }

  export interface Workflow {
    id: number;
    name: string;
    description: string;
    tasks: Task[];
    status: 'active' | 'completed' | 'pending';
  }
  