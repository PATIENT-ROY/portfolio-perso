import { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG, EmailData, isEmailJSConfigured } from "../config/emailjs";

export const useEmailJS = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (data: EmailData): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    // Проверяем, настроен ли EmailJS
    if (!isEmailJSConfigured()) {
      setError("EmailJS не настроен. Пожалуйста, настройте конфигурацию в файле src/config/emailjs.ts");
      setIsLoading(false);
      return false;
    }

    try {
      // Подготавливаем данные для отправки
      const templateParams = {
        from_name: data.name,
        from_email: data.email || "Не указан",
        from_telegram: data.telegram || "Не указан",
        contact_method: data.contactMethod === "email" ? "Email" : "Telegram",
        subject: data.subject,
        message: data.message,
        to_name: "Roy Dev", // Ваше имя для получения писем
      };

      // Отправляем письмо через EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log("Email sent successfully:", result);
      return true;
    } catch (err) {
      console.error("Error sending email:", err);
      setError(
        err instanceof Error 
          ? err.message 
          : "Произошла ошибка при отправке письма"
      );
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendEmail,
    isLoading,
    error,
  };
}; 