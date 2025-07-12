import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Enregistrer ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  const fadeInUp = (delay: number = 0) => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: elementRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }
  };

  const fadeInLeft = (delay: number = 0) => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: elementRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }
  };

  const fadeInRight = (delay: number = 0) => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: elementRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }
  };

  const scaleIn = (delay: number = 0) => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: elementRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }
  };

  const staggerChildren = (stagger: number = 0.1) => {
    if (elementRef.current) {
      const children = elementRef.current.children;
      gsap.fromTo(
        children,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: elementRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }
  };

  const parallax = (speed: number = 0.5) => {
    if (elementRef.current) {
      gsap.to(elementRef.current, {
        yPercent: -50 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  };

  // Nettoyer les ScrollTriggers lors du démontage
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return {
    elementRef,
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerChildren,
    parallax,
  };
}; 