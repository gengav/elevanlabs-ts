```markdown
# elevenlabs-ts

`elevenlabs-ts` is a TypeScript client library for interfacing with the Eleven Labs API, which offers a range of services related to voice synthesis and text-to-speech (TTS) capabilities.

## Installation

To use the `elevenlabs-ts` package in your project, run:

```sh
npm install elevenlabs-ts
```

Or if you prefer using Yarn:

```sh
yarn add elevenlabs-ts
```
### Use Case:
to get Voices, options
```typescript
    const voices = await elevenLabs.getVoices();
```
to get single voice
```typescript
    const audio_response = await elevenLabs.getVoice('voiceId')
```
to convert text to speech
```typescript
    const audio_response: AudioResponse = await elevenLabs.textToSpeech(VOICE_ID, { text: inputText })
```

## Usage

To get started with the Eleven Labs API client, you need to create an instance of the `ElevenLabsAPI` class with your API key.

```typescript
import ElevenLabsAPI from 'elevenlabs-ts';

const apiKey = 'YOUR_API_KEY';
const elevenLabsAPI = new ElevenLabsAPI(apiKey);
```
### Saving to firebase
```typescript
try {
    const audio_response = await elevenLabs.textToSpeech(VOICE_ID, { text: inputText }) as any

    const filepath = `filename-${new Date().toTimeString()}.mp3`
    await admin.storage()
    .bucket()
    .file(filepath)
    .save(audio_response, {
        metadata: {
            contentType: 'audio/mpeg',
            metadata: {
                source: 'ElevenLabs'
            }
        }
    });

    const nextYear = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    const url = await admin.storage().bucket().file(filepath).getSignedUrl({action: 'read', expires: nextYear})

    return { code: 200, message: 'success', data: audio_response, url: url }
```
### Methods

Here is an overview of the methods available in the `ElevenLabsAPI` class:

#### Text-to-Speech

- `streamTextToSpeech(voiceId: string, text: string): Promise<NodeJS.ReadableStream>`
- `textToSpeech(voiceId: string, options: TextToSpeechOptions): Promise<AudioResponse>`

#### Voice Management

- `getVoices(): Promise<Voice[]>`
- `getVoice(voiceId: string, withSettings?: boolean): Promise<Voice>`
- `addVoice(data: AddVoiceRequest): Promise<void>`
- `editVoice(voiceId: string, data: EditVoiceRequest): Promise<void>`
- `deleteVoice(voiceId: string): Promise<void>`
- `getVoiceSettings(voiceId: string): Promise<VoiceSettings>`
- `editVoiceSettings(voiceId: string, settings: VoiceSettings): Promise<void>`

#### User Information

- `getUserInfo(): Promise<UserInfo>`
- `getUserSubscriptionInfo(): Promise<UserSubscriptionInfo>`

#### History

- `getHistoryItemAudio(historyItemId: string): Promise<HistoryAudio>`
- `getHistoryItem(historyItemId: string): Promise<HistoryItem>`
- `deleteHistoryItem(historyItemId: string): Promise<void>`
- `downloadHistoryItems(historyItemIds: string[]): Promise<Buffer>`

#### Models

- `getModels(): Promise<ModelInfo[]>`

#### Default Voice Settings

- `getDefaultVoiceSettings(): Promise<VoiceSettings>`

### Example

Here's an example of converting text to speech:

```typescript
async function convertTextToSpeech() {
  const voiceId = 'voice-id'; // Replace with a valid voice ID
  const text = 'Hello, world!';
  const stream = await elevenLabsAPI.streamTextToSpeech(voiceId, text);

  // Handle the stream, e.g., save to a file or play audio
}
convertTextToSpeech();
```

```typescript
async function textToSpeech(text: string) {
  const voiceId = 'voice-id'; // Replace with a valid voice ID
  const response = await elevenLabsAPI.textToSpeech(voiceId, text);
  // Handle the stream, e.g., save to a file or play audio
}
textToSpeech('Hello, world!');
```

## Environment Variables

The library uses the following environment variable for the API base URL:

- `API_BASE_URL` - The base URL for the Eleven Labs API. If not set, the default is `https://api.elevenlabs.io/v1`.

## Response and Error Handling

All methods return a promise that resolves to the requested data or throws an error in case of failure. Make sure to handle these appropriately in your application.

## Contributing

We welcome contributions to the `elevenlabs-ts` package. Please read the contributing guidelines before submitting your PR.

## License

This project is licensed under the [MIT License](LICENSE).

## Disclaimer

This package is not officially maintained by Eleven Labs. Please use it at your own risk.
```

Make sure to replace `YOUR_API_KEY` with the actual API key provided to you by Eleven Labs. The `README.md` file should be placed in the root directory of the npm package. It is important to note that the code snippets in the README are for demonstration purposes and should be adapted for real use cases.

