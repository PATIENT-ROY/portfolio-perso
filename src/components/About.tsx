import Title from "./Title";
import img from "../assets/2.png";
import { LetterText, Code, Zap } from "lucide-react";
import { useEffect } from "react";
import { useGSAP } from "../hooks/useGSAP";

const aboutSections = [
  {
    id: 1,
    title: "Frontend-разработчик",
    description:
      "Увлеченный frontend-разработчик с опытом работы с React, TypeScript и современными веб-технологиями. Специализируюсь на создании отзывчивых, удобных веб-приложений с чистым кодом и оптимальной производительностью. Всегда готов изучать новые технологии и лучшие практики для создания исключительного пользовательского опыта.",
    icon: <LetterText className="text-accent scale-150" />,
  },
  {
    id: 2,
    title: "Технологии и инструменты",
    description:
      "Владею React, TypeScript, Next.js, Tailwind CSS и современным JavaScript. Опыт работы с Git, адаптивным дизайном, интеграцией API и платформами развертывания как Vercel. Стремлюсь писать чистый, поддерживаемый код и следовать лучшим практикам отрасли.",
    icon: <Code className="text-accent scale-150" />,
  },
  {
    id: 3,
    title: "Подход и методология",
    description:
      "Фокус на оптимизации производительности, доступности и пользовательском опыте. Сильные навыки решения проблем с вниманием к деталям. Командный игрок, который ценит качество кода и непрерывное обучение в динамичной среде разработки.",
    icon: <Zap className="text-accent scale-150" />,
  },
];

const About = () => {
  const { elementRef, fadeInLeft, staggerChildren } = useGSAP();

  useEffect(() => {
    // Animation pour l'image (gauche)
    fadeInLeft(0.2);

    // Animation pour les sections (droite)
    setTimeout(() => {
      staggerChildren(0.2);
    }, 300);
  }, [fadeInLeft, staggerChildren]);

  return (
    <div className="p-6 md:p-10 mb-10 md:mb-32" id="About">
      <Title title="О нас" />
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 py-8 md:py-12">
        <div className="hidden md:block flex-shrink-0">
          <img
            src={img}
            alt="Profile"
            className="w-80 md:w-96 object-cover rounded-xl shadow-xl transition-transform duration-300"
          />
        </div>

        <div
          ref={elementRef}
          className="w-full max-w-2xl space-y-4 md:space-y-6"
        >
          {aboutSections.map((section) => (
            <div
              key={section.id}
              className="flex flex-col md:flex-row items-center bg-base-100 p-4 md:p-5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="mb-3 md:mb-0 md:mr-4 flex-shrink-0">
                {section.icon}
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-lg md:text-xl font-bold mb-2">
                  {section.title}
                </h2>
                <p className="text-sm md:text-base leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
