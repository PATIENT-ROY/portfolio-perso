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
  { id: 8, name: "GitHub", image: imgGithub },
  { id: 9, name: "Next.js", image: imgNEXT },
];

const Experiences = () => {
  return (
    <section
      id="Experiences"
      className="scroll-mt-24 border-t border-base-content/10 py-16 sm:py-20"
    >
      <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
        Навыки
      </h2>
      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-5">
        {skills.map((skill) => (
          <li key={skill.id} className="flex items-center gap-3">
            <img
              src={skill.image}
              alt=""
              className="h-7 w-7 object-contain"
            />
            <span className="text-sm">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experiences;
