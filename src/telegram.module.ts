import { DynamicModule, Module } from '@nestjs/common';
import {
    TelegramAsyncOptions,
    TelegramOptions,
} from './interfaces/telegram-module-settings';
import { TelegramCoreModule } from './telegram-core.module';

@Module({})
export class TelegramModule {
    public static forRoot(options: TelegramOptions): DynamicModule {
        return {
            module: TelegramModule,
            imports: [TelegramCoreModule.forRoot(options)],
        };
    }
    public static forRootAsync(options: TelegramAsyncOptions): DynamicModule {
        return {
            module: TelegramModule,
            imports: [TelegramCoreModule.forRootAsync(options)],
        };
    }
}
