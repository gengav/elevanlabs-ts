export interface HistoryResponseModel {
    has_more: boolean;
    history: HistoryItem[];
    last_history_item_id: string;
}

export interface HistoryItem {
    character_count_change_from: number;
    character_count_change_to: number;
    content_type: string;
    date_unix: number;
    feedback: FeedbackResponseModel;
    history_item_id: string;
    request_id: string;
    settings: Settings;
    state: string;
    text: string;
    voice_id: string;
    voice_name: string;
}

export interface Settings {
    similarity_boost: number;
    stability: number;
}

export interface FeedbackResponseModel {
    audio_quality: boolean;
    emotions: boolean;
    feedback: string;
    glitches: boolean;
    inaccurate_clone: boolean;
    other: boolean;
    review_status: string;
    thumbs_up: boolean;
}

export interface HistoryAudio {
    url: string;
}