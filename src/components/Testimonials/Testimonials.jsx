import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import SectionHeader from '../common/SectionHeader';

const testimonialsData = [
  {
    id: 1,
    name: 'Sita Sharma',
    role: 'Spine Surgery Patient',
    text: 'Dr. Koirala gave me my life back. After suffering from chronic back pain for years, her accurate diagnosis and flawless surgery completely cured me. The hospital staff was incredibly supportive throughout my recovery journey.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: 2,
    name: 'Rajesh Shrestha',
    role: 'Patient Family Member',
    text: 'When my father was diagnosed with a brain tumor, we were terrified. Dr. Koirala explained the procedure with such clarity and compassion that we instantly felt at ease. The surgery was a complete success.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: 3,
    name: 'Anita Gurung',
    role: 'Neuro-Oncology Patient',
    text: 'Very professional and knowledgeable. She takes the time to listen to your concerns instead of rushing. Her multidisciplinary approach to my treatment plan gave me confidence and the best possible outcome.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: 4,
    name: 'Bimal Thapa',
    role: 'Endovascular Patient',
    text: 'The minimally invasive procedure performed by Dr. Koirala saved me from a major open surgery. I was discharged within two days and back to work in a week. Her expertise is unmatched in Nepal.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: 5,
    name: 'Maya Devi',
    role: 'Pediatric Patient Parent',
    text: 'Handing your child over for brain surgery is the hardest thing for a parent. Dr. Koirala and her pediatric team were angels. My daughter is now living a normal, healthy life thanks to them.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: 6,
    name: 'Sunil Maharjan',
    role: 'Consultation Patient',
    text: 'I came in for a second opinion regarding my spinal stenosis. The thorough evaluation and conservative treatment plan recommended by Dr. Koirala helped me avoid surgery altogether.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <section id="testimonials" className="section-padding bg-white dark:bg-dark-card border-t border-gray-100 dark:border-gray-800 relative overflow-hidden">
      
      {/* Decorative quotes */}
      <div className="absolute top-20 left-10 text-[200px] text-gray-50 dark:text-dark-bg font-serif leading-none select-none -z-0">"</div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          subtitle="Patient Stories"
          title="What Our Patients Say"
          description="Read about the experiences of our patients and their journey to recovery with Himalayan Neuro Care."
        />

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Card */}
          <div className="glass-card rounded-3xl p-8 md:p-14 shadow-xl border border-gray-100 dark:border-gray-800 relative min-h-[400px] md:min-h-[350px] flex items-center">
            
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="w-full"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -10000) {
                    nextTestimonial();
                  } else if (swipe > 10000) {
                    prevTestimonial();
                  }
                }}
              >
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
                  
                  {/* Avatar */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white dark:border-dark-surface shadow-xl">
                      <img 
                        src={testimonialsData[currentIndex].image} 
                        alt={testimonialsData[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-xl shadow-lg border-2 border-white dark:border-dark-surface font-serif">
                      "
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow text-center md:text-left">
                    <div className="flex justify-center md:justify-start gap-1 text-yellow-400 mb-4">
                      {[...Array(testimonialsData[currentIndex].rating)].map((_, i) => (
                        <motion.span 
                          key={i} 
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="text-xl"
                        >
                          <FaStar />
                        </motion.span>
                      ))}
                    </div>
                    
                    <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                      "{testimonialsData[currentIndex].text}"
                    </p>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-lg font-display">
                        {testimonialsData[currentIndex].name}
                      </h4>
                      <p className="text-sm font-medium text-primary dark:text-accent">
                        {testimonialsData[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white dark:bg-dark-surface rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent hover:scale-110 transition-all border border-gray-100 dark:border-gray-700"
            >
              <FiChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white dark:bg-dark-surface rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent hover:scale-110 transition-all border border-gray-100 dark:border-gray-700"
            >
              <FiChevronRight size={24} />
            </button>
          </div>

          {/* Indicators & Auto-slide progress */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex justify-center gap-3">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex 
                      ? 'w-10 bg-gradient-to-r from-primary to-accent shadow-md shadow-primary/30' 
                      : 'w-2.5 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            
            {/* Auto-play progress bar */}
            {!isHovered && (
              <div className="w-48 h-1 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                  key={currentIndex}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="h-full bg-primary/40"
                />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
