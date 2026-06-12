import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations using Intersection Observer.
 * Returns a ref and an isVisible boolean.
 */
export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.15,
    rootMargin = '-50px 0px',
    triggerOnce = true,
  } = options;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
};

/**
 * Custom hook to track scroll progress (0 to 1).
 */
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
};

/**
 * Custom hook to track the currently active section in the viewport.
 */
export const useActiveSection = (sectionIds = []) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observers = [];
    const handleIntersect = (id) => (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(id);
        }
      });
    };

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(handleIntersect(id), {
          threshold: 0.3,
          rootMargin: '-80px 0px -50% 0px',
        });
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [sectionIds]);

  return activeSection;
};

export default useScrollAnimation;
