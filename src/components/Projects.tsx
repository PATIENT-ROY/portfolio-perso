import Title from "./Title";
import OptimizedImage from "./OptimizedImage";
import { motion } from "framer-motion";
import img1 from "../assets/projects/1.png";
import img2 from "../assets/projects/2.png";
import img3 from "../assets/projects/3.png";
import img4 from "../assets/projects/4.png";
import img5 from "../assets/projects/5.png";
import img6 from "../assets/projects/6.png";
import img7 from "../assets/projects/7.png";
import img8 from "../assets/projects/8.png";
import { Github, Video } from "lucide-react";

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
    title:
      "Метрика - Студия дизайна интерьера Landing Pages, Interior design studio Metrika",
    description:
      "Professional website for a Russian interior design studio. Modern interface with sections dedicated to services (planning, project design, supervision, equipment), residential project portfolio, and contact form. Sleek and elegant design reflecting the expertise in interior design. Smooth navigation with anchors to the different sections.",
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
      "Modern e-commerce site specializing in the sale of mobile phones. Intuitive user interface with product catalog, filtering system, shopping cart and order management. Developed with React and TypeScript for an optimal user experience.",
    technologies: [
      "React",
      "typescript",
      "next-js",
      "Tailwind CSS",
      "gsap animation",
    ],
    demoLink: "https://jekall-mobiles.netlify.app/",
    repoLink: "https://github.com/PATIENT-ROY/Gallery-react.git",
    image: img8,
  },
  {
    id: 4,
    title: "Online shopping website",
    description:
      "Simple and functional e-commerce website developed with HTML, CSS and vanilla JavaScript. Online store interface with product catalog, navigation system and responsive design. Project demonstrating basic frontend web development skills with a hands-on approach to e-commerce.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://patient-roy.github.io/market1/",
    repoLink: "https://github.com/PATIENT-ROY/market1.git",
    image: img4,
  },
  {
    id: 5,
    title: "Books Academy",
    description:
      "Educational platform website for online learning and course management. I was responsible for the React frontend development. Modern interface with user authentication and course catalog.",
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
      "Interactive website for discovering and searching tourist destinations. Users can browse locations, view details, and find travel information. Built with React for a smooth user experience with dynamic content loading and responsive design.",
    technologies: ["React", "CSS"],
    demoLink: "#",
    repoLink: "https://github.com/PATIENT-ROY/Gallery-react.git",
    image: img6,
  },
  {
    id: 2,
    title: "Portfolio interactif",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["React", "Tailwind CSS"],
    demoLink: "#",
    repoLink: "https://github.com/PATIENT-ROY/Portfolio-interactif.git",
    image: img2,
  },
  {
    id: 8,
    title: "Crypto Watch Tower",
    description:
      "Real-time cryptocurrency tracking and monitoring platform. Users can view live prices, market trends, and portfolio management. Built with React and SASS for styling, integrated with cryptocurrency APIs for real-time data updates.",
    technologies: ["React", "SASS", "Axios"],
    demoLink: "#",
    repoLink: "https://github.com/PATIENT-ROY/Crypto_watch_tower_app.git",
    image: img3,
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="mt-10" id="Projects">
      <Title title="My Projects" />
      <motion.div
        className="grid md:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-base-300 p-5 h-[600px] w-full max-w-sm rounded-xl shadow-lg hover:shadow-2xl transition-shadow flex flex-col"
            variants={cardVariants}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
          >
            <OptimizedImage
              src={project.image}
              alt={project.title}
              className="w-full rounded-xl h-48 object-cover flex-shrink-0"
            />
            <div className="flex-1 flex flex-col">
              <h1 className="my-2 font-bold text-lg">{project.title}</h1>
              <p className="text-sm flex-1 mb-3">{project.description}</p>
              {project.role && (
                <div className="mb-3">
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
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={`${project.id}-${index}`}
                    className="badge badge-accent badge-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <div className="flex mt-auto">
                <motion.a
                  className="btn btn-accent w-2/3"
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Demo
                  <Video className="w-4" />
                </motion.a>
                <motion.a
                  className="btn btn-neutral w-1/3 ml-2"
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
