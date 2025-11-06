import { useState } from "react";
import { Mail, MessageCircle, Settings, Copy, Check } from "lucide-react";

const ContactSetupGuide = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const setupSteps = [
    {
      title: "1. Зарегистрируйтесь на EmailJS",
      description: "Перейдите на emailjs.com и создайте аккаунт",
      link: "https://www.emailjs.com/",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      title: "2. Создайте Email Service",
      description: "Подключите ваш email (Gmail, Outlook и т.д.)",
      icon: <Settings className="w-5 h-5" />,
    },
    {
      title: "3. Создайте Email Template",
      description: "Настройте шаблон письма с переменными",
      icon: <MessageCircle className="w-5 h-5" />,
    },
    {
      title: "4. Получите ключи",
      description: "Скопируйте Service ID, Template ID и Public Key",
      icon: <Copy className="w-5 h-5" />,
    },
  ];

  const configCode = `export const EMAILJS_CONFIG = {
  SERVICE_ID: "ваш_service_id",
  TEMPLATE_ID: "ваш_template_id", 
  PUBLIC_KEY: "ваш_public_key",
};`;

  return (
    <div className="bg-base-100 p-6 rounded-xl shadow-lg">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-warning mb-2">
          ⚠️ EmailJS не настроен
        </h3>
        <p className="text-base-content/70">
          Для отправки писем необходимо настроить EmailJS
        </p>
      </div>

      <div className="space-y-4 mb-6">
        {setupSteps.map((step, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="p-2 bg-accent/20 rounded-lg">{step.icon}</div>
            <div className="flex-1">
              <h4 className="font-semibold">{step.title}</h4>
              <p className="text-sm text-base-content/70">{step.description}</p>
              {step.link && (
                <a
                  href={step.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline text-sm"
                >
                  Открыть сайт →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-base-200 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-semibold">Обновите конфигурацию:</h4>
          <button
            onClick={() => copyToClipboard(configCode, "config")}
            className="btn btn-sm btn-outline"
          >
            {copied === "config" ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            {copied === "config" ? "Скопировано!" : "Копировать"}
          </button>
        </div>
        <pre className="text-xs bg-base-300 p-3 rounded overflow-x-auto">
          <code>{configCode}</code>
        </pre>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-base-content/60">
          Или используйте{" "}
          <a
            href="https://formspree.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Formspree
          </a>{" "}
          для более простой настройки
        </p>
      </div>
    </div>
  );
};

export default ContactSetupGuide;
