import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus, FiSearch, FiMessageCircle, FiInfo, FiActivity, FiShield, FiHeart } from 'react-icons/fi';
import SectionHeader from '../common/SectionHeader';

const faqData = [
  {
    id: 1,
    category: 'General',
    question: 'How do I prepare for my first consultation?',
    answer: 'Please bring your previous medical records, any recent MRI/CT scan reports, a list of your current medications, and your ID. It helps to write down any symptoms and questions you have before the appointment to ensure nothing is missed.'
  },
  {
    id: 2,
    category: 'Insurance',
    question: 'Do you accept health insurance?',
    answer: 'Yes, we are empaneled with most major health insurance providers in Nepal. We also work with international insurance for expatriates. Please contact our front desk prior to your appointment to verify your specific insurance coverage and cashless facility options.'
  },
  {
    id: 3,
    category: 'Recovery',
    question: 'What is the recovery time for spine surgery?',
    answer: 'Recovery time varies greatly depending on the specific procedure and individual patient health. Minimally invasive surgeries often allow for discharge within 1-2 days and return to light work in 2-3 weeks, while complex fusions may require a 4-5 day hospital stay and several months of rehabilitation. Dr. Koirala will discuss your specific recovery timeline during consultation.'
  },
  {
    id: 4,
    category: 'Treatment',
    question: 'Can I get a second opinion on my diagnosis?',
    answer: 'Absolutely. We highly encourage patients to be fully informed about their condition. You can book a specific "Second Opinion" consultation where Dr. Koirala will thoroughly review your scans, previous diagnoses, and symptoms to offer her expert recommendation, even if you decide to have surgery elsewhere.'
  },
  {
    id: 5,
    category: 'Treatment',
    question: 'Are minimally invasive options available for brain tumors?',
    answer: 'Yes, whenever possible. We utilize advanced endoscopic and neuronavigation techniques to remove tumors through smaller openings. This often results in less pain, shorter hospital stays, and faster recovery compared to traditional open craniotomies.'
  },
  {
    id: 6,
    category: 'General',
    question: 'How quickly can I get an appointment?',
    answer: 'For routine consultations, we typically schedule within 3-5 working days. However, we reserve specific slots daily for urgent cases. If you are experiencing sudden, severe neurological symptoms, please contact our emergency line immediately.'
  },
  {
    id: 7,
    category: 'Recovery',
    question: 'Will I need physical therapy after my surgery?',
    answer: 'Most patients benefit from some form of postoperative rehabilitation. For spine surgeries, physical therapy is usually a crucial part of the recovery process to restore strength and flexibility. We have an in-house neuro-rehabilitation team that will work with you before and after your discharge.'
  },
  {
    id: 8,
    category: 'Insurance',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit/debit cards, bank transfers, mobile payment apps (eSewa, Khalti, Fonepay), and cash. For larger surgical packages, we also offer installment payment plans through our partnered financial institutions.'
  }
];

const categories = [
  { name: 'All', icon: <FiMessageCircle /> },
  { name: 'General', icon: <FiInfo /> },
  { name: 'Treatment', icon: <FiActivity /> },
  { name: 'Recovery', icon: <FiHeart /> },
  { name: 'Insurance', icon: <FiShield /> }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(1);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="section-padding bg-gray-50 dark:bg-dark-bg relative overflow-hidden">
      
      {/* Decorative */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-40 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          subtitle="Answers"
          title="Frequently Asked Questions"
          description="Find quick answers to common questions about our services, treatments, and patient care."
        />

        {/* Search and Filter Controls */}
        <div className="mb-10 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-card text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all shadow-sm"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => {
                  setActiveCategory(cat.name);
                  setOpenId(null); // Close accordion on category change
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.name
                    ? 'bg-gradient-to-r from-primary to-primary-light text-white shadow-lg shadow-primary/25'
                    : 'bg-white dark:bg-dark-card text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-primary/50 hover:text-primary dark:hover:text-accent'
                }`}
              >
                <span className={activeCategory === cat.name ? 'text-white' : 'text-primary dark:text-accent'}>
                  {cat.icon}
                </span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 min-h-[400px]">
          <AnimatePresence initial={false}>
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`bg-white dark:bg-dark-card border rounded-2xl overflow-hidden transition-all duration-300 ${
                    openId === faq.id 
                      ? 'border-primary/30 shadow-md ring-1 ring-primary/10' 
                      : 'border-gray-100 dark:border-gray-800 shadow-sm hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none group"
                    onClick={() => toggleAccordion(faq.id)}
                  >
                    <div className="flex items-center gap-4 pr-4">
                      <span className="hidden sm:flex text-xs font-bold text-primary dark:text-accent bg-primary/10 dark:bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap">
                        {faq.category}
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white text-base md:text-lg group-hover:text-primary dark:group-hover:text-accent transition-colors">
                        {faq.question}
                      </span>
                    </div>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openId === faq.id 
                        ? 'bg-primary text-white rotate-180' 
                        : 'bg-gray-100 dark:bg-dark-surface text-gray-500 group-hover:bg-primary/10 group-hover:text-primary'
                    }`}>
                      {openId === faq.id ? <FiMinus /> : <FiPlus />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-2 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-50 dark:border-gray-800/50 mt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 bg-white dark:bg-dark-card rounded-3xl border border-dashed border-gray-200 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-gray-100 dark:bg-dark-surface rounded-full flex items-center justify-center text-gray-400 mx-auto mb-4">
                  <FiSearch size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No results found</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We couldn't find any FAQs matching "{searchQuery}"
                </p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('All');
                  }}
                  className="mt-4 text-primary font-medium hover:underline"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-primary/5 dark:bg-primary/10 border border-primary/20 p-6 md:p-8 rounded-3xl">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-xl">
              <FiMessageCircle />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-gray-900 dark:text-white">Still have questions?</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Can't find the answer you're looking for?</p>
            </div>
            <a href="#contact" className="mt-4 md:mt-0 md:ml-4 btn-primary !py-2.5 !px-6 text-sm whitespace-nowrap">
              Contact Us directly
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
