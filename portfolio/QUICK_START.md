# 🚀 Быстрый старт: Настройка отправки писем

## Вариант 1: EmailJS (5 минут)

1. **Зарегистрируйтесь** на [EmailJS.com](https://www.emailjs.com/)
2. **Создайте Email Service** → получите `SERVICE_ID`
3. **Создайте Email Template** → получите `TEMPLATE_ID`
4. **Скопируйте Public Key** из Account → API Keys
5. **Обновите** `src/config/emailjs.ts`:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: "ваш_service_id",
  TEMPLATE_ID: "ваш_template_id", 
  PUBLIC_KEY: "ваш_public_key",
};
```

## Вариант 2: Formspree (2 минуты)

1. **Зарегистрируйтесь** на [Formspree.io](https://formspree.io/)
2. **Создайте новую форму** → получите `FORM_ID`
3. **Обновите** `src/components/Contact.tsx`:

```typescript
// Заменить импорт
import { useFormspree } from "../hooks/useFormspree";

// Заменить хук
const { sendForm, isLoading, error } = useFormspree("ваш_form_id");

// Заменить вызов
const success = await sendForm(emailData);
```

## ✅ Готово!

Форма будет отправлять письма на ваш email!

---

**Подробные инструкции:** [CONTACT_FORM_SETUP.md](./CONTACT_FORM_SETUP.md) 