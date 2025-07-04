import { useState } from "react";
import { Mail, Send, Phone, MapPin, MessageCircle } from "lucide-react";
import Title from "./Title";

const Contact = () => {
  const [contactMethod, setContactMethod] = useState<"email" | "telegram">(
    "email"
  );
  const [formData, setFormData] = useState({
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler l'envoi du formulaire
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({
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

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "roydev@example.com",
      link: "mailto:roydev@example.com",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Telegram",
      value: "@roydev",
      link: "https://t.me/roydev",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      value: "+33 6 12 34 56 78",
      link: "tel:+33612345678",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localisation",
      value: "France",
      link: "#",
    },
  ];

  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32" id="Contact">
      <Title title="Contact" />
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Informations de contact */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Parlons de votre projet</h3>
            <p className="text-base-content/80">
              Je suis toujours ouvert à de nouvelles opportunités et
              collaborations. N'hésitez pas à me contacter pour discuter de vos
              projets !
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="p-3 bg-accent/20 rounded-lg">{info.icon}</div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-base-100 p-6 rounded-xl shadow-lg">
            {/* Toggle Email/Telegram */}
            <div className="flex justify-center mb-6">
              <div className="join">
                <button
                  type="button"
                  className={`join-item btn btn-sm ${
                    contactMethod === "email" ? "btn-accent" : "btn-outline"
                  }`}
                  onClick={() => setContactMethod("email")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </button>
                <button
                  type="button"
                  className={`join-item btn btn-sm ${
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
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input input-bordered w-full"
                    placeholder="Votre nom"
                  />
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
                    required
                    className="input input-bordered w-full"
                    placeholder={
                      contactMethod === "email"
                        ? "votre@email.com"
                        : "@votre_username"
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Sujet *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input input-bordered w-full"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="textarea textarea-bordered w-full"
                  placeholder="Décrivez votre projet..."
                />
              </div>

              {submitStatus === "success" && (
                <div className="alert alert-success">
                  <span>
                    Message envoyé avec succès ! Je vous répondrai bientôt.
                  </span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="alert alert-error">
                  <span>Erreur lors de l'envoi. Veuillez réessayer.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-accent w-full"
              >
                {isSubmitting ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Envoyer le message
                  </>
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
