export const TELEGRAM_CONFIG = {
  // Данные из переменных окружения
  BOT_TOKEN: import.meta.env.VITE_TELEGRAM_BOT_TOKEN || "YOUR_BOT_TOKEN_HERE",
  CHAT_ID: import.meta.env.VITE_TELEGRAM_CHAT_ID || "YOUR_CHAT_ID_HERE",
  BOT_USERNAME: import.meta.env.VITE_TELEGRAM_BOT_USERNAME || "YOUR_BOT_USERNAME_HERE",
};

// URL для отправки сообщений через Telegram Bot API
export const getTelegramApiUrl = () => `https://api.telegram.org/bot${TELEGRAM_CONFIG.BOT_TOKEN}/sendMessage`; 