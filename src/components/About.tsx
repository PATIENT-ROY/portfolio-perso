import Title from "./Title";
import img from "../assets/2.png";
import { LetterText, Code, Zap } from "lucide-react";

const aboutSections = [
  {
    id: 1,
    title: "Développeur Frontend",
    description:
      "Passionate Frontend Developer with expertise in React, TypeScript, and modern web technologies. I specialize in creating responsive, user-friendly web applications with clean code and optimal performance. Always eager to learn new technologies and best practices to deliver exceptional user experiences.",
    icon: <LetterText className="text-accent scale-150" />,
  },
  {
    id: 2,
    title: "Technologies & Outils",
    description:
      "Proficient in React, TypeScript, Next.js, Tailwind CSS, and modern JavaScript. Experience with Git, responsive design, API integration, and deployment platforms like Vercel. Committed to writing clean, maintainable code and following industry best practices.",
    icon: <Code className="text-accent scale-150" />,
  },
  {
    id: 3,
    title: "Approche & Méthodologie",
    description:
      "Focus on performance optimization, accessibility, and user experience. Strong problem-solving skills with attention to detail. Collaborative team player who values code quality and continuous learning in fast-paced development environments.",
    icon: <Zap className="text-accent scale-150" />,
  },
];

const About = () => {
  return (
    <div className="bg-base-300 p-6 md:p-10 mb-10 md:mb-32" id="About">
      <Title title="About" />
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 py-8 md:py-12">
        <div className="hidden md:block flex-shrink-0">
          <img
            src={img}
            alt="Profile"
            className="w-80 md:w-96 object-cover rounded-xl shadow-xl"
          />
        </div>

        <div className="w-full max-w-2xl space-y-4 md:space-y-6">
          {aboutSections.map((section) => (
            <div
              key={section.id}
              className="flex flex-col md:flex-row items-center bg-base-100 p-4 md:p-5 rounded-xl shadow-xl hover:shadow-2xl transition-shadow"
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
