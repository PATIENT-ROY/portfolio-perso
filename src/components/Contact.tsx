import { useEffect, useMemo, useState } from "react";
import { Mail, MapPin, MessageCircle, Monitor } from "lucide-react";
import Reveal from "./Reveal";

const Contact = () => {
  type ContactMethod = "email" | "telegram";
  const [contactMethod, setContactMethod] = useState<ContactMethod>("email");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telegram: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    telegram: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const contactInfo = useMemo(
    () => [
      {
        icon: <Mail className="h-5 w-5" aria-hidden="true" />,
        title: "Почта",
        value: "contact-me-roydev@inbox.ru",
        link: "mailto:contact-me-roydev@inbox.ru",
        isLink: true,
      },
      {
        icon: <MessageCircle className="h-5 w-5" aria-hidden="true" />,
        title: "Telegram",
        value: "@PapyRoy",
        link: "https://t.me/PapyRoy",
        isLink: true,
      },
      {
        icon: (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        ),
        title: "GitHub",
        value: "PATIENT-ROY",
        link: "https://github.com/PATIENT-ROY",
        isLink: true,
      },
      {
        icon: <MapPin className="h-5 w-5" aria-hidden="true" />,
        title: "Город",
        value: "Екатеринбург, Россия",
        link: "#",
        isLink: false,
      },
      {
        icon: <Monitor className="h-5 w-5" aria-hidden="true" />,
        title: "Формат",
        value: "Удалённо",
        link: "#",
        isLink: false,
      },
    ],
    []
  );

  useEffect(() => {
    if (submitStatus !== "idle") {
      const timer = setTimeout(() => setSubmitStatus("idle"), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const validateField = (name: string, value: string) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Напишите имя";
        } else if (/[0-9]/.test(value)) {
          error = "Имя без цифр";
        } else if (value.length > 21) {
          error = "Не длиннее 21 символа";
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "Напишите email";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Похоже, в email ошибка";
        }
        break;
      case "telegram":
        if (!value.trim()) {
          error = "Напишите Telegram";
        } else if (!value.startsWith("@")) {
          error = "Начните с @";
        } else if (value.length < 2) {
          error = "Слишком коротко";
        }
        break;
      case "subject":
        if (!value.trim()) error = "Напишите тему";
        break;
      case "message":
        if (!value.trim()) error = "Напишите сообщение";
        break;
    }

    return error;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "name" && /[0-9]/.test(value)) return;

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: validateField("name", formData.name),
      email:
        contactMethod === "email" ? validateField("email", formData.email) : "",
      telegram:
        contactMethod === "telegram"
          ? validateField("telegram", formData.telegram)
          : "",
      subject: validateField("subject", formData.subject),
      message: validateField("message", formData.message),
    };

    setErrors(newErrors);
    if (Object.values(newErrors).some((error) => error !== "")) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        telegram: "",
        subject: "",
        message: "",
      });
      setErrors({
        name: "",
        email: "",
        telegram: "",
        subject: "",
        message: "",
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    "w-full border-b border-base-content/20 bg-transparent py-3 text-base outline-none focus:border-primary";

  return (
    <section id="Contact" className="scroll-mt-24 bg-base-200">
      <Reveal className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Контакты
          </h2>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-base-content/75">
            Напишите, если нужен сайт или приложение. Отвечаю сам.
          </p>
          <ul className="mt-8 space-y-4">
            {contactInfo.map((info) => (
              <li key={info.title} className="flex items-center gap-4">
                <span className="text-primary">{info.icon}</span>
                <span>
                  <span className="block text-sm text-base-content/50">
                    {info.title}
                  </span>
                  {info.isLink ? (
                    <a
                      href={info.link}
                      className="underline decoration-base-content/30 underline-offset-4"
                      target={info.link.startsWith("http") ? "_blank" : undefined}
                      rel={
                        info.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span>{info.value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="flex gap-2" role="group" aria-label="Куда ответить">
            <button
              type="button"
              aria-pressed={contactMethod === "email"}
              onClick={() => setContactMethod("email")}
              className={`px-4 py-2 text-sm ${
                contactMethod === "email"
                  ? "bg-primary text-primary-content"
                  : "text-base-content/70"
              }`}
            >
              Почта
            </button>
            <button
              type="button"
              aria-pressed={contactMethod === "telegram"}
              onClick={() => setContactMethod("telegram")}
              className={`px-4 py-2 text-sm ${
                contactMethod === "telegram"
                  ? "bg-primary text-primary-content"
                  : "text-base-content/70"
              }`}
            >
              Telegram
            </button>
          </div>

          <div>
            <label htmlFor="name" className="block text-sm">
              Имя
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              maxLength={21}
              autoComplete="name"
              className={fieldClass}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-error">{errors.name}</p>
            )}
          </div>

          {contactMethod === "email" ? (
            <div>
              <label htmlFor="email" className="block text-sm">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className={fieldClass}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-error">{errors.email}</p>
              )}
            </div>
          ) : (
            <div>
              <label htmlFor="telegram" className="block text-sm">
                Telegram
              </label>
              <input
                id="telegram"
                name="telegram"
                value={formData.telegram}
                onChange={handleChange}
                required
                autoComplete="off"
                placeholder="@username"
                className={fieldClass}
              />
              {errors.telegram && (
                <p className="mt-1 text-sm text-error">{errors.telegram}</p>
              )}
            </div>
          )}

          <div>
            <label htmlFor="subject" className="block text-sm">
              Тема
            </label>
            <input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className={fieldClass}
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-error">{errors.subject}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm">
              Сообщение
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className={`${fieldClass} resize-y`}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-error">{errors.message}</p>
            )}
          </div>

          {submitStatus === "success" && (
            <p className="text-sm" role="status">
              Сообщение отправлено. Отвечу в ближайшее время.
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-sm text-error" role="alert">
              Не отправилось. Попробуйте ещё раз.
            </p>
          )}

          <p className="text-sm text-base-content/55">
            Отправляя сообщение, вы соглашаетесь с{" "}
            <button
              type="button"
              className="underline decoration-base-content/30 underline-offset-4"
              onClick={() => window.open("/privacy-policy.html", "_blank")}
            >
              политикой обработки персональных данных
            </button>
            .
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-secondary px-5 py-3 text-sm font-medium text-secondary-content disabled:opacity-60"
          >
            {isSubmitting ? (
              <span className="inline-flex items-center gap-2">
                <span className="custom-spinner inline-block h-4 w-4" />
                Отправка
              </span>
            ) : (
              "Отправить"
            )}
          </button>
        </form>
      </Reveal>
    </section>
  );
};

export default Contact;
