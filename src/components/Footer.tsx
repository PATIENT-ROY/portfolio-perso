import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-base-content/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-display text-sm font-medium">Ройдев</p>
        <nav className="flex items-center gap-5" aria-label="Связаться">
          <a
            href="https://github.com/PATIENT-ROY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline decoration-base-content/30 underline-offset-4"
          >
            GitHub
          </a>
          <a
            href="https://t.me/PapyRoy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline decoration-base-content/30 underline-offset-4"
          >
            Telegram
          </a>
          <a
            href="mailto:contact-me-roydev@inbox.ru"
            className="inline-flex items-center gap-2 text-sm underline decoration-base-content/30 underline-offset-4"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Почта
          </a>
        </nav>
        <p className="text-sm text-base-content/55">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
