import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEOHead = ({
  title = "Ройдев — сайты для бизнеса",
  description = "Создаю сайты для бизнеса и ваших идей. От первого экрана до заявки. Екатеринбург, работаю удалённо.",
  keywords = "сайты для бизнеса, разработка сайтов, React, TypeScript, портфолио, Екатеринбург",
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", keywords);

    // Update meta author
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement("meta");
      metaAuthor.setAttribute("name", "author");
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.setAttribute("content", "Ройдев");

    // Update meta robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement("meta");
      metaRobots.setAttribute("name", "robots");
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute("content", "index, follow");
  }, [title, description, keywords]);

  return null;
};

export default SEOHead;
