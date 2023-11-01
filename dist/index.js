"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var ElevenLabsAPI = /** @class */ (function () {
    function ElevenLabsAPI(apiKey) {
        this.apiKey = apiKey;
        this.httpClient = axios_1.default.create({
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
    ElevenLabsAPI.prototype.streamTextToSpeech = function (voiceId, text) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "/text-to-speech/".concat(voiceId, "/stream");
                        return [4 /*yield*/, this.httpClient.post(url, { text: text }, { responseType: 'stream' })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     *
     * @returns
     */
    ElevenLabsAPI.prototype.getDefaultVoiceSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = '/voices/settings/default';
                        return [4 /*yield*/, this.httpClient.get(url)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    // Voices endpoints
    /**
     *
     * @returns Promise<Voice[]>
     */
    ElevenLabsAPI.prototype.getVoices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = '/voices';
                        return [4 /*yield*/, this.httpClient.get(url)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
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
    ElevenLabsAPI.prototype.getVoice = function (voiceId, withSettings) {
        if (withSettings === void 0) { withSettings = false; }
        return __awaiter(this, void 0, void 0, function () {
            var url, params, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "/voices/".concat(voiceId);
                        params = {
                            with_settingsDefault: withSettings.toString(),
                        };
                        return [4 /*yield*/, this.httpClient.get(url, { params: params })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
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
    ElevenLabsAPI.prototype.getVoiceSettings = function (voiceId) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "/voices/".concat(voiceId, "/settings");
                        return [4 /*yield*/, this.httpClient.get(url)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     *
     * @param data AddVoiceRequest
     */
    ElevenLabsAPI.prototype.addVoice = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = '/voices/add';
                        return [4 /*yield*/, this.httpClient.post(url, data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *
     * @param voiceId
     * @param data
     */
    ElevenLabsAPI.prototype.editVoice = function (voiceId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "/voices/".concat(voiceId, "/edit");
                        return [4 /*yield*/, this.httpClient.post(url, data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *
     * @param voiceId
     */
    ElevenLabsAPI.prototype.deleteVoice = function (voiceId) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "/voices/".concat(voiceId);
                        return [4 /*yield*/, this.httpClient.delete(url)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *
     * @param voiceId
     * @param sampleId
     */
    ElevenLabsAPI.prototype.deleteSample = function (voiceId, sampleId) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "/voices/".concat(voiceId, "/samples/").concat(sampleId);
                        return [4 /*yield*/, this.httpClient.delete(url)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *
     * @param voiceId
     * @param settings
     */
    ElevenLabsAPI.prototype.editVoiceSettings = function (voiceId, settings) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "/voices/".concat(voiceId, "/settings/edit");
                        return [4 /*yield*/, this.httpClient.post(url, settings)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *
     * @param historyItemId
     * @returns
     */
    ElevenLabsAPI.prototype.getHistoryItemAudio = function (historyItemId) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "/history/".concat(historyItemId, "/audio");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.get(url)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 3:
                        error_1 = _a.sent();
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @param historyItemId
     * @returns
     */
    ElevenLabsAPI.prototype.getHistoryItem = function (historyItemId) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "/history/".concat(historyItemId);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.get(url)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 3:
                        error_2 = _a.sent();
                        throw error_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @param historyItemId
     */
    ElevenLabsAPI.prototype.deleteHistoryItem = function (historyItemId) {
        return __awaiter(this, void 0, void 0, function () {
            var url, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "/history/".concat(historyItemId);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.delete(url)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        throw error_3;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @param historyItemIds
     * @returns
     */
    ElevenLabsAPI.prototype.downloadHistoryItems = function (historyItemIds) {
        return __awaiter(this, void 0, void 0, function () {
            var url, body, response, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = '/history/download';
                        body = { history_item_ids: historyItemIds };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.post(url, body, { responseType: 'arraybuffer' })];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, Buffer.from(response.data)];
                    case 3:
                        error_4 = _a.sent();
                        throw error_4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @returns
     */
    ElevenLabsAPI.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = '/user';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.get(url)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 3:
                        error_5 = _a.sent();
                        throw error_5;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @returns
     */
    ElevenLabsAPI.prototype.getUserSubscriptionInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = '/user/subscription';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.get(url)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 3:
                        error_6 = _a.sent();
                        throw error_6;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @param voiceId
     * @param options
     * @returns
     */
    ElevenLabsAPI.prototype.textToSpeech = function (voiceId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "/text-to-speech/".concat(voiceId);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.post(url, options, { responseType: 'arraybuffer' })];
                    case 2:
                        response = _a.sent();
                        console.info('got response > ', response);
                        return [2 /*return*/, response.data];
                    case 3:
                        error_7 = _a.sent();
                        throw error_7;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @returns
     */
    ElevenLabsAPI.prototype.getModels = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = '/models';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.get(url)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 3:
                        error_8 = _a.sent();
                        throw error_8;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ElevenLabsAPI;
}());
exports.default = ElevenLabsAPI;
//# sourceMappingURL=index.js.map