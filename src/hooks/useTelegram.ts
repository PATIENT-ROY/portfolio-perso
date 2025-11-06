import { useState } from 'react';
import { TELEGRAM_CONFIG, TELEGRAM_API_URL } from '../config/telegram';

interface TelegramMessage {
  name: string;
  contact: string;
  subject: string;
  message: string;
  contactType: 'email' | 'telegram';
}

interface UseTelegramReturn {
  sendTelegramMessage: (message: TelegramMessage) => Promise<boolean>;
  isLoading: boolean;
  error: string | null;
}

export const useTelegram = (): UseTelegramReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendTelegramMessage = async (message: TelegramMessage): Promise<boolean> => {
    if (TELEGRAM_CONFIG.BOT_TOKEN === "YOUR_BOT_TOKEN_HERE") {
      setError("Telegram Bot не настроен. Замените BOT_TOKEN в конфигурации.");
      return false;
    }

    setIsLoading(true);
    setError(null);

    try {
      const text = `
📧 *Новое сообщение с портфолио*

👤 *Имя:* ${message.name}
📞 *Контакт:* ${message.contact} (${message.contactType === 'email' ? 'Email' : 'Telegram'})
📝 *Тема:* ${message.subject}
💬 *Сообщение:*
${message.message}

---
Отправлено с сайта портфолио
      `.trim();

      const response = await fetch(TELEGRAM_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CONFIG.CHAT_ID,
          text: text,
          parse_mode: 'Markdown',
        }),
      });

      const result = await response.json();

      if (!result.ok) {
        throw new Error(`Telegram API Error: ${result.description}`);
      }

      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Ошибка отправки в Telegram';
      setError(errorMessage);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendTelegramMessage,
    isLoading,
    error,
  };
}; 