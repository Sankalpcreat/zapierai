export interface ImageGenerationRequest {
  prompt: string;
  style?: string;
  width: number;
  height: number;
}

export interface ImageGenerationResult {
  requestId: number;
  resultUrl: string;
  createdAt: string;
}
