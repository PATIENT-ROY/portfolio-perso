import Title from "./Title";
import { Github, Video } from "lucide-react";
import { useState, useEffect } from "react";
import { useGSAP } from "../hooks/useGSAP";

// Import des images locales
import img1 from "../assets/projects/1.jpg";
import img2 from "../assets/projects/2.jpg";
import img3 from "../assets/projects/3.jpg";
import img4 from "../assets/projects/4.jpg";
import img5 from "../assets/projects/5.jpg";
import img8 from "../assets/projects/8.jpg";
import img10 from "../assets/projects/10.png";
import img77 from "../assets/projects/77.png";
import img66 from "../assets/projects/66.png";

const projects = [
  {
    id: 1,
    title: "Keystone Logistics Event",
    description:
      "Современный сайт мероприятий для логистической отрасли. Я отвечал за React frontend и интеграцию API. Профессиональный интерфейс с системой управления мероприятиями и регистрациями.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    demoLink: "https://keystone-logistics-event.vercel.app/",
    repoLink: "#",
    image: img1,
    role: "Frontend-разработчик - Команда",
    contributions: [
      "Разработка пользовательского интерфейса",
      "Система регистрации мероприятий",
      "Интеграция API",
    ],
  },
  {
    id: 7,
    title: "FulfillPro — фулфилмент для маркетплейсов",
    description:
      "Лендинг фулфилмент-сервиса полного цикла для селлеров маркетплейсов: приемка, упаковка и отгрузка с преимуществами и тарифами.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://patient-roy.github.io/FulfillPro/",
    repoLink: "#",
    image: img77,
  },
  {
    id: 3,
    title: "Jekall Mobiles - Интернет-магазин телефонов",
    description:
      "Современный сайт электронной коммерции, специализирующийся на продаже мобильных телефонов. Интуитивный пользовательский интерфейс с каталогом продуктов, системой фильтрации, корзиной покупок и управлением заказами.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GSAP"],
    demoLink: "https://jekall-mobiles.netlify.app/",
    repoLink: "https://github.com/PATIENT-ROY/Gallery-react.git",
    image: img8,
  },
  {
    id: 4,
    title: "Сайт интернет-магазина",
    description:
      "Простой и функциональный сайт электронной коммерции, разработанный с использованием HTML, CSS и vanilla JavaScript. Интерфейс онлайн-магазина с каталогом продуктов и адаптивным дизайном.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://patient-roy.github.io/market1/",
    repoLink: "https://github.com/PATIENT-ROY/market1.git",
    image: img4,
  },
  {
    id: 5,
    title: "Books Academy",
    description:
      "Сайт образовательной платформы для онлайн-обучения и управления курсами. Я отвечал за разработку React frontend. Современный интерфейс с аутентификацией пользователей.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "API Integration"],
    demoLink: "https://books-academy.ru/welcome",
    repoLink: "https://github.com/PATIENT-ROY/todo-1.git",
    image: img5,
    role: "Frontend-разработчик - Команда",
    contributions: [
      "Разработка пользовательского интерфейса",
      "Интерфейс каталога курсов",
      "UI аутентификации пользователей",
    ],
  },
  {
    id: 6,
    title: "AdaptEd Russia — AI платформа для адаптации студентов",
    description:
      "Комплексная AI-платформа для адаптации иностранных студентов в России: объединяет контент, инструменты и ИИ, чтобы помочь студентам интегрироваться в образовательную систему и общество.",
    technologies: [
      "Next.js 14",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "DeepSeek AI",
      "OpenAI API",
      "Tesseract.js",
      "Vercel",
      "Railway",
      "AWS",
    ],
    demoLink: "https://adaptedrussia.netlify.app",
    repoLink: "#",
    image: img10,
  },
  {
    id: 2,
    title: "Интерактивное портфолио",
    description:
      "Интерактивное портфолио, демонстрирующее мою работу и навыки. Построено с использованием React и Tailwind CSS для современного и отзывчивого дизайна.",
    technologies: ["React", "Tailwind CSS"],
    demoLink: "#",
    repoLink: "https://github.com/PATIENT-ROY/Portfolio-interactif.git",
    image: img2,
  },
  {
    id: 8,
    title: "Crypto Watch Tower",
    description:
      "Платформа для отслеживания и мониторинга криптовалют в реальном времени. Пользователи могут просматривать живые цены, рыночные тренды и управление портфелем.",
    technologies: ["React", "SASS", "Axios"],
    demoLink: "#",
    repoLink: "https://github.com/PATIENT-ROY/Crypto_watch_tower_app.git",
    image: img3,
  },
  {
    id: 9,
    title: "TravelDream — туры и путешествия",
    description:
      "Лендинг туристического агентства с популярными направлениями, услугами, контактами и реквизитами. Фокус на удобстве бронирования и поддержке 24/7.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://irina-tour.netlify.app/",
    repoLink: "#",
    image: img66,
  },
];

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { elementRef, staggerChildren } = useGSAP();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Appliquer l'animation stagger après le chargement
      setTimeout(() => {
        staggerChildren(0.1);
      }, 100);
    }
  }, [isLoading, staggerChildren]);

  return (
    <div className="mt-10" id="Projects">
      <Title title="Мои проекты" />

      <div className="flex justify-center">
        <div
          ref={elementRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl w-full px-4"
        >
          {isLoading
            ? // Skeletons simples
              Array.from({ length: 6 }, (_, index) => (
                <div
                  key={`skeleton-${index}`}
                  className="bg-base-300 p-5 min-h-[400px] rounded-xl shadow-lg flex flex-col"
                >
                  <div className="w-full h-48 rounded-xl bg-base-200 animate-pulse mb-4"></div>
                  <div className="h-6 bg-base-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 bg-base-200 rounded animate-pulse mb-3"></div>
                  <div className="flex gap-2 mb-3">
                    <div className="h-6 w-16 bg-base-200 rounded animate-pulse"></div>
                    <div className="h-6 w-20 bg-base-200 rounded animate-pulse"></div>
                  </div>
                  <div className="flex mt-auto">
                    <div className="h-8 flex-1 bg-base-200 rounded animate-pulse"></div>
                    <div className="h-8 w-1/3 ml-2 bg-base-200 rounded animate-pulse"></div>
                  </div>
                </div>
              ))
            : // Vrais projets avec GSAP
              projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-base-300 p-5 min-h-[400px] rounded-xl shadow-lg flex flex-col hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-full h-48 rounded-xl overflow-hidden bg-base-200 mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerHTML = `
                          <div class="flex items-center justify-center h-full text-center p-4">
                            <div>
                              <div class="text-lg font-bold mb-2">${project.title}</div>
                              <div class="text-xs text-base-content/50">Изображение недоступно</div>
                            </div>
                          </div>
                        `;
                        }
                      }}
                    />
                  </div>

                  <h1 className="font-bold text-lg mb-2 text-center sm:text-left">
                    {project.title}
                  </h1>
                  <p className="text-sm mb-3 text-center sm:text-left">
                    {project.description}
                  </p>

                  {project.role && (
                    <div className="mb-3 text-center sm:text-left">
                      <span className="badge badge-sm mr-2 bg-accent text-base-100">
                        {project.role}
                      </span>
                      {project.contributions && (
                        <div className="mt-1 text-xs text-base-content/70">
                          <strong>Вклад:</strong>{" "}
                          {project.contributions.join(", ")}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-3 justify-center sm:justify-start">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={`${project.id}-${index}`}
                        className="badge badge-accent badge-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex mt-auto">
                    <a
                      className="btn btn-accent w-2/3 hover:btn-accent-focus transition-colors"
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                      <Video className="w-4" />
                    </a>
                    <a
                      className="btn btn-neutral w-1/3 ml-2 hover:btn-neutral-focus transition-colors"
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4" />
                    </a>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
