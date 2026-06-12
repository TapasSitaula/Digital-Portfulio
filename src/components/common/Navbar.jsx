import React, { useState, useEffect, useMemo } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from '../../hooks/useScrollAnimation';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = useMemo(() => [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Articles', href: '#articles' },
    { name: 'Contact', href: '#contact' },
  ], []);

  const sectionIds = useMemo(() => 
    navLinks.map(l => l.href.replace('#', '')), 
    [navLinks]
  );
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/85 dark:bg-dark-bg/85 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center gap-3 group"
              onClick={(e) => handleScrollTo(e, '#home')}
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow duration-300">
                HN
              </div>
              <div>
                <span className="font-display font-bold text-xl text-gray-900 dark:text-white block leading-tight">
                  Himalayan Neuro Care
                </span>
                <span className="text-[11px] text-primary dark:text-accent font-medium tracking-wider uppercase block">
                  Excellence in Neurology
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-primary dark:text-accent'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-primary to-accent rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-3 p-2.5 rounded-xl bg-gray-100 dark:bg-dark-surface hover:bg-gray-200 dark:hover:bg-dark-card transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent"
              aria-label="Toggle Dark Mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -10, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 10, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* CTA Button */}
            <a
              href="#appointment"
              onClick={(e) => handleScrollTo(e, '#appointment')}
              className="ml-4 btn-primary text-sm !px-6 !py-2.5"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-[-1]"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-dark-card shadow-2xl border-t border-gray-100 dark:border-gray-800"
            >
              <div className="px-6 pt-4 pb-8 space-y-1">
                {navLinks.map((link, idx) => {
                  const sectionId = link.href.replace('#', '');
                  const isActive = activeSection === sectionId;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className={`block px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                        isActive
                          ? 'text-primary dark:text-accent bg-primary/5 dark:bg-accent/5'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-surface'
                      }`}
                    >
                      {link.name}
                    </motion.a>
                  );
                })}
                <div className="pt-4">
                  <a
                    href="#appointment"
                    onClick={(e) => handleScrollTo(e, '#appointment')}
                    className="block w-full text-center btn-primary !rounded-xl"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
