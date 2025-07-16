import { useState, useEffect, useMemo } from "react";
import {
  Mail,
  Send,
  MapPin,
  MessageCircle,
  Monitor,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Title from "./Title";
import { useGSAP } from "../hooks/useGSAP";

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

  // Créer des références séparées pour éviter les conflits
  const { elementRef: contactInfoRef, staggerChildren } = useGSAP();
  const { elementRef: formRef, fadeInRight } = useGSAP();

  // Optimisation : contactInfo avec useMemo
  const contactInfo = useMemo(
    () => [
      {
        icon: <Mail className="w-6 h-6" />,
        title: "Email",
        value: "contact@roydev.ru",
        link: "mailto:contact@roydev.ru",
        isLink: true,
      },
      {
        icon: <MessageCircle className="w-6 h-6" />,
        title: "Telegram",
        value: "@PapyRoy",
        link: "https://t.me/PapyRoy",
        isLink: true,
      },
      {
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        ),
        title: "GitHub",
        value: "PATIENT-ROY",
        link: "https://github.com/PATIENT-ROY",
        isLink: true,
      },
      {
        icon: <MapPin className="w-6 h-6" />,
        title: "Местоположение",
        value: "Россия, Екатеринбург",
        link: "#",
        isLink: false,
      },
      {
        icon: <Monitor className="w-6 h-6" />,
        title: "Режим работы",
        value: "Удаленно",
        link: "#",
        isLink: false,
      },
    ],
    []
  );

  // Auto-hide du statut d'envoi après 5 secondes
  useEffect(() => {
    if (submitStatus !== "idle") {
      const timer = setTimeout(() => setSubmitStatus("idle"), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  // Animation GSAP optimisée
  useEffect(() => {
    if (contactInfoRef.current) {
      staggerChildren(0.1);
    }
    if (formRef.current) {
      setTimeout(() => {
        fadeInRight(0.2);
      }, 200);
    }
  }, []); // Dépendances vides pour ne se déclencher qu'une seule fois

  const validateField = (name: string, value: string) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Имя обязательно";
        } else if (/[0-9]/.test(value)) {
          error = "Имя должно содержать только буквы";
        } else if (value.length > 21) {
          error = "Имя не должно превышать 21 символ";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email обязателен";
        } else if (!value.includes("@")) {
          error = "Email должен содержать @";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Неверный формат email";
        }
        break;

      case "telegram":
        if (!value.trim()) {
          error = "Имя пользователя Telegram обязательно";
        } else if (!value.startsWith("@")) {
          error = "Имя пользователя должно начинаться с @";
        } else if (value.length < 2) {
          error = "Имя пользователя слишком короткое";
        }
        break;

      case "subject":
        if (!value.trim()) {
          error = "Тема обязательна";
        }
        break;

      case "message":
        if (!value.trim()) {
          error = "Сообщение обязательно";
        }
        break;
    }

    return error;
  };

  // Validation améliorée du nom
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Bloquer seulement les chiffres dans le nom (pas les lettres cyrilliques)
    if (name === "name" && /[0-9]/.test(value)) return;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Valider le champ en temps réel
    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Valider tous les champs selon le mode sélectionné
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

    // Vérifier s'il y a des erreurs
    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (hasErrors) {
      return;
    }

    setIsSubmitting(true);

    // Simuler l'envoi du formulaire
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

  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32" id="Contact">
      <Title title="Контакты" />
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Informations de contact */}
          <div ref={contactInfoRef} className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">
              Давайте обсудим ваш проект
            </h3>
            <p className="text-base-content/80">
              Я всегда открыт для новых возможностей и сотрудничества. Не
              стесняйтесь связаться со мной для обсуждения ваших проектов!
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 transition-transform duration-300"
                >
                  <div className="p-3 bg-accent/20 rounded-lg hover:bg-accent/30 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    {info.isLink ? (
                      <a
                        href={info.link}
                        className="text-accent hover:underline"
                        target={
                          info.link.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-base-content/70">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulaire */}
          <div
            ref={formRef}
            className="bg-base-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Toggle Email/Telegram */}
            <div className="flex justify-center mb-6">
              <div className="join">
                <button
                  type="button"
                  className={`join-item btn btn-sm transition-all duration-300 ${
                    contactMethod === "email" ? "btn-accent" : "btn-outline"
                  }`}
                  onClick={() => setContactMethod("email")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </button>
                <button
                  type="button"
                  className={`join-item btn btn-sm transition-all duration-300 ${
                    contactMethod === "telegram" ? "btn-accent" : "btn-outline"
                  }`}
                  onClick={() => setContactMethod("telegram")}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Telegram
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Полное имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={21}
                    pattern="[A-Za-zА-Яа-яÀ-ÿ\s]+"
                    className={`input input-bordered w-full focus:input-accent transition-all duration-300 ${
                      errors.name ? "input-error" : ""
                    }`}
                    placeholder="Ваше имя"
                  />
                  {errors.name && (
                    <p className="text-error text-xs mt-1 animate-fade-in-error">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor={contactMethod}
                    className="block text-sm font-medium mb-2"
                  >
                    {contactMethod === "email" ? "Email *" : "Telegram *"}
                  </label>
                  <input
                    type={contactMethod === "email" ? "email" : "text"}
                    id={contactMethod}
                    name={contactMethod}
                    value={
                      contactMethod === "email"
                        ? formData.email
                        : formData.telegram
                    }
                    onChange={handleChange}
                    required={
                      contactMethod === "email"
                        ? true
                        : contactMethod === "telegram"
                    }
                    className={`input input-bordered w-full focus:input-accent transition-all duration-300 ${
                      errors[contactMethod] ? "input-error" : ""
                    }`}
                    placeholder={
                      contactMethod === "email"
                        ? "your@email.com"
                        : "@your_username"
                    }
                  />
                  {errors[contactMethod] && (
                    <p className="text-error text-xs mt-1 animate-fade-in-error">
                      {errors[contactMethod]}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Тема *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`input input-bordered w-full focus:input-accent transition-all duration-300 ${
                    errors.subject ? "input-error" : ""
                  }`}
                  placeholder="Тема вашего сообщения"
                />
                {errors.subject && (
                  <p className="text-error text-xs mt-1 animate-fade-in-error">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Сообщение *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`textarea textarea-bordered w-full focus:textarea-accent transition-all duration-300 ${
                    errors.message ? "textarea-error" : ""
                  }`}
                  placeholder="Опишите ваш проект..."
                />
                {errors.message && (
                  <p className="text-error text-xs mt-1 animate-fade-in-error">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Messages de statut avec animations améliorées */}
              {submitStatus === "success" && (
                <div className="alert alert-success animate-slide-in-up">
                  <CheckCircle className="w-5 h-5 animate-bounce" />
                  <span className="animate-fade-in-error">
                    Сообщение отправлено успешно! Я отвечу в ближайшее время.
                  </span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="alert alert-error animate-slide-in-up">
                  <AlertCircle className="w-5 h-5 animate-pulse" />
                  <span className="animate-fade-in-error">
                    Ошибка отправки сообщения. Попробуйте еще раз.
                  </span>
                </div>
              )}

              {/* Politique de confidentialité */}
              <div className="text-xs text-base-content/60 text-center">
                Отправляя сообщение, вы соглашаетесь с{" "}
                <button
                  type="button"
                  className="text-accent hover:underline transition-colors duration-300"
                  onClick={() => window.open("/privacy-policy.html", "_blank")}
                >
                  политикой обработки персональных данных
                </button>
              </div>

              {/* Bouton d'envoi avec animations améliorées */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn w-full transition-all duration-500 ease-in-out transform ${
                  isSubmitting
                    ? "btn-disabled bg-gradient-to-r from-accent to-accent-focus"
                    : "btn-accent hover:btn-accent-focus hover:scale-105 active:scale-95"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="custom-spinner w-5 h-5"></div>
                    <span className="animate-pulse">Отправка...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 group">
                    <Send className="w-4 h-4 animate-send-icon" />
                    <span>Отправить сообщение</span>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
