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
import { Github, Video } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Booking manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["React", "typescript", "Tailwind CSS"],
    demoLink: "#",
    repoLink: "#",
    image: img1,
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
    id: 3,
    title: "Crypto site",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["React", "sass", "axios"],
    demoLink: "#",
    repoLink: "https://github.com/PATIENT-ROY/Crypto_watch_tower_app.git",
    image: img3,
  },
  {
    id: 4,
    title: "Online shopping site",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "#",
    repoLink: "https://github.com/PATIENT-ROY/market1.git",
    image: img4,
  },
  {
    id: 5,
    title: "Online food search site",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["React", "Tailwind CSS"],
    demoLink: "#",
    repoLink: "https://github.com/PATIENT-ROY/todo-1.git",
    image: img5,
  },
  {
    id: 6,
    title: "Online tourist places search site",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["React"],
    demoLink: "#",
    repoLink: "https://github.com/PATIENT-ROY/Gallery-react.git",
    image: img6,
  },
  {
    id: 7,
    title: "Landing Pages",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "#",
    repoLink: "https://github.com/PATIENT-ROY/LandingPage1.git",
    image: img7,
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
            className="bg-base-300 p-5 h-fit rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            variants={cardVariants}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
          >
            <OptimizedImage
              src={project.image}
              alt={project.title}
              className="w-full rounded-xl h-56 object-cover"
            />
            <div>
              <h1 className="my-2 font-bold">{project.title}</h1>
              <p className="text-sm">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 my-3">
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
            <div className="flex">
              <motion.a
                className="btn btn-accent w-2/3"
                href={project.demoLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Demo
                <Video className="w-4" />
              </motion.a>
              <motion.a
                className="btn btn-neutral w-1/3 ml-2"
                href={project.repoLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
