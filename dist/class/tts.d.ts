import { VoiceSettings } from "./voices";
export interface TextToSpeechOptions {
    optimize_streaming_latency?: number;
    model_id?: string;
    text: string;
    voice_settings?: VoiceSettings;
}
export interface TextToSpeechStreamResponse {
    audioStream: ReadableStream<Uint8Array>;
}
