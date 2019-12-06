import {
    SendMessageOptions as TgSendMessageOptions,
    SendPhotoOptions as TgSendPhotoOptions
} from "node-telegram-bot-api";

export interface SendMessageOptions extends TgSendMessageOptions {
    chat_id?: string;
    message: string;
}

export interface SendPhotoOptions extends TgSendPhotoOptions {
    chat_id?: string;
    buffer: Buffer;
}
