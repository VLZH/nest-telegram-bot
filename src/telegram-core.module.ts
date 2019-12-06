import { DynamicModule, Global, Module, Provider } from "@nestjs/common";
import { __TELEGRAM_MODULE_SETTINGS__ } from "./constants";
import {
    TelegramAsyncOptions,
    TelegramOptions,
} from "./interfaces/telegram-module-settings";
import { TelegramService } from "./telegram.service";

@Global()
@Module({})
export class TelegramCoreModule {
    public static forRoot(options: TelegramOptions): DynamicModule {
        return {
            module: TelegramCoreModule,
            providers: [
                {
                    name: __TELEGRAM_MODULE_SETTINGS__,
                    provide: __TELEGRAM_MODULE_SETTINGS__,
                    useValue: options,
                },
                TelegramService,
            ],
            exports: [TelegramService],
        };
    }

    public static forRootAsync(options: TelegramAsyncOptions): DynamicModule {
        return {
            module: TelegramCoreModule,
            providers: [
                {
                    name: __TELEGRAM_MODULE_SETTINGS__,
                    provide: __TELEGRAM_MODULE_SETTINGS__,
                    useFactory: options.useFactory,
                    inject: options.inject || [],
                },
                TelegramService,
            ],
            imports: options.imports,
            exports: [TelegramService],
        };
    }
}
