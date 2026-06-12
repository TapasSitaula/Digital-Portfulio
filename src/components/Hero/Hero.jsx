import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiActivity, FiAward, FiUsers, FiCheckCircle } from 'react-icons/fi';
import { FaPlus, FaStar } from 'react-icons/fa';

const specialties = [
  'Neurosurgeon',
  'Spine Specialist',
  'Brain Tumor Expert',
  'Endovascular Surgeon',
  'Pediatric Neuro Specialist',
];

const floatingStats = [
  { icon: <FiActivity />, label: 'Surgeries', value: '1,200+', color: 'from-primary to-emerald-400' },
  { icon: <FiUsers />, label: 'Patients', value: '5,000+', color: 'from-accent to-sky-400' },
  { icon: <FiCheckCircle />, label: 'Success', value: '98%', color: 'from-amber-400 to-orange-500' },
];

const Hero = () => {
  const [currentSpecialty, setCurrentSpecialty] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpecialty((prev) => (prev + 1) % specialties.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-dark-bg dark:via-dark-bg dark:to-dark-surface -z-20" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-[15%] w-[500px] h-[500px] bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5 rounded-full blur-3xl -z-10 animate-float-slow" />
      <div className="absolute bottom-10 left-[10%] w-[400px] h-[400px] bg-gradient-to-tr from-accent/10 to-primary/5 dark:from-accent/5 dark:to-primary/3 rounded-full blur-3xl -z-10 animate-float-delayed" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.02]" 
        style={{
          backgroundImage: 'radial-gradient(circle, #059669 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} 
      />

      {/* Floating Medical Cross */}
      <div className="absolute top-32 left-[8%] text-primary/10 dark:text-primary/5 text-8xl font-bold animate-float select-none hidden lg:block"><FaPlus /></div>
      <div className="absolute bottom-32 right-[6%] text-accent/10 dark:text-accent/5 text-6xl font-bold animate-float-delayed select-none hidden lg:block"><FaPlus /></div>

      {/* Pulse Lines */}
      <svg className="absolute top-1/3 left-0 w-48 opacity-10 dark:opacity-5 hidden xl:block" viewBox="0 0 200 60" fill="none">
        <path d="M0 30 L40 30 L50 10 L60 50 L70 20 L80 40 L90 30 L200 30" stroke="#059669" strokeWidth="2" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/10 border border-primary/20 text-primary dark:text-primary-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              >
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Expert Neurological Care in Nepal
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-gray-900 dark:text-white leading-[1.1] mb-4">
                Advanced
                <br />
                <span className="gradient-text">Brain & Spine</span>
                <br />
                Care You Trust.
              </h1>

              {/* Animated Specialty */}
              <div className="h-10 mb-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSpecialty}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="flex items-center gap-2 text-lg text-gray-500 dark:text-gray-400"
                  >
                    <FiAward className="text-primary dark:text-accent" />
                    <span>Specialist: </span>
                    <span className="font-semibold text-primary dark:text-accent">
                      {specialties[currentSpecialty]}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed"
              >
                Himalayan Neuro Care Center provides world-class neurosurgical treatments with a compassionate, patient-first approach.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a href="#appointment" className="btn-primary text-base">
                  Book Consultation
                </a>
                <a href="#services" className="btn-secondary text-base">
                  Our Services
                </a>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex items-center gap-6 mt-10 pt-8 border-t border-gray-200/60 dark:border-gray-800"
              >
                <div className="flex -space-x-3">
                  {[
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop',
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop',
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop',
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Patient ${i + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-white dark:border-dark-bg object-cover"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold text-gray-900 dark:text-white">5,000+</span> patients trust us
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Image & Floating Cards */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="relative"
            >
              {/* Glow behind image */}
              <div className="absolute inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl -z-10" />
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                <img
                  src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=1000&h=1200"
                  alt="Dr. Anisha Koirala - Lead Neurosurgeon"
                  className="w-full h-auto object-cover aspect-[4/5] object-top"
                  loading="eager"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                
                {/* Name badge on image */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card-strong rounded-2xl px-5 py-4">
                    <p className="text-gray-900 dark:text-white font-display font-bold text-xl mb-0.5 drop-shadow-sm">Dr. Anisha Koirala</p>
                    <p className="text-primary dark:text-accent text-sm font-medium drop-shadow-sm">Lead Consultant Neurosurgeon</p>
                  </div>
                </div>
              </div>

              {/* Floating Stat Cards */}
              {floatingStats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + idx * 0.15, duration: 0.5, ease: 'easeOut' }}
                  className={`absolute glass-card-strong rounded-2xl px-4 py-3 shadow-xl hidden md:flex items-center gap-3 ${
                    idx === 0 ? '-left-6 top-12' :
                    idx === 1 ? '-left-10 bottom-44' :
                    '-right-6 top-1/3'
                  }`}
                  style={{ animation: `float ${6 + idx}s ease-in-out ${idx * 0.5}s infinite` }}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white text-lg`}>
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{stat.label}</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  </div>
                </motion.div>
              ))}

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="absolute -right-4 bottom-20 glass-card-strong rounded-2xl p-4 shadow-xl hidden md:block"
                style={{ animation: 'float 7s ease-in-out 1s infinite' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white">
                    <FiAward className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Experience</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">14+ Years</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full h-12 text-white dark:text-dark-card" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,20 C240,60 480,0 720,20 C960,40 1200,0 1440,20 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
