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
import img6 from "../assets/projects/6.jpg";
import img7 from "../assets/projects/7.jpg";
import img8 from "../assets/projects/8.jpg";

const projects = [
  {
    id: 1,
    title: "Keystone Logistics Event",
    description:
      "Modern event website for the logistics industry. I was responsible for the React frontend and API integration. Professional interface with event management system and registrations.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    demoLink: "https://keystone-logistics-event.vercel.app/",
    repoLink: "#",
    image: img1,
    role: "Frontend Developer - Team",
    contributions: [
      "User Interface Development",
      "Event Registration System",
      "API Integration",
    ],
  },
  {
    id: 7,
    title: "Метрика - Interior Design Studio",
    description:
      "Professional website for a Russian interior design studio. Modern interface with sections dedicated to services, residential project portfolio, and contact form.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink:
      "https://sergeystarodub.github.io/metrica-site/#services-identifier",
    repoLink: "https://github.com/PATIENT-ROY/LandingPage1.git",
    image: img7,
  },
  {
    id: 3,
    title: "Jekall Mobiles - Online phone shop",
    description:
      "Modern e-commerce site specializing in the sale of mobile phones. Intuitive user interface with product catalog, filtering system, shopping cart and order management.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GSAP"],
    demoLink: "https://jekall-mobiles.netlify.app/",
    repoLink: "https://github.com/PATIENT-ROY/Gallery-react.git",
    image: img8,
  },
  {
    id: 4,
    title: "Online shopping website",
    description:
      "Simple and functional e-commerce website developed with HTML, CSS and vanilla JavaScript. Online store interface with product catalog and responsive design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://patient-roy.github.io/market1/",
    repoLink: "https://github.com/PATIENT-ROY/market1.git",
    image: img4,
  },
  {
    id: 5,
    title: "Books Academy",
    description:
      "Educational platform website for online learning and course management. I was responsible for the React frontend development. Modern interface with user authentication.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "API Integration"],
    demoLink: "https://books-academy.ru/welcome",
    repoLink: "https://github.com/PATIENT-ROY/todo-1.git",
    image: img5,
    role: "Frontend Developer - Team",
    contributions: [
      "User Interface Development",
      "Course Catalog Interface",
      "User Authentication UI",
    ],
  },
  {
    id: 6,
    title: "Tourist Places Search",
    description:
      "Interactive website for discovering and searching tourist destinations. Users can browse locations, view details, and find travel information.",
    technologies: ["React", "CSS"],
    demoLink: "#",
    repoLink: "https://github.com/PATIENT-ROY/Gallery-react.git",
    image: img6,
  },
  {
    id: 2,
    title: "Portfolio interactif",
    description:
      "Interactive portfolio showcasing my work and skills. Built with React and Tailwind CSS for a modern and responsive design.",
    technologies: ["React", "Tailwind CSS"],
    demoLink: "#",
    repoLink: "https://github.com/PATIENT-ROY/Portfolio-interactif.git",
    image: img2,
  },
  {
    id: 8,
    title: "Crypto Watch Tower",
    description:
      "Real-time cryptocurrency tracking and monitoring platform. Users can view live prices, market trends, and portfolio management.",
    technologies: ["React", "SASS", "Axios"],
    demoLink: "#",
    repoLink: "https://github.com/PATIENT-ROY/Crypto_watch_tower_app.git",
    image: img3,
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

  console.log("Projects component is rendering");

  return (
    <div className="mt-10" id="Projects">
      <Title title="My Projects" />

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
                    <div className="h-10 w-2/3 bg-base-200 rounded animate-pulse"></div>
                    <div className="h-10 w-1/3 ml-2 bg-base-200 rounded animate-pulse"></div>
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
                        console.error(`ERREUR IMAGE ${project.id}:`, e);
                        e.currentTarget.style.display = "none";
                        if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerHTML = `
                          <div class="flex items-center justify-center h-full text-center p-4">
                            <div>
                              <div class="text-lg font-bold mb-2">${project.title}</div>
                              <div class="text-xs text-base-content/50">Image non disponible</div>
                            </div>
                          </div>
                        `;
                        }
                      }}
                      onLoad={() => {
                        console.log(`SUCCÈS IMAGE ${project.id}`);
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
                      <span className="badge badge-primary badge-sm mr-2">
                        {project.role}
                      </span>
                      {project.contributions && (
                        <div className="mt-1 text-xs text-base-content/70">
                          <strong>Contributions :</strong>{" "}
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
