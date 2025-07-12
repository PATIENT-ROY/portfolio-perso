import { Mail } from "lucide-react";
import { useEffect } from "react";
import { useGSAP } from "../hooks/useGSAP";
import img from "../assets/3.png";

const Home = () => {
  const { elementRef, fadeInLeft, fadeInRight } = useGSAP();

  useEffect(() => {
    // Animation pour le texte (gauche)
    fadeInLeft(0.2);

    // Animation pour l'image (droite)
    setTimeout(() => {
      fadeInRight(0.3);
    }, 200);
  }, [fadeInLeft, fadeInRight]);

  return (
    <div
      id="Home"
      className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10"
    >
      <div ref={elementRef} className="flex flex-col">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
          Hello, <br /> I'm <span className="text-accent">Roydev</span>
        </h1>

        <p className="my-4 text-md text-center md:text-left">
          I am a frontend developer
          <br />
          using React and typescript.
          <br /> Contact me if you need my services ( a website and a web App).
        </p>
        <a
          href="#Contact"
          className="btn btn-accent md:w-fit hover:scale-105 transition-transform"
        >
          <Mail className="w-5 h-5" />
          Contact-me
        </a>
      </div>

      <div className="md:ml-60">
        <img
          src={img}
          alt=""
          className="w-96 h-96 object-cover border-8 border-accent shadow-xl hover:scale-105 hover:rotate-2 transition-all duration-300"
          style={{
            borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
