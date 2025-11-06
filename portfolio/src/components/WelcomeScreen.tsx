import { useEffect, useState } from "react";
import { gsap } from "gsap";

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen = ({ onComplete }: WelcomeScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Animation d'entrée
    gsap.fromTo(
      ".welcome-text",
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
      }
    );

    // Animation du loader
    gsap.fromTo(
      ".loader-bar",
      {
        scaleX: 0,
      },
      {
        scaleX: 1,
        duration: 2,
        ease: "power2.inOut",
        delay: 0.5,
      }
    );

    // Animation de sortie et transition vers le contenu principal
    const timeline = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        setTimeout(() => {
          onComplete();
        }, 500);
      },
    });

    timeline
      .to(".welcome-text", {
        opacity: 0,
        y: -30,
        scale: 0.9,
        duration: 0.8,
        ease: "power2.in",
        delay: 2.5,
      })
      .to(
        ".welcome-container",
        {
          opacity: 0,
          scale: 1.1,
          duration: 0.6,
          ease: "power2.in",
        },
        "-=0.4"
      );
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-base-100 z-50 flex items-center justify-center">
      <div className="welcome-container text-center">
        <h1 className="welcome-text text-4xl md:text-6xl font-bold text-base-content mb-8">
          Добро пожаловать в моё <span className="text-accent">портфолио</span>
        </h1>

        <div className="welcome-text mb-8">
          <p className="text-lg md:text-xl text-base-content/70">
            Frontend-разработчик & UI/UX энтузиаст
          </p>
        </div>

        {/* Loader animé */}
        <div className="welcome-text w-64 md:w-80 mx-auto">
          <div className="bg-base-300 rounded-full h-2 overflow-hidden">
            <div className="loader-bar bg-accent h-full origin-left rounded-full"></div>
          </div>
          <p className="text-sm text-base-content/50 mt-4">Загрузка...</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
