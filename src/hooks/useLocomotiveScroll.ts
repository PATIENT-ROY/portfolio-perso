import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export const useLocomotiveScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    // Attendre que le DOM soit complètement chargé
    const initLocomotive = () => {
      if (scrollRef.current && !locomotiveRef.current) {
        try {
          locomotiveRef.current = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            lerp: 0.1,
            multiplier: 1,
            class: 'is-revealed',
            reloadOnContextChange: true,
            touchMultiplier: 2,
          });

          // Mettre à jour la hauteur du conteneur
          locomotiveRef.current.on('scroll', (args: { scroll: { y: number } }) => {
            // Déclencher un événement personnalisé pour que les autres composants puissent l'écouter
            const event = new CustomEvent('locomotive-scroll', { 
              detail: { scroll: args.scroll } 
            });
            document.dispatchEvent(event);
          });

          // Mettre à jour après le chargement
          setTimeout(() => {
            locomotiveRef.current?.update();
          }, 500);
        } catch (error) {
          console.error("Error initializing Locomotive Scroll:", error);
        }
      }
    };

    // Initialiser immédiatement si le DOM est prêt
    if (document.readyState === 'complete') {
      initLocomotive();
    } else {
      // Attendre que le DOM soit chargé
      window.addEventListener('load', initLocomotive);
    }

    return () => {
      window.removeEventListener('load', initLocomotive);
      if (locomotiveRef.current) {
        locomotiveRef.current.destroy();
      }
    };
  }, []);

  const scrollTo = (target: string | number) => {
    if (locomotiveRef.current) {
      locomotiveRef.current.scrollTo(target);
    }
  };

  const scrollToTop = () => {
    if (locomotiveRef.current) {
      locomotiveRef.current.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (locomotiveRef.current) {
      const element = document.getElementById(sectionId);
      if (element) {
        locomotiveRef.current.scrollTo(element, {
          duration: 1.5,
          offset: -100, // Offset pour tenir compte de la navbar
        });
      }
    } else {
      // Fallback pour le scroll normal
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return {
    scrollRef,
    locomotiveRef,
    scrollTo,
    scrollToTop,
    scrollToSection,
  };
}; 