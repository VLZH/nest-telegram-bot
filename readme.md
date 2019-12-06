# Disclaimer

This wrapper around only 2 methods:

-   sendMessage
-   sendPhoto

# What is it?

This package is wrapper aroud `node-telegram-bot-api` for `Nest.js`

# How to use

Register module:

```typescript
@Module({
    imports: [
        TelegramModule.forRootAsync({
            imports: [UtilsModule],
            inject: [ConfigService],
            useFactory(configService: ConfigService) {
                return {
                    token: configService.get("TELEGRAM_BOT_TOKEN"),
                    chat_id: configService.get("TELEGRAM_CHAT_ID")
                };
            }
        })
    ],
    controllers: [],
    providers: []
})
export class AppModule {}
```

Get access to service:
```typescript
@Controller("api")
export class SomeController {
    public constructor(private readonly telegram_service: TelegramService) {}

    @Post("consultation")
    @UsePipes(new ValidationPipe({ transform: true }))
    public consultation(@Body() body: ConsultationOrderDto) {
        await this.telegram_service.sendMessage({
            message: "New order for consultation!..."
        });
        return "OK";
    }
}
```

# TODO`s

-   Full support all methods of node-telegram-bot-api
