import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiClock, FiUsers, FiActivity, FiTrendingUp } from 'react-icons/fi';

const Counter = ({ from = 0, to, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      // Ease-out-expo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * (to - from) + from));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const statsData = [
  { 
    label: 'Years Experience', 
    value: 14, 
    suffix: '+', 
    icon: <FiClock />,
    color: 'from-primary to-emerald-400',
    description: 'Of dedicated service'
  },
  { 
    label: 'Patients Treated', 
    value: 5000, 
    suffix: '+', 
    icon: <FiUsers />,
    color: 'from-accent to-sky-400',
    description: 'Lives transformed'
  },
  { 
    label: 'Surgeries Completed', 
    value: 1200, 
    suffix: '+', 
    icon: <FiActivity />,
    color: 'from-violet-500 to-purple-500',
    description: 'Successful procedures'
  },
  { 
    label: 'Success Rate', 
    value: 98, 
    suffix: '%', 
    icon: <FiTrendingUp />,
    color: 'from-amber-400 to-orange-500',
    description: 'Patient outcomes'
  },
];

const Stats = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative py-20 bg-white dark:bg-dark-card overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]"
        style={{
          backgroundImage: 'radial-gradient(circle, #059669 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />

      <div ref={containerRef} className="section-container relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
              className="relative group"
            >
              <div className="glass-card rounded-2xl p-6 md:p-8 text-center card-hover gradient-border">
                {/* Icon */}
                <div className={`w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>

                {/* Counter */}
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1.5 font-display">
                  <Counter to={stat.value} suffix={stat.suffix} duration={2.5} />
                </div>

                {/* Label */}
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
