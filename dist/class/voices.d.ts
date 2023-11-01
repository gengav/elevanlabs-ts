export interface FineTuningResponseModel {
    fine_tuning_requested: boolean;
    finetuning_state: 'not_started' | 'is_fine_tuning' | 'fine_tuned';
    is_allowed_to_fine_tune: boolean;
    language: string;
    model_id: string;
    slice_ids: string[];
    verification_attempts: {
        accepted: boolean;
        date_unix: number;
        levenshtein_distance: number;
    }[];
    recording: {
        mime_type: string;
        recording_id: string;
        size_bytes: number;
        transcription: string;
        upload_date_unix: number;
    };
}
export interface VoiceSettingsResponseModel {
    similarity_boost: number;
    stability: number;
}
export interface VoiceSharingResponseModel {
    cloned_by_count: number;
    history_item_sample_id: string;
    liked_by_count: number;
    original_voice_id: string;
    public_owner_id: string;
    status: string;
}
export interface Voice {
    available_for_tiers: string[];
    category: string;
    description: string;
    fine_tuning: FineTuningResponseModel;
    labels: object;
    name: string;
    preview_url: string;
    samples: {
        file_name: string;
        hash: string;
        mime_type: string;
        sample_id: string;
        size_bytes: number;
        settings: VoiceSettingsResponseModel;
        sharing: VoiceSharingResponseModel;
    }[];
    voice_id: string;
}
export interface VoiceSettings {
    similarity_boost: number;
    stability: number;
    style: number;
    use_speaker_boost: boolean;
}
export interface EditVoiceRequest {
    description?: string;
    files?: string[];
    labels?: string;
    name: string;
}
export interface AddVoiceRequest {
    description?: string;
    files?: string[];
    labels?: string;
    name: string;
}
