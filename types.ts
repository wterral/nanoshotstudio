export interface StyleOption {
  id: string;
  label: string;
  description: string;
  prompt: string;
  icon: string;
  category: 'professional' | 'creative' | 'custom';
}

export interface GenerationState {
  isLoading: boolean;
  error: string | null;
  generatedImage: string | null;
}

export interface ImageState {
  original: string | null; // base64
  mimeType: string;
}
