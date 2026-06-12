import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const SectionHeader = ({ subtitle, title, description, light = false, id }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <div ref={ref} className="text-center mb-16 md:mb-20" id={id}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {subtitle && (
          <span className={`inline-block text-sm font-semibold tracking-widest uppercase mb-3 ${
            light 
              ? 'text-accent-light' 
              : 'text-primary dark:text-accent'
          }`}>
            {subtitle}
          </span>
        )}
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-5 text-balance ${
          light 
            ? 'text-white' 
            : 'text-gray-900 dark:text-white'
        }`}>
          {title}
        </h2>
        <div className="flex items-center justify-center gap-2 mb-5">
          <div className={`h-[3px] w-8 rounded-full ${light ? 'bg-white/30' : 'bg-primary/20'}`}></div>
          <div className={`h-[3px] w-12 rounded-full ${light ? 'bg-accent-light' : 'bg-primary'}`}></div>
          <div className={`h-[3px] w-8 rounded-full ${light ? 'bg-white/30' : 'bg-primary/20'}`}></div>
        </div>
        {description && (
          <p className={`max-w-2xl mx-auto text-lg leading-relaxed ${
            light 
              ? 'text-gray-300' 
              : 'text-gray-600 dark:text-gray-400'
          }`}>
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default SectionHeader;
