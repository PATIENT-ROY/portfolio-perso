export const TELEGRAM_CONFIG = {
  // Замените на ваши реальные данные от Telegram Bot
  BOT_TOKEN: "YOUR_BOT_TOKEN_HERE", // Токен от @BotFather
  CHAT_ID: "681990358", // Ваш Chat ID от @userinfobot
  BOT_USERNAME: "your_portfolio0202_bot", // Username вашего бота
};

// URL для отправки сообщений через Telegram Bot API
export const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_CONFIG.BOT_TOKEN}/sendMessage`; 