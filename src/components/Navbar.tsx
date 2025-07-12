import { Container, Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

const Navbar = ({ onNavigate }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (sectionId: string) => {
    onNavigate(sectionId);
    closeMenu();
  };

  return (
    <div className="flex justify-center md:justify-between items-center p-4 relative">
      <button
        onClick={() => handleNavigation("Home")}
        className="flex items-center font-bold text-3xl md:text-xl cursor-pointer hover:opacity-80 transition-opacity"
      >
        <Container className="mr-2" />
        ROY
        <span className="text-accent">DEV</span>
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-4">
        <li>
          <button
            onClick={() => handleNavigation("Home")}
            className="btn btn-sm btn-ghost hover:bg-accent hover:text-accent-content transition-colors"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigation("About")}
            className="btn btn-sm btn-ghost hover:bg-accent hover:text-accent-content transition-colors"
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigation("Experiences")}
            className="btn btn-sm btn-ghost hover:bg-accent hover:text-accent-content transition-colors"
          >
            Experiences
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigation("Projects")}
            className="btn btn-sm btn-ghost hover:bg-accent hover:text-accent-content transition-colors"
          >
            My Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigation("Contact")}
            className="btn btn-sm btn-ghost hover:bg-accent hover:text-accent-content transition-colors"
          >
            Contact
          </button>
        </li>
      </ul>

      {/* Theme Toggle Button */}
      <button
        className="btn btn-ghost btn-sm mr-2"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden btn btn-ghost btn-sm"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-base-100 shadow-lg border-t border-base-300 md:hidden z-50 animate-slide-down">
          <ul className="flex flex-col space-y-2 p-4">
            {[
              { id: "Home", label: "Home" },
              { id: "About", label: "About" },
              { id: "Experiences", label: "Experiences" },
              { id: "Projects", label: "My Projects" },
              { id: "Contact", label: "Contact" },
            ].map((item, index) => (
              <li
                key={item.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => handleNavigation(item.id)}
                  className="block w-full text-left p-3 rounded-lg hover:bg-accent hover:text-accent-content transition-all duration-300 hover:translate-x-2"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
