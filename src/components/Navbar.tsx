import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

const links = [
  { id: "Home", label: "Главная" },
  { id: "About", label: "Обо мне" },
  { id: "Experiences", label: "Технологии" },
  { id: "Projects", label: "Работы" },
  { id: "Contact", label: "Контакты" },
];

const Navbar = ({ onNavigate }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleNavigation = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-base-content/10 bg-base-100/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <button
          onClick={() => handleNavigation("Home")}
          className="font-display text-sm font-medium"
        >
          Ройдев
        </button>

        <nav className="hidden lg:ml-auto lg:block" aria-label="Разделы">
          <ul className="flex items-center gap-1">
            {links.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavigation(item.id)}
                  className="px-3 py-2 text-sm text-base-content/75 hover:text-base-content"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <button
            className="flex h-11 w-11 items-center justify-center"
            onClick={toggleTheme}
            aria-label="Сменить тему"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </button>
          <button
            className="flex h-11 w-11 items-center justify-center lg:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          className="absolute inset-x-0 top-full z-50 border-t border-base-content/10 bg-base-100 shadow-[0_16px_40px_rgba(23,32,42,0.12)] lg:hidden"
          aria-label="Разделы"
        >
          <ul className="mx-auto max-w-6xl px-3 py-2 sm:px-6">
            {links.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavigation(item.id)}
                  className="block w-full px-2 py-3 text-left text-base"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
