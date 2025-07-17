import { Mail } from "lucide-react";
import { useEffect, useState } from "react";
import img from "../assets/3.png";

interface HomeProps {
  onNavigate: (sectionId: string) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation d'entrée après un délai
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="Home"
      className={`flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div
        className={`flex flex-col transition-all duration-1000 ease-out delay-300 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
        }`}
        data-scroll
        data-scroll-speed="2"
      >
        <h1
          className={`text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0 transition-all duration-800 ease-out delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          data-scroll
          data-scroll-delay="0.1"
        >
          Привет, <br /> я <span className="text-accent">Рой</span>
        </h1>

        <p
          className={`my-4 text-md text-center md:text-left transition-all duration-800 ease-out delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          data-scroll
          data-scroll-delay="0.2"
        >
          Я frontend-разработчик
          <br />
          использующий React и TypeScript.
          <br /> Свяжитесь со мной, если нужны мои услуги (сайт и
          веб-приложение).
        </p>
        <button
          onClick={() => onNavigate("Contact")}
          className={`btn btn-accent md:w-fit hover:scale-105 transition-all duration-800 ease-out delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          data-scroll
          data-scroll-delay="0.3"
        >
          <Mail className="w-5 h-5" />
          Связаться со мной
        </button>
      </div>

      <div
        className={`md:ml-60 transition-all duration-1000 ease-out delay-500 ${
          isVisible
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-0 translate-x-20 scale-95"
        }`}
        data-scroll
        data-scroll-speed="-1"
      >
        <img
          src={img}
          alt=""
          className="w-96 h-96 object-cover border-8 border-accent shadow-xl transition-all duration-300"
          style={{
            borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
