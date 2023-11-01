export interface ModelInfo {
    can_be_finetuned: boolean;
    can_do_text_to_speech: boolean;
    can_do_voice_conversion: boolean;
    description: string;
    languages: LanguageInfo[];
    model_id: string;
    name: string;
    token_cost_factor: number;
  }
  
  export interface LanguageInfo {
    language_code: string;
    language_name: string;
  }

  export interface AudioResponse {
    audio: string;
  }