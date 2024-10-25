export interface ImageGenerationParams {
    prompt: string;             
    style?: string;            
    width?: number;             
    height?: number;            
    numImages?: number;        
  }
  
  
export interface ImageGenerationRequest {
    id: number;
    prompt: string;
    style?: string;
    status: 'pending' | 'in-progress' | 'completed' | 'failed';
    createdAt: string;
    resultUrl?: string;        
    errorMessage?: string;      
  }
  

export interface ImageGenerationResult {
    requestId: number;
    resultUrl: string;          
    createdAt: string;
  }
  

export interface ImageGenerationStatus {
    id: number;
    status: 'pending' | 'in-progress' | 'completed' | 'failed';
    resultUrl?: string;        
    errorMessage?: string;      
  }
  