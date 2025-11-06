import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import SEOHead from "./components/SEOHead";
import WelcomeScreen from "./components/WelcomeScreen";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  // Fonction de navigation simple
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Получаем позицию элемента
      const elementPosition = element.offsetTop;

      // Определяем отступ в зависимости от размера экрана
      const isMobile = window.innerWidth < 768; // md breakpoint
      const offset = isMobile ? 80 : 20; // Больший отступ на мобильных

      // Скроллим с учетом отступа
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  // Fonction pour remonter en haut
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ThemeProvider>
      <SEOHead />
      {showWelcome ? (
        <WelcomeScreen onComplete={handleWelcomeComplete} />
      ) : (
        <div>
          <ScrollToTop onScrollToTop={scrollToTop} />

          {/* Section Home */}
          <div className="min-h-screen">
            <div className="p-5 md:px-[15%]">
              <Navbar onNavigate={scrollToSection} />
              <Home onNavigate={scrollToSection} />
            </div>
          </div>

          {/* Section About */}
          <div className="bg-base-300 min-h-screen">
            <div className="p-5 md:px-[15%]">
              <About />
            </div>
          </div>

          {/* Autres sections */}
          <div className="bg-base-100">
            <div className="p-5 md:px-[15%]">
              <Experiences />
              <div className="mt-16">
                <Projects />
              </div>
            </div>
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </ThemeProvider>
  );
}
