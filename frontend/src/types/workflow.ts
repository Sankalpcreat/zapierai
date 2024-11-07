export interface WorkflowCreate {
  name: string;
  description?: string;
}

export interface Workflow {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
