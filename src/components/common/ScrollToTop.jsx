import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-br from-primary to-primary-light text-white rounded-full shadow-lg shadow-primary/30 flex items-center justify-center hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <FiArrowUp className="text-lg group-hover:-translate-y-0.5 transition-transform" />
          {/* Glow ring */}
          <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-30" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
