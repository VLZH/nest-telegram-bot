import { ModuleMetadata, Type } from '@nestjs/common/interfaces';

export interface TelegramOptions {
    token: string;
    chat_id: string;
}

export interface TelegramAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    useFactory: (...args: any[]) => Promise<TelegramOptions> | TelegramOptions;
    inject?: any[];
}
