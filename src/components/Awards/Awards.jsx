import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiAward, FiX, FiStar, FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaGraduationCap, FaMedal, FaTrophy, FaCertificate } from 'react-icons/fa';
import SectionHeader from '../common/SectionHeader';

const awardsData = [
  {
    id: 1,
    title: 'Gold Medal in Surgery',
    institution: 'Kathmandu Medical College',
    year: '2007',
    description: 'Awarded for outstanding academic performance and excellence in surgical practice during MBBS.',
    type: 'medal'
  },
  {
    id: 2,
    title: 'Best Research Paper Award',
    institution: 'Nepal Medical Association',
    year: '2012',
    description: 'Recognized for groundbreaking research on traumatic brain injuries and emergency neurosurgery protocols in Nepal.',
    type: 'award'
  },
  {
    id: 3,
    title: 'Fellowship in Endovascular Neurosurgery',
    institution: 'AIIMS, New Delhi',
    year: '2014',
    description: 'Completed advanced fellowship training in catheter-based neurovascular procedures.',
    type: 'certificate'
  },
  {
    id: 4,
    title: 'Young Neurosurgeon Award',
    institution: 'South Asian Neuroscience Society',
    year: '2016',
    description: 'Honored for exceptional contributions to neurosurgical innovation in the South Asian region.',
    type: 'trophy'
  },
  {
    id: 5,
    title: 'Excellence in Patient Care',
    institution: 'Nepal Health Ministry',
    year: '2019',
    description: 'Recognized for maintaining a consistently high standard of patient safety and surgical outcomes.',
    type: 'award'
  },
  {
    id: 6,
    title: 'International Speaker',
    institution: 'World Neurosurgery Congress, Bangkok',
    year: '2022',
    description: 'Invited to present research on minimally invasive spine surgery techniques at the international congress.',
    type: 'certificate'
  },
  {
    id: 7,
    title: 'Healthcare Leadership Award',
    institution: 'Kathmandu Brain & Spine Institute',
    year: '2024',
    description: 'Awarded for building and leading one of Nepal\'s most advanced neurosurgery departments.',
    type: 'trophy'
  },
  {
    id: 8,
    title: 'Published Research',
    institution: 'The Lancet Neurology',
    year: '2025',
    description: 'Co-authored a peer-reviewed study on outcomes of endovascular stroke treatment in developing nations.',
    type: 'education'
  },
];

const getIcon = (type) => {
  switch(type) {
    case 'medal': return <FaMedal />;
    case 'award': return <FiAward />;
    case 'certificate': return <FaCertificate />;
    case 'trophy': return <FaTrophy />;
    case 'education': return <FaGraduationCap />;
    default: return <FiAward />;
  }
};

const getColors = (type) => {
  switch(type) {
    case 'medal': return 'from-amber-400 to-orange-500 shadow-amber-500/20 text-amber-500';
    case 'award': return 'from-primary to-emerald-500 shadow-primary/20 text-primary';
    case 'certificate': return 'from-sky-400 to-blue-500 shadow-sky-500/20 text-sky-500';
    case 'trophy': return 'from-purple-400 to-violet-500 shadow-purple-500/20 text-violet-500';
    case 'education': return 'from-rose-400 to-pink-500 shadow-rose-500/20 text-rose-500';
    default: return 'from-primary to-emerald-500 shadow-primary/20 text-primary';
  }
};

