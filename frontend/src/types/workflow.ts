export interface WorkflowCreate {
  name: string;
  description?: string;
}

export interface WorkflowResponse {
  id: number;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}
