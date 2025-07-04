import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollProgress from "./components/ScrollProgress";
import SEOHead from "./components/SEOHead";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <SEOHead />
      <ScrollProgress />
      <div>
        <div className="p-5 md:px-[15%]">
          <Navbar />
          <Home />
        </div>
        <About />
        <div className="p-5 md:px-[15%]">
          <Experiences />
          <Projects />
        </div>
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
