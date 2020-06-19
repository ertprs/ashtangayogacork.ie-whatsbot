"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageType;
(function (MessageType) {
    MessageType["TEXT"] = "chat";
    MessageType["AUDIO"] = "audio";
    MessageType["VOICE"] = "ptt";
    MessageType["IMAGE"] = "image";
    MessageType["VIDEO"] = "video";
    MessageType["DOCUMENT"] = "document";
    MessageType["STICKER"] = "sticker";
    MessageType["LOCATION"] = "location";
    MessageType["CONTACT_CARD"] = "vcard";
    MessageType["CONTACT_CARD_MULTI"] = "multi_vcard";
    MessageType["REVOKED"] = "revoked";
    MessageType["UNKNOWN"] = "unknown";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var MediaType;
(function (MediaType) {
    MediaType["IMAGE"] = "Image";
    MediaType["VIDEO"] = "Video";
    MediaType["AUDIO"] = "Audio";
    MediaType["PTT"] = "Audio";
    MediaType["DOCUMENT"] = "Document";
    MediaType["STICKER"] = "Image";
})(MediaType = exports.MediaType || (exports.MediaType = {}));
