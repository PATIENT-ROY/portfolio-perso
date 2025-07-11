import { Container, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

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
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Twitter className="w-6 h-6 text-current" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Youtube className="w-6 h-6 text-current" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Facebook className="w-6 h-6 text-current" />
          </a>
          <a href="mailto:roydev@example.com" aria-label="Email">
            <Instagram className="w-6 h-6 text-current" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
