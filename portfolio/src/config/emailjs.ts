// EmailJS Configuration
export const EMAILJS_CONFIG = {
  // Данные из переменных окружения
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID_HERE",
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID_HERE",
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY_HERE",
};

// Проверка конфигурации
export const isEmailJSConfigured = () => {
  return !EMAILJS_CONFIG.SERVICE_ID.includes("YOUR_") && 
         !EMAILJS_CONFIG.TEMPLATE_ID.includes("YOUR_") && 
         !EMAILJS_CONFIG.PUBLIC_KEY.includes("YOUR_");
};

// Типы для EmailJS
export interface EmailData {
  name: string;
  email?: string;
  telegram?: string;
  subject: string;
  message: string;
  contactMethod: "email" | "telegram";
} 
