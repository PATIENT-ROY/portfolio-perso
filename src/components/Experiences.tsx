import Title from "./Title";
import { useEffect } from "react";
import { useGSAP } from "../hooks/useGSAP";
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgGithub from "../assets/techno/github.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
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
];

const Experiences = () => {
  const { elementRef, staggerChildren } = useGSAP();

  useEffect(() => {
    // Animation stagger pour les compétences
    staggerChildren(0.1);
  }, [staggerChildren]);

  return (
    <div id="Experiences">
      <Title title="Навыки" />
      <div className="flex flex-col-reverse md:flex-row justify-center items-center mt-4">
        <div
          ref={elementRef}
          className="flex flex-wrap gap-2 justify-center items-center md:w-1/2 mt-4 md:mt-0"
        >
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex justify-center items-center flex-col transition-transform duration-200"
            >
              <div className="w-24 h-24 p-2 rounded-full border-2 border-accent transition-transform duration-600">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="object-cover rounded-full h-full w-full"
                />
              </div>
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
