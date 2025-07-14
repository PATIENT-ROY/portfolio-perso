import { Container, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 p-10">
      <aside>
        <Container className="w-10 h-10" />
        <p className="font-bold">
          Roy
          <span className="text-accent">DEV</span>
        </p>
        <p>Copyright © {new Date().getFullYear()} - все права защищены</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:shadow-lg"
          >
            <Instagram className="w-6 h-6 text-current hover:text-white transition-colors duration-300" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:shadow-lg"
          >
            <Linkedin className="w-6 h-6 text-current hover:text-white transition-colors duration-300" />
          </a>
          <a
            href="https://t.me/royroy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-blue-500 hover:shadow-lg"
          >
            <svg
              className="w-6 h-6 text-current hover:text-white transition-colors duration-300"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          </a>
          <a
            href="mailto:contact@roydev.ru"
            aria-label="Email"
            className="p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-red-500 hover:shadow-lg"
          >
            <Mail className="w-6 h-6 text-current hover:text-white transition-colors duration-300" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
