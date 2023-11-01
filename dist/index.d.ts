/// <reference types="node" />
/// <reference types="node" />
import { HistoryAudio, HistoryItem } from './class/history';
import { AudioResponse, ModelInfo } from './class/model';
import { TextToSpeechOptions } from './class/tts';
import { UserInfo, UserSubscriptionInfo } from './class/user';
import { AddVoiceRequest, EditVoiceRequest, Voice, VoiceSettings } from './class/voices';
export default class ElevenLabsAPI {
    private apiKey;
    private httpClient;
    constructor(apiKey: string);
    /**
     *
     * @param voiceId
     * @param text
     * @returns
     */
    streamTextToSpeech(voiceId: string, text: string): Promise<NodeJS.ReadableStream>;
    /**
     *
     * @returns
     */
    getDefaultVoiceSettings(): Promise<VoiceSettings>;
    /**
     *
     * @returns Promise<Voice[]>
     */
    getVoices(): Promise<Voice[]>;
    /**
     *
     * @param voiceId
     * @param withSettings
     * @returns Promise<{ available_for_tiers: string[];
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
    voice_id: string; }>
     */
    getVoice(voiceId: string, withSettings?: boolean): Promise<Voice>;
    /**
     *
     * @param voiceId
     * @returns Promise<{
     * similarity_boost: number;
     * stability: number;
     * style: number,
     * use_speaker_boost: boolean
     * }>
     */
    getVoiceSettings(voiceId: string): Promise<VoiceSettings>;
    /**
     *
     * @param data AddVoiceRequest
     */
    addVoice(data: AddVoiceRequest): Promise<void>;
    /**
     *
     * @param voiceId
     * @param data
     */
    editVoice(voiceId: string, data: EditVoiceRequest): Promise<void>;
    /**
     *
     * @param voiceId
     */
    deleteVoice(voiceId: string): Promise<void>;
    /**
     *
     * @param voiceId
     * @param sampleId
     */
    deleteSample(voiceId: string, sampleId: string): Promise<void>;
    /**
     *
     * @param voiceId
     * @param settings
     */
    editVoiceSettings(voiceId: string, settings: VoiceSettings): Promise<void>;
    /**
     *
     * @param historyItemId
     * @returns
     */
    getHistoryItemAudio(historyItemId: string): Promise<HistoryAudio>;
    /**
     *
     * @param historyItemId
     * @returns
     */
    getHistoryItem(historyItemId: string): Promise<HistoryItem>;
    /**
     *
     * @param historyItemId
     */
    deleteHistoryItem(historyItemId: string): Promise<void>;
    /**
     *
     * @param historyItemIds
     * @returns
     */
    downloadHistoryItems(historyItemIds: string[]): Promise<Buffer>;
    /**
     *
     * @returns
     */
    getUserInfo(): Promise<UserInfo>;
    /**
     *
     * @returns
     */
    getUserSubscriptionInfo(): Promise<UserSubscriptionInfo>;
    /**
     *
     * @param voiceId
     * @param options
     * @returns
     */
    textToSpeech(voiceId: string, options: TextToSpeechOptions): Promise<AudioResponse>;
    /**
     *
     * @returns
     */
    getModels(): Promise<ModelInfo[]>;
}
