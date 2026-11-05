import img5 from "../assets/projects/5.jpg";
import adaptedCover from "../assets/projects/adapted/cover.webp";
import adaptedStudy from "../assets/projects/adapted/study.webp";
import adaptedLife from "../assets/projects/adapted/life.webp";
import kromeHero from "../assets/projects/krome/hero.jpg";
import kromeCards from "../assets/projects/krome/cards.jpg";
import kromePhones from "../assets/projects/krome/phones.jpg";
import market1 from "../assets/projects/market/1.jpg";
import market2 from "../assets/projects/market/2.jpg";
import market3 from "../assets/projects/market/3.jpg";
import jekall1 from "../assets/projects/jekall/1.jpg";
import jekall2 from "../assets/projects/jekall/2.jpg";
import jekall3 from "../assets/projects/jekall/3.jpg";
import fulfill1 from "../assets/projects/fulfill/1.jpg";
import fulfill2 from "../assets/projects/fulfill/2.jpg";
import fulfill3 from "../assets/projects/fulfill/3.jpg";
import Reveal from "./Reveal";

const hasLink = (href?: string) => Boolean(href && href !== "#");

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoLink?: string;
  caseLink?: string;
  repoLink?: string;
  images: string[];
  role?: string;
  contributions?: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Krome Group",
    description:
      "Сайт маркетингового агентства: яркий лендинг с интерактивным скроллом и кейсами. Делал frontend в команде Fancy Solutions. Шорт-лист фестиваля «Среда 2025».",
    technologies: ["Next.js", "React"],
    demoLink: "https://krome.group/ru",
    caseLink: "https://ratings.sostav.ru/works/3337",
    images: [kromeHero, kromeCards, kromePhones],
  },
  {
    id: 2,
    title: "AdaptEd Russia",
    description:
      "Образовательная платформа для иностранных студентов в России. Гайды по учёбе в вузе и по быту: документы, общежитие, транспорт, миграционный учёт.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    demoLink: "https://adaptedrussia.ru/",
    images: [adaptedCover, adaptedStudy, adaptedLife],
  },
  {
    id: 3,
    title: "Books Academy",
    description:
      "Сайт образовательной платформы для онлайн-обучения и управления курсами. Я отвечал за разработку React frontend. Современный интерфейс с аутентификацией пользователей.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "API Integration"],
    repoLink: "https://github.com/PATIENT-ROY/todo-1.git",
    images: [img5],
    role: "Frontend-разработчик - Команда",
    contributions: [
      "Разработка пользовательского интерфейса",
      "Интерфейс каталога курсов",
      "UI аутентификации пользователей",
    ],
  },
  {
    id: 4,
    title: "Сайт интернет-магазина",
    description:
      "Простой и функциональный сайт электронной коммерции, разработанный с использованием HTML, CSS и vanilla JavaScript. Интерфейс онлайн-магазина с каталогом продуктов и адаптивным дизайном.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://patient-roy.github.io/market1/",
    repoLink: "https://github.com/PATIENT-ROY/market1.git",
    images: [market1, market2, market3],
  },
  {
    id: 5,
    title: "Jekall Mobiles - Интернет-магазин телефонов",
    description:
      "Современный сайт электронной коммерции, специализирующийся на продаже мобильных телефонов. Интуитивный пользовательский интерфейс с каталогом продуктов, системой фильтрации, корзиной покупок и управлением заказами.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GSAP"],
    demoLink: "https://jekall-mobiles.netlify.app/",
    repoLink: "https://github.com/PATIENT-ROY/Gallery-react.git",
    images: [jekall1, jekall2, jekall3],
  },
  {
    id: 6,
    title: "FulfillPro — фулфилмент для маркетплейсов",
    description:
      "Лендинг фулфилмент-сервиса полного цикла для селлеров маркетплейсов: приемка, упаковка и отгрузка с преимуществами и тарифами.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://patient-roy.github.io/FulfillPro/",
    images: [fulfill1, fulfill2, fulfill3],
  },
];

const Projects = () => {
  return (
    <section
      id="Projects"
      className="scroll-mt-24 border-t border-base-content/10 py-16 sm:py-20"
    >
      <Reveal>
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Работы
        </h2>
      </Reveal>
      <div className="mt-8">
        {projects.map((project) => (
          <Reveal key={project.id}>
          <article
            className="grid gap-5 border-t border-base-content/10 py-8"
          >
            <div
              className={
                project.images.length > 1
                  ? "grid grid-cols-1 gap-3 sm:grid-cols-3"
                  : "sm:max-w-[calc((100%-1.5rem)/3)]"
              }
            >
              {project.images.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={index === 0 ? project.title : ""}
                  className="aspect-[16/10] w-full object-cover"
                />
              ))}
            </div>
            <div>
              <h3 className="font-display text-xl font-medium leading-snug sm:text-2xl">
                {project.title}
              </h3>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-base-content/75 sm:text-base">
                {project.description}
              </p>
              {project.role && (
                <p className="mt-3 text-sm text-base-content/60">
                  {project.role}
                  {project.contributions
                    ? `. ${project.contributions.join(", ")}`
                    : ""}
                </p>
              )}
              <p className="mt-3 text-sm text-base-content/55">
                {project.technologies.join(", ")}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {hasLink(project.demoLink) && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline decoration-base-content/30 underline-offset-4"
                  >
                    Открыть сайт
                  </a>
                )}
                {hasLink(project.caseLink) && (
                  <a
                    href={project.caseLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline decoration-base-content/30 underline-offset-4"
                  >
                    Кейс
                  </a>
                )}
                {hasLink(project.repoLink) && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline decoration-base-content/30 underline-offset-4"
                  >
                    Код
                  </a>
                )}
              </div>
            </div>
          </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
