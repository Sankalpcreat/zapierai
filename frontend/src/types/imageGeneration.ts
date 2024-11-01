
export interface ImageGenerationRequest {
  prompt: string;        
  width: number;          
  height: number;    
  style?: string;         
  id?: number;            
}

// Result type for the generated image
export interface ImageGenerationResult {
  requestId: number;      
  resultUrl: string;     
  createdAt: string;      
}
