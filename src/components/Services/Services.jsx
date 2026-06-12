import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBrain, FaBone, FaMicroscope, FaChild, FaStethoscope, FaClipboardList } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import SectionHeader from '../common/SectionHeader';

const servicesData = [
  {
    id: 1,
    title: 'Brain Surgery',
    category: 'Surgery',
    description: 'Advanced surgical treatments for brain tumors, aneurysms, and neurological disorders.',
    details: 'Our neurosurgical team utilizes state-of-the-art technology to perform complex brain surgeries. We treat a wide range of conditions including gliomas, meningiomas, pituitary tumors, and vascular malformations with precision and care.',
    icon: <FaBrain />,
    gradient: 'from-primary to-emerald-400',
  },
  {
    id: 2,
    title: 'Spine Surgery',
    category: 'Surgery',
    description: 'Minimally invasive and complex spine surgeries for herniated discs and spinal stenosis.',
    details: 'We offer comprehensive spine care ranging from minimally invasive microdiscectomy to complex spinal fusions. Our goal is to relieve pain, restore function, and improve your quality of life safely and effectively.',
    icon: <FaBone />,
    gradient: 'from-accent to-sky-400',
  },
  {
    id: 3,
    title: 'Neuro-Oncology',
    category: 'Specialized',
    description: 'Comprehensive care for malignant and benign tumors of the brain and spinal cord.',
    details: 'Working closely with oncologists, we provide a multidisciplinary approach to treating tumors of the nervous system. We offer surgical resection, biopsy, and coordinate subsequent radiation or chemotherapy treatments.',
    icon: <FaMicroscope />,
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    id: 4,
    title: 'Pediatric Neurosurgery',
    category: 'Specialized',
    description: 'Specialized neurological care for infants, children, and adolescents.',
    details: 'Children require specialized care. We treat pediatric conditions such as hydrocephalus, spina bifida, craniosynostosis, and pediatric brain tumors in a child-friendly, compassionate environment.',
    icon: <FaChild />,
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    id: 5,
    title: 'Endovascular Neurosurgery',
    category: 'Surgery',
    description: 'Minimally invasive treatments for vascular diseases of the central nervous system.',
    details: 'Using catheters and advanced imaging, we treat aneurysms, stroke, and vascular malformations from within the blood vessels, often avoiding the need for open surgery and allowing for faster recovery.',
    icon: <FaStethoscope />,
    gradient: 'from-rose-400 to-pink-500',
  },
  {
    id: 6,
    title: 'Consultation & Diagnostics',
    category: 'Consultation',
    description: 'Thorough neurological evaluations and advanced diagnostic imaging interpretations.',
    details: 'A proper treatment plan starts with an accurate diagnosis. We provide thorough neurological exams, review MRI/CT scans, and offer second opinions to ensure you understand your condition and treatment options.',
    icon: <FaClipboardList />,
    gradient: 'from-teal-400 to-cyan-500',
  }
];

const categories = ['All', 'Surgery', 'Specialized', 'Consultation'];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices = activeCategory === 'All'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-dark-bg relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl -z-0" />

      <div className="section-container relative z-10">
        <SectionHeader
          subtitle="What We Offer"
          title="Treatments & Services"
          description="Providing comprehensive, state-of-the-art neurosurgical care tailored to your specific needs."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-primary to-primary-light text-white shadow-lg shadow-primary/25'
                  : 'bg-white dark:bg-dark-card text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-primary/50 hover:text-primary dark:hover:text-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group bg-white dark:bg-dark-card rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 card-hover cursor-pointer relative overflow-hidden"
                onClick={() => setSelectedService(service)}
              >
                {/* Hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />
                
                <div className={`text-3xl mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-10 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-display">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary dark:text-accent font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  Learn More <span className="text-lg">→</span>
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Service Details Modal */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative bg-white dark:bg-dark-card w-full max-w-lg rounded-3xl p-8 md:p-10 shadow-2xl z-10 border border-gray-100 dark:border-gray-800"
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-dark-surface text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <FiX size={18} />
                </button>

                <div className={`text-4xl mb-5 w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedService.gradient} flex items-center justify-center text-white shadow-lg`}>
                  {selectedService.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-display">
                  {selectedService.title}
                </h3>
                <div className="flex items-center gap-2 mb-5">
                  <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${selectedService.gradient}`} />
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  {selectedService.details}
                </p>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full btn-primary !rounded-xl"
                >
                  Book Consultation for this Service
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
