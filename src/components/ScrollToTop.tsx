import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

interface ScrollToTopProps {
  onScrollToTop: () => void;
}

const ScrollToTop = ({ onScrollToTop }: ScrollToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Utiliser plusieurs méthodes pour détecter le scroll
      const scrollY =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop;

      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Écouter le scroll normal
    window.addEventListener("scroll", toggleVisibility);

    // Écouter aussi les événements de Locomotive Scroll
    document.addEventListener("locomotive-scroll", toggleVisibility);

    // Vérifier immédiatement
    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      document.removeEventListener("locomotive-scroll", toggleVisibility);
    };
  }, []);

  const handleClick = () => {
    // Essayer d'abord la fonction Locomotive Scroll
    try {
      onScrollToTop();
    } catch {
      // Fallback vers le scroll normal
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={handleClick}
          className="fixed bottom-6 right-6 z-50 btn btn-accent btn-circle shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
