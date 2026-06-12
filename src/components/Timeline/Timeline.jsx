import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiBook, FiAward, FiChevronDown } from 'react-icons/fi';
import SectionHeader from '../common/SectionHeader';

const timelineData = [
  {
    id: 1,
    year: '2018 - Present',
    role: 'Senior Consultant Neurosurgeon',
    institution: 'Kathmandu Brain & Spine Institute',
    description: 'Leading the neurosurgery department, performing over 300 complex surgeries annually, and mentoring resident doctors.',
    details: 'Established the first dedicated neuronavigation-guided surgery program in Nepal. Introduced awake craniotomy techniques for brain tumor resections near eloquent areas. Built a team of 10 subspecialty-trained neurosurgeons.',
    type: 'work',
    side: 'right',
  },
  {
    id: 2,
    year: '2014 - 2018',
    role: 'Consultant Neurosurgeon',
    institution: 'National Hospital, Kathmandu',
    description: 'Specialized in minimally invasive spine surgeries and pediatric neurosurgery. Established the first dedicated neuro-ICU.',
    details: 'Performed over 800 spine surgeries with a complication rate below 2%. Launched the pediatric neurosurgery program serving children from across Nepal. Reduced average ICU stay from 5 days to 3 days through optimized protocols.',
    type: 'work',
    side: 'left',
  },
  {
    id: 3,
    year: '2011 - 2014',
    role: 'Fellowship in Endovascular Neurosurgery',
    institution: 'All India Institute of Medical Sciences (AIIMS)',
    description: 'Advanced training in treating vascular diseases of the brain and spine using catheter-based techniques.',
    details: 'Trained under internationally renowned faculty. Participated in over 200 endovascular procedures including coil embolization of aneurysms and mechanical thrombectomy for acute stroke.',
    type: 'education',
    side: 'right',
  },
  {
    id: 4,
    year: '2008 - 2011',
    role: 'MS in Neurosurgery',
    institution: 'Tribhuvan University Teaching Hospital',
    description: 'Completed surgical residency with top honors. Published research on traumatic brain injuries in Nepal.',
    details: 'Thesis on "Outcomes of Decompressive Craniectomy in Severe TBI" was published in the Nepal Medical Journal. Served as chief resident in the final year. Received the Best Resident Award.',
    type: 'education',
    side: 'left',
  },
  {
    id: 5,
    year: '2002 - 2007',
    role: 'MBBS',
    institution: 'Kathmandu Medical College',
    description: 'Graduated with distinction. Awarded the Gold Medal for academic excellence in surgery.',
    details: 'Ranked first in the university in the final surgery examination. Active member of the Surgical Society. Completed elective rotations in general surgery, orthopedics, and emergency medicine.',
    type: 'award',
    side: 'right',
  }
];

const getIcon = (type) => {
  switch(type) {
    case 'work': return <FiBriefcase />;
    case 'education': return <FiBook />;
    case 'award': return <FiAward />;
    default: return <FiBriefcase />;
  }
};

const getGradient = (type) => {
  switch(type) {
    case 'work': return 'from-primary to-emerald-400';
    case 'education': return 'from-accent to-sky-400';
    case 'award': return 'from-amber-400 to-orange-500';
    default: return 'from-primary to-emerald-400';
  }
};

const TimelineItem = ({ item, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isLeft = item.side === 'left';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
      className={`flex items-start gap-4 md:gap-0 relative mb-12 last:mb-0 ${
        isLeft ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      {/* Content Card */}
      <div className={`w-full md:w-[calc(50%-32px)] ${isLeft ? 'md:text-right' : ''}`}>
        <div
          className="bg-white dark:bg-dark-card p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 card-hover cursor-pointer group"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
            <span className={`inline-block py-1.5 px-4 rounded-full bg-gradient-to-r ${getGradient(item.type)} text-white text-xs font-semibold shadow-sm`}>
              {item.year}
            </span>
            <button 
              className={`text-gray-400 hover:text-primary transition-colors ${isExpanded ? 'rotate-180' : ''} transition-transform duration-300`}
              aria-label={isExpanded ? 'Collapse' : 'Expand'}
            >
              <FiChevronDown size={18} />
            </button>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 font-display">
            {item.role}
          </h3>
          <h4 className="text-sm text-primary dark:text-accent font-medium mb-3">
            {item.institution}
          </h4>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {item.description}
          </p>

          {/* Expandable Details */}
          <motion.div
            initial={false}
            animate={{ 
              height: isExpanded ? 'auto' : 0, 
              opacity: isExpanded ? 1 : 0,
              marginTop: isExpanded ? 16 : 0 
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {item.details}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Center Dot - Hidden on mobile */}
      <div className="hidden md:flex flex-col items-center w-16 flex-shrink-0 relative">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getGradient(item.type)} flex items-center justify-center text-white text-lg shadow-lg z-10`}>
          {getIcon(item.type)}
        </div>
      </div>

      {/* Mobile Dot */}
      <div className="md:hidden absolute left-0 top-2">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${getGradient(item.type)} flex items-center justify-center text-white text-sm shadow-lg`}>
          {getIcon(item.type)}
        </div>
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden md:block w-[calc(50%-32px)]" />
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-dark-card relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-20 left-[5%] w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-20 right-[5%] w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          subtitle="Career Path"
          title="Professional Journey"
          description="A continuous commitment to medical excellence and advanced neurosurgical education."
        />

        {/* Vertical Timeline */}
        <div className="relative pl-14 md:pl-0">
          {/* Timeline Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-amber-400 -translate-x-1/2 rounded-full" />
          
          {/* Timeline Line - Mobile */}
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-amber-400 rounded-full" />

          {timelineData.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
