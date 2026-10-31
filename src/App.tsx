import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import SEOHead from "./components/SEOHead";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    const top = element.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ThemeProvider>
      <SEOHead />
      <div className="min-h-screen bg-base-100 text-base-content">
        <ScrollToTop onScrollToTop={scrollToTop} />
        <Navbar onNavigate={scrollToSection} />
        <main className="mx-auto max-w-6xl px-5 sm:px-8">
          <Home onNavigate={scrollToSection} />
          <About />
          <Experiences />
          <Projects />
        </main>
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
