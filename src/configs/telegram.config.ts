import { ITelegramOptions } from '../telegram/telegram.interface';
import { ConfigService } from '@nestjs/config';

export const getTelegramConfig = (configService: ConfigService): ITelegramOptions => {
	const token = configService.get('TELEGRAM_TOKEN');
	if (!token) {
		throw new Error('Token not defined');
	}
	const chatId = configService.get('TELEGRAM_CHAT_ID');

	return {
		token,
		chatId: chatId ?? '',
	};
};
