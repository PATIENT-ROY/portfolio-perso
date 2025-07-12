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
import { useLocomotiveScroll } from "./hooks/useLocomotiveScroll";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const { scrollRef, scrollToTop } = useLocomotiveScroll();

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <ThemeProvider>
      <SEOHead />
      {showWelcome ? (
        <WelcomeScreen onComplete={handleWelcomeComplete} />
      ) : (
        <div data-scroll-container ref={scrollRef}>
          <ScrollToTop onScrollToTop={scrollToTop} />
          <div>
            <div className="p-5 md:px-[15%]">
              <Navbar />
              <Home />
            </div>
            <About />
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
