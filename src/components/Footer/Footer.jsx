import React, { useState } from 'react';
import { FiArrowRight, FiCheck, FiMail, FiMapPin, FiPhone, FiHeart } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#0B1120] text-white pt-24 pb-10 border-t border-white/10 overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link to="/" onClick={(e) => handleScrollTo(e, '#home')} className="flex items-center gap-3 mb-6 group cursor-pointer inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
                HN
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white block leading-tight">
                  Himalayan Neuro Care
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Providing world-class neurosurgical care in Nepal. Dedicated to excellence, innovation, and compassionate patient care.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <FiPhone className="text-primary" />
              <span>Emergency: <a href="tel:+9779800000001" className="text-white hover:text-primary transition-colors">+977 9800000001</a></span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-display">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Experience', 'Articles', 'FAQ'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => handleScrollTo(e, `#${link.toLowerCase()}`)}
                    className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-display">Specialties</h4>
            <ul className="space-y-4">
              {['Brain Tumor Surgery', 'Minimally Invasive Spine', 'Pediatric Neurosurgery', 'Endovascular Treatment', 'Neuro-Rehabilitation'].map((item) => (
                <li key={item}>
                  <a 
                    href="#services"
                    onClick={(e) => handleScrollTo(e, '#services')}
                    className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-accent mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-display">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for health tips and clinic updates.
            </p>
            
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                disabled={subscribed}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors disabled:opacity-50"
              />
              <button 
                type="submit"
                disabled={subscribed}
                className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-primary-light text-white rounded-lg px-3 flex items-center justify-center transition-colors disabled:bg-emerald-500"
              >
                {subscribed ? <FiCheck /> : <FiArrowRight />}
              </button>
            </form>
            {subscribed && (
              <p className="text-emerald-400 text-xs mt-2 flex items-center gap-1">
                <FiCheck /> Subscribed successfully!
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} Himalayan Neuro Care. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs text-center md:text-right max-w-lg">
            <strong>Disclaimer:</strong> The information provided on this website is for educational purposes only and should not replace professional medical advice. Always consult a qualified healthcare provider regarding a medical condition.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