const Awards = () => {
  const [selectedAward, setSelectedAward] = useState(null);
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="awards" className="section-padding bg-dark-bg text-white relative overflow-hidden" ref={containerRef}>
      
      {/* Premium dark background effects */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/10 to-transparent blur-3xl"></div>

      <div className="section-container relative z-10">
        
        <SectionHeader
          subtitle="Recognition"
          title="Awards & Achievements"
          description="Recognition earned through years of dedication to medical excellence and patient care."
          light={true}
        />

        {/* Horizontal Scrollable Timeline */}
        <div className="relative mt-20">
          
          {/* Scroll Buttons (Desktop) */}
          <button 
            onClick={() => scroll('left')}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-dark-card/80 backdrop-blur-md rounded-full items-center justify-center text-white shadow-xl hover:bg-primary border border-white/10 transition-colors z-20"
          >
            <FiChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-dark-card/80 backdrop-blur-md rounded-full items-center justify-center text-white shadow-xl hover:bg-primary border border-white/10 transition-colors z-20"
          >
            <FiChevronRight size={24} />
          </button>

          {/* Timeline Line */}
          <div className="absolute top-[4.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>

          {/* Scroll Container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 pb-10 pt-4 px-4 snap-x snap-mandatory no-scrollbar scroll-smooth"
          >
            {awardsData.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[280px] snap-center group cursor-pointer"
                onClick={() => setSelectedAward(award)}
              >
                {/* Timeline Node */}
                <div className="flex flex-col items-center mb-8 relative z-10">
                  <span className="text-sm font-bold text-gray-400 mb-3 tracking-wider">{award.year}</span>
                  <div className={`w-6 h-6 rounded-full bg-dark-bg border-4 border-white/20 group-hover:border-primary transition-colors flex items-center justify-center`}>
                    <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>

                {/* Card */}
                <div className="bg-dark-card/50 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:border-white/20 hover:bg-dark-surface transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-2xl relative overflow-hidden h-[220px] flex flex-col shimmer">
                  {/* Hover gradient glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${getColors(award.type).split(' ')[0]} ${getColors(award.type).split(' ')[1]} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-full`}></div>
                  
                  <div className={`w-12 h-12 rounded-xl bg-dark-bg border border-white/10 flex items-center justify-center text-xl mb-5 shadow-lg ${getColors(award.type).split(' ')[2]}`}>
                    {getIcon(award.type)}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 font-display group-hover:text-primary-300 transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2 mt-auto">{award.institution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedAward && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedAward(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateX: -20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative bg-[#fdfbf7] w-full max-w-lg p-1 sm:p-2 rounded-lg shadow-2xl z-10"
                style={{ perspective: '1000px' }}
              >
                {/* Certificate inner border */}
                <div className="border-[3px] border-double border-gray-300 p-8 sm:p-12 rounded-sm bg-white relative overflow-hidden flex flex-col items-center text-center">
                  
                  {/* Subtle background seal */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] text-gray-50 flex items-center justify-center opacity-50 z-0">
                    <FiAward />
                  </div>

                  <button
                    onClick={() => setSelectedAward(null)}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors z-20"
                  >
                    <FiX />
                  </button>

                  <div className="relative z-10 w-full flex flex-col items-center">
                    <div className="flex items-center justify-center gap-1 text-amber-500 mb-6">
                      <FiStar size={12} /><FiStar size={16} /><FiStar size={20} /><FiStar size={16} /><FiStar size={12} />
                    </div>
                    
                    <span className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-2">Certificate of Achievement</span>
                    
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-6 px-4">
                      {selectedAward.title}
                    </h3>
                    
                    <p className="text-gray-500 italic mb-8 max-w-sm">
                      This is proudly presented to Dr. Anisha Koirala in recognition of her outstanding achievement.
                    </p>
                    
                    <div className="w-full flex justify-between items-end mt-4 pt-8 border-t border-gray-200">
                      <div className="text-left">
                        <p className="font-bold text-gray-900">{selectedAward.year}</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Year Awarded</p>
                      </div>
                      
                      {/* Seal */}
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${getColors(selectedAward.type).split(' ').slice(0,2).join(' ')} flex items-center justify-center text-white text-2xl shadow-lg border-4 border-white`}>
                        {getIcon(selectedAward.type)}
                      </div>
                      
                      <div className="text-right max-w-[120px]">
                        <p className="font-bold text-gray-900 text-sm truncate" title={selectedAward.institution}>{selectedAward.institution}</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Institution</p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Awards;
