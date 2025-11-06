# Настройка EmailJS для отправки писем

## Шаг 1: Регистрация на EmailJS

1. Перейдите на [EmailJS.com](https://www.emailjs.com/)
2. Зарегистрируйтесь или войдите в аккаунт
3. Перейдите в раздел "Email Services"

## Шаг 2: Настройка Email Service

1. Нажмите "Add New Service"
2. Выберите ваш email провайдер (Gmail, Outlook, Yahoo и т.д.)
3. Подключите ваш email аккаунт
4. Запишите **Service ID** (например: `service_abc123`)

## Шаг 3: Создание Email Template

1. Перейдите в раздел "Email Templates"
2. Нажмите "Create New Template"
3. Настройте шаблон письма:

```html
Новое сообщение с портфолио!

Имя: {{from_name}}
Email: {{from_email}}
Telegram: {{from_telegram}}
Способ связи: {{contact_method}}

Тема: {{subject}}

Сообщение:
{{message}}

---
Отправлено с портфолио Roy Dev
```

4. Сохраните шаблон и запишите **Template ID** (например: `template_xyz789`)

## Шаг 4: Получение Public Key

1. Перейдите в раздел "Account" → "API Keys"
2. Скопируйте **Public Key** (например: `user_def456`)

## Шаг 5: Обновление конфигурации

Откройте файл `src/config/emailjs.ts` и замените значения:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_abc123", // Ваш Service ID
  TEMPLATE_ID: "template_xyz789", // Ваш Template ID  
  PUBLIC_KEY: "user_def456", // Ваш Public Key
};
```

## Шаг 6: Тестирование

1. Запустите проект: `npm run dev`
2. Перейдите на страницу контактов
3. Заполните и отправьте форму
4. Проверьте, что письмо пришло на ваш email

## Важные замечания

- **Бесплатный план**: 200 писем в месяц
- **Безопасность**: Public Key безопасен для использования в клиентском коде
- **Валидация**: EmailJS автоматически валидирует email адреса
- **Логи**: Все отправки логируются в панели EmailJS

## Альтернативные решения

Если EmailJS не подходит, можно использовать:
- **Formspree**: Простая настройка, бесплатный план
- **Netlify Forms**: Если сайт размещен на Netlify
- **Собственный backend**: Node.js + Nodemailer 