import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

interface ScrollToTopProps {
  onScrollToTop: () => void;
}

const ScrollToTop = ({ onScrollToTop }: ScrollToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={onScrollToTop}
      className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center bg-primary text-primary-content"
      aria-label="Наверх"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
};

export default ScrollToTop;
