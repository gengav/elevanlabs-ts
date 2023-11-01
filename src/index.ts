import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { HistoryAudio, HistoryItem } from './class/history';
import { AudioResponse, ModelInfo } from './class/model';
import { TextToSpeechOptions } from './class/tts';
import { UserInfo, UserSubscriptionInfo } from './class/user';
import { AddVoiceRequest, EditVoiceRequest, Voice, VoiceSettings } from './class/voices';

export default class ElevenLabsAPI {
    private apiKey: string;
    private httpClient: AxiosInstance;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.httpClient = axios.create({
            baseURL: process.env.API_BASE_URL || 'https://api.elevenlabs.io/v1',
            headers: {
                'xi-api-key': this.apiKey,
            },
        });
    }
    /**
     * 
     * @param voiceId 
     * @param text 
     * @returns 
     */
    async streamTextToSpeech(voiceId: string, text: string): Promise<NodeJS.ReadableStream> {
        const url = `/text-to-speech/${voiceId}/stream`;
        const response: AxiosResponse = await this.httpClient.post(url, { text }, { responseType: 'stream' });
        return response.data;
    }
    /**
     * 
     * @returns 
     */
    async getDefaultVoiceSettings(): Promise<VoiceSettings> {
        const url = '/voices/settings/default';
        const response: AxiosResponse<VoiceSettings> = await this.httpClient.get(url);
        return response.data;
    }

    // Voices endpoints
    /**
     * 
     * @returns Promise<Voice[]>
     */
    async getVoices(): Promise<Voice[]> {
        const url = '/voices';
        const response: AxiosResponse = await this.httpClient.get(url);
        return response.data;
    }
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
    async getVoice(voiceId: string, withSettings = false): Promise<Voice> {
        const url = `/voices/${voiceId}`;
        const params = {
            with_settingsDefault: withSettings.toString(),
        };
        const response: AxiosResponse<Voice> = await this.httpClient.get(url, { params });
        return response.data;
    }
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
    async getVoiceSettings(voiceId: string): Promise<VoiceSettings> {
        const url = `/voices/${voiceId}/settings`;
        const response: AxiosResponse<VoiceSettings> = await this.httpClient.get(url);
        return response.data;
    }
    /**
     * 
     * @param data AddVoiceRequest
     */
    async addVoice(data: AddVoiceRequest): Promise<void> {
        const url = '/voices/add';
        return await this.httpClient.post(url, data)
    }
    /**
     * 
     * @param voiceId 
     * @param data 
     */
    async editVoice(voiceId: string, data: EditVoiceRequest): Promise<void> {
        const url = `/voices/${voiceId}/edit`;
        return await this.httpClient.post(url, data);
    }
    /**
     * 
     * @param voiceId 
     */
    async deleteVoice(voiceId: string): Promise<void> {
        const url = `/voices/${voiceId}`;
        return await this.httpClient.delete(url);
    }
    /**
     * 
     * @param voiceId 
     * @param sampleId 
     */
    async deleteSample(voiceId: string, sampleId: string): Promise<void> {
        const url = `/voices/${voiceId}/samples/${sampleId}`;
        return await this.httpClient.delete(url);
    }
    /**
     * 
     * @param voiceId 
     * @param settings 
     */
    async editVoiceSettings(voiceId: string, settings: VoiceSettings): Promise<void> {
        const url = `/voices/${voiceId}/settings/edit`;
        return await this.httpClient.post(url, settings);
    }
    /**
     * 
     * @param historyItemId 
     * @returns 
     */
    async getHistoryItemAudio(historyItemId: string): Promise<HistoryAudio> {
        const url = `/history/${historyItemId}/audio`;

        try {
            const response = await this.httpClient.get(url);
            return response.data as HistoryAudio;
        } catch (error) {
            throw error;
        }
    }
    /**
     * 
     * @param historyItemId 
     * @returns 
     */
    async getHistoryItem(historyItemId: string): Promise<HistoryItem> {
        const url = `/history/${historyItemId}`;

        try {
            const response = await this.httpClient.get(url);
            return response.data as HistoryItem;
        } catch (error) {
            throw error;
        }
    }
    /**
     * 
     * @param historyItemId 
     */
    async deleteHistoryItem(historyItemId: string): Promise<void> {
        const url = `/history/${historyItemId}`;

        try {
            await this.httpClient.delete(url);
        } catch (error) {
            throw error;
        }
    }
    /**
     * 
     * @param historyItemIds 
     * @returns 
     */
    async downloadHistoryItems(historyItemIds: string[]): Promise<Buffer> {
        const url = '/history/download';
        const body = { history_item_ids: historyItemIds };

        try {
            const response = await this.httpClient.post(url, body, { responseType: 'arraybuffer' });
            return Buffer.from(response.data);
        } catch (error) {
            throw error;
        }
    }
    /**
     * 
     * @returns 
     */
    async getUserInfo(): Promise<UserInfo> {
        const url = '/user';

        try {
            const response = await this.httpClient.get(url);
            return response.data as UserInfo;
        } catch (error) {
            throw error;
        }
    }
    /**
     * 
     * @returns 
     */
    async getUserSubscriptionInfo(): Promise<UserSubscriptionInfo> {
        const url = '/user/subscription';

        try {
            const response = await this.httpClient.get(url);
            return response.data as UserSubscriptionInfo;
        } catch (error) {
            throw error;
        }
    }
    /**
     * 
     * @param voiceId 
     * @param options 
     * @returns 
     */
    async textToSpeech(voiceId: string, options: TextToSpeechOptions): Promise<AudioResponse> {
        const url = `/text-to-speech/${voiceId}`;
        try {
            const response = await this.httpClient.post(url, options, { responseType: 'arraybuffer' });
            console.info('got response > ', response)
            return response.data as AudioResponse;
        } catch (error) {
            throw error;
        }
    }
    /**
     * 
     * @returns 
     */
    async getModels(): Promise<ModelInfo[]> {
        const url = '/models';

        try {
            const response = await this.httpClient.get(url);
            return response.data as ModelInfo[];
        } catch (error) {
            throw error;
        }
    }

    // Add more helper methods as needed
}

