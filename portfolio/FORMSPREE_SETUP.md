# Настройка Formspree для отправки писем

## Шаг 1: Регистрация на Formspree

1. Перейдите на [Formspree.io](https://formspree.io/)
2. Зарегистрируйтесь или войдите в аккаунт
3. Перейдите в раздел "Forms"

## Шаг 2: Создание новой формы

1. Нажмите "New Form"
2. Введите название формы (например: "Portfolio Contact")
3. Выберите email для получения писем
4. Нажмите "Create Form"
5. Скопируйте **Form ID** (например: `xrgjqkqw`)

## Шаг 3: Обновление компонента Contact

Замените импорт EmailJS на Formspree в файле `src/components/Contact.tsx`:

```typescript
// Заменить эту строку:
// import { useEmailJS } from "../hooks/useEmailJS";

// На эту:
import { useFormspree } from "../hooks/useFormspree";
```

И обновите использование хука:

```typescript
// Заменить эту строку:
// const { sendEmail, isLoading, error } = useEmailJS();

// На эту:
const { sendForm, isLoading, error } = useFormspree("YOUR_FORM_ID");
```

И обновите вызов функции:

```typescript
// Заменить эту строку:
// const success = await sendEmail(emailData);

// На эту:
const success = await sendForm(emailData);
```

## Шаг 4: Настройка уведомлений

1. В панели Formspree перейдите в настройки формы
2. Настройте уведомления:
   - Email уведомления
   - Slack интеграция (опционально)
   - Webhook (опционально)

## Шаг 5: Кастомизация email шаблона

1. В настройках формы найдите "Email Template"
2. Настройте HTML шаблон:

```html
<h2>Новое сообщение с портфолио!</h2>

<p><strong>Имя:</strong> {{name}}</p>
<p><strong>Email:</strong> {{email}}</p>
<p><strong>Telegram:</strong> {{telegram}}</p>
<p><strong>Способ связи:</strong> {{contact_method}}</p>
<p><strong>Тема:</strong> {{subject}}</p>

<h3>Сообщение:</h3>
<p>{{message}}</p>

<hr>
<p><em>Отправлено с портфолио Roy Dev</em></p>
```

## Шаг 6: Тестирование

1. Запустите проект: `npm run dev`
2. Перейдите на страницу контактов
3. Заполните и отправьте форму
4. Проверьте, что письмо пришло на ваш email

## Преимущества Formspree

- ✅ Простая настройка
- ✅ Бесплатный план: 50 писем в месяц
- ✅ Не требует API ключей
- ✅ Встроенная защита от спама
- ✅ Автоматическая валидация
- ✅ Поддержка файлов (в платных планах)

## Настройка дополнительных полей

Formspree автоматически обрабатывает все поля формы. Если нужно добавить дополнительные поля, просто добавьте их в форму и они будут включены в email.

## Спам защита

Formspree автоматически:
- Фильтрует спам
- Блокирует подозрительные IP
- Требует подтверждение для новых отправителей (опционально) 