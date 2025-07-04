import { Container, Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-center md:justify-between items-center p-4 relative">
      <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
        <Container className="mr-2" />
        ROY
        <span className="text-accent">DEV</span>
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-4">
        <li>
          <a
            href="#Home"
            className="btn btn-sm btn-ghost hover:bg-accent hover:text-accent-content transition-colors"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#About"
            className="btn btn-sm btn-ghost hover:bg-accent hover:text-accent-content transition-colors"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#Experiences"
            className="btn btn-sm btn-ghost hover:bg-accent hover:text-accent-content transition-colors"
          >
            Experiences
          </a>
        </li>
        <li>
          <a
            href="#Projects"
            className="btn btn-sm btn-ghost hover:bg-accent hover:text-accent-content transition-colors"
          >
            My Projects
          </a>
        </li>
        <li>
          <a
            href="#Contact"
            className="btn btn-sm btn-ghost hover:bg-accent hover:text-accent-content transition-colors"
          >
            Contact
          </a>
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-base-100 shadow-lg border-t border-base-300 md:hidden z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.ul
              className="flex flex-col space-y-2 p-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {[
                { href: "#Home", label: "Home" },
                { href: "#About", label: "About" },
                { href: "#Experiences", label: "Experiences" },
                { href: "#Projects", label: "My Projects" },
                { href: "#Contact", label: "Contact" },
              ].map((item) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <motion.a
                    href={item.href}
                    className="block w-full text-left p-3 rounded-lg hover:bg-accent hover:text-accent-content transition-colors"
                    onClick={closeMenu}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
