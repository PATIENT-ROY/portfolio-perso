import Title from "./Title";
import { motion } from "framer-motion";
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgGithub from "../assets/techno/github.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgNODE from "../assets/techno/node-js.png";
import imgNEXT from "../assets/techno/Next.png";

const skills = [
  { id: 1, name: "HTML", image: imgHTML },
  { id: 2, name: "CSS", image: imgCSS },
  { id: 3, name: "JavaScript", image: imgJS },
  { id: 4, name: "React", image: imgREACT },
  { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
  { id: 7, name: "TypeScript", image: imgTYPE },
  { id: 8, name: "github", image: imgGithub },
  { id: 9, name: "Next.js", image: imgNEXT },
  { id: 10, name: "Node.js", image: imgNODE },
];

const Experiences = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div id="Experiences">
      <Title title="Experiences" />
      <div className="flex flex-col-reverse md:flex-row justify-center items-center mt-4">
        <motion.div
          className="flex flex-wrap gap-2 justify-center items-center md:w-1/2 mt-4 md:mt-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="flex justify-center items-center flex-col"
              variants={skillVariants}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="w-24 h-24 p-2 rounded-full border-2 border-accent"
                whileHover={{
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="object-cover rounded-full h-full w-full"
                />
              </motion.div>
              <span className="mt-2 text-sm">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experiences;
