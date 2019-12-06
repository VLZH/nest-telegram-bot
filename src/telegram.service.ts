import { Inject, Injectable } from "@nestjs/common";
import * as TelegramBot from "node-telegram-bot-api";
import { __TELEGRAM_MODULE_SETTINGS__ } from "./constants";
import {
    SendMessageOptions,
    SendPhotoOptions
} from "./interfaces/send-message-arguments";
import { TelegramOptions } from "./interfaces/telegram-module-settings";

@Injectable()
export class TelegramService {
    private bot: TelegramBot;
    public constructor(
        @Inject(__TELEGRAM_MODULE_SETTINGS__)
        private options: TelegramOptions
    ) {
        this.bot = new (TelegramBot.default as any)(this.options.token, {
            polling: false
        });
    }

    public async sendMessage(options: SendMessageOptions) {
        this.bot.sendMessage(
            options.chat_id || this.options.chat_id,
            options.message,
            {
                parse_mode: options.parse_mode
            }
        );
    }
    public async sendPhoto(options: SendPhotoOptions) {
        this.bot.sendPhoto(
            options.chat_id || this.options.chat_id,
            options.buffer
        );
    }
}
