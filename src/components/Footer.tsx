import {
  Container,
  Instagram,
  Linkedin,
  MessageCircle,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300  p-10">
      <aside>
        <Container className="w-10 h-10" />
        <p className="font-bold">
          Roy
          <span className="text-accent">DEV</span>
        </p>
        <p>Copyright © {new Date().getFullYear()} - all rights reserved</p>
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
            href="https://t.me/roydev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-blue-500 hover:shadow-lg"
          >
            <MessageCircle className="w-6 h-6 text-current hover:text-white transition-colors duration-300" />
          </a>
          <a
            href="mailto:contact@roydev.com"
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
