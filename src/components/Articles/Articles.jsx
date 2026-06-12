import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiCalendar, FiArrowRight, FiX, FiClock, FiShare2, FiTwitter, FiFacebook, FiLinkedin } from 'react-icons/fi';
import SectionHeader from '../common/SectionHeader';

const articlesData = [
  {
    id: 1,
    title: 'Understanding Brain Tumors: What Every Patient Should Know',
    excerpt: 'A comprehensive guide to types, symptoms, and modern treatment approaches for brain tumors available in Nepal.',
    content: 'Brain tumors can be benign or malignant, and early detection is key to successful treatment. Common symptoms include persistent headaches, vision changes, seizures, and difficulty with balance.\n\nAt Himalayan Neuro Care, we use advanced MRI and CT imaging to accurately diagnose brain tumors. Treatment options include surgical resection, radiation therapy, and chemotherapy, often used in combination for the best outcomes.\n\nOur neurosurgical team has extensive experience in both open and minimally invasive techniques, ensuring the safest possible approach for each patient. We believe in a multidisciplinary approach, working closely with neuro-oncologists to provide comprehensive care.',
    category: 'Brain Health',
    date: 'May 15, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    featured: true,
  },
  {
    id: 2,
    title: 'Minimally Invasive Spine Surgery: A Patient Guide',
    excerpt: 'How modern techniques are reducing recovery times and improving outcomes for spine surgery patients.',
    content: 'Minimally invasive spine surgery (MISS) uses smaller incisions than traditional open surgery. This approach results in less damage to surrounding muscles and tissues, leading to shorter hospital stays, less postoperative pain, and faster return to daily activities.\n\nCommon procedures include microdiscectomy for herniated discs, laminectomy for spinal stenosis, and spinal fusion using tubular retractors. At our center, we evaluate each patient individually to determine whether MISS is the right approach for their condition.',
    category: 'Treatment',
    date: 'Apr 28, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    featured: false,
  },
  {
    id: 3,
    title: '5 Lifestyle Changes That Protect Your Brain Health',
    excerpt: 'Simple, evidence-based habits that can significantly reduce your risk of neurological diseases.',
    content: 'Research shows that lifestyle choices play a significant role in brain health. Here are five evidence-based changes:\n\n1) Regular physical exercise increases blood flow to the brain and promotes new neural connections.\n2) A Mediterranean-style diet rich in fruits, vegetables, and omega-3 fatty acids supports cognitive function.\n3) Quality sleep of 7-8 hours allows the brain to clear toxins.\n4) Mental stimulation through reading, puzzles, and learning new skills builds cognitive reserve.\n5) Social engagement and stress management through meditation or yoga reduce inflammation linked to neurodegeneration.',
    category: 'Lifestyle',
    date: 'Apr 10, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
    featured: false,
  },
  {
    id: 4,
    title: 'Stroke Prevention: Recognizing Early Warning Signs',
    excerpt: 'Time is brain. Learn the FAST method and other critical signs that could save a life.',
    content: 'A stroke occurs when blood supply to part of the brain is interrupted. The FAST method helps identify stroke symptoms: Face drooping, Arm weakness, Speech difficulty, Time to call emergency services.\n\nAdditional warning signs include sudden severe headache, confusion, trouble seeing in one or both eyes, and difficulty walking. Risk factors include high blood pressure, diabetes, smoking, and obesity.\n\nAt Himalayan Neuro Care, our endovascular team is equipped to perform emergency clot retrieval procedures that can dramatically improve outcomes when performed within the critical time window.',
    category: 'Prevention',
    date: 'Mar 22, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    featured: false,
  },
  {
    id: 5,
    title: 'Advancements in Pediatric Neurosurgery in Nepal',
    excerpt: 'How our team is bringing world-class pediatric brain care closer to families across Nepal.',
    content: 'Pediatric neurosurgery in Nepal has made remarkable progress in recent years. Our team now treats conditions that previously required families to travel abroad, including hydrocephalus, craniosynostosis, spina bifida, and pediatric brain tumors.\n\nWe have invested in child-sized surgical instruments and monitoring equipment, and our pediatric ICU is staffed with specially trained nurses. We also work closely with pediatric neurologists and rehabilitation therapists to ensure comprehensive care from diagnosis through recovery.',
    category: 'Innovation',
    date: 'Mar 05, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&q=80&w=800',
    featured: false,
  },
  {
    id: 6,
    title: 'Managing Chronic Back Pain Without Surgery',
    excerpt: 'Conservative treatment options and when to consider surgical intervention for persistent back pain.',
    content: 'Not all back pain requires surgery. In fact, most cases improve with conservative management. Physical therapy is often the first line of treatment, focusing on core strengthening and flexibility.\n\nPain medications, including anti-inflammatories and muscle relaxants, can provide relief during acute episodes. Epidural steroid injections may help reduce inflammation around compressed nerves.\n\nLifestyle modifications such as weight management, ergonomic workplace setup, and regular exercise are equally important. Surgery is typically considered only when conservative treatments fail after 6-12 weeks, or when there are signs of nerve damage such as weakness or loss of bladder control.',
    category: 'Wellness',
    date: 'Feb 18, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1544991875-5dc1b05f607d?auto=format&fit=crop&q=80&w=800',
    featured: false,
  },
];

const categories = ['All', 'Brain Health', 'Treatment', 'Lifestyle', 'Prevention', 'Innovation', 'Wellness'];

const Articles = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filteredArticles = articlesData.filter((article) => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articlesData.find((a) => a.featured);

  return (
    <section id="articles" className="section-padding bg-gray-50 dark:bg-dark-bg relative overflow-hidden">
      <div className="section-container relative z-10">

        <SectionHeader
          subtitle="Insights"
          title="Medical Articles & Insights"
          description="Stay informed with expert articles on brain health, prevention, and the latest in neuroscience."
        />

        {/* Featured Article */}
        {featuredArticle && activeCategory === 'All' && searchTerm === '' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 bg-white dark:bg-dark-card rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row group card-hover cursor-pointer"
            onClick={() => setSelectedArticle(featuredArticle)}
          >
            <div className="md:w-1/2 overflow-hidden relative">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover min-h-[300px] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                Featured
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary dark:text-accent bg-primary/10 dark:bg-accent/10 px-3 py-1 rounded-full">
                  {featuredArticle.category}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                  <FiClock /> {featuredArticle.readTime}
                </span>
              </div>
              <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                {featuredArticle.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
                <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                  <FiCalendar /> {featuredArticle.date}
                </span>
                <span className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Read Article <FiArrowRight />
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 items-center justify-between">
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-primary to-primary-light text-white shadow-md shadow-primary/20'
                    : 'bg-white dark:bg-dark-card text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary/50 hover:text-primary dark:hover:text-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-72 shadow-sm">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-card text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none text-sm transition-all"
              placeholder="Search articles..."
            />
          </div>
        </div>

        {/* Articles Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredArticles.filter(a => !(a.featured && activeCategory === 'All' && searchTerm === '')).map((article, idx) => (
              <motion.div
                key={article.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 group card-hover cursor-pointer flex flex-col"
                onClick={() => setSelectedArticle(article)}
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-accent bg-primary/10 dark:bg-accent/10 px-2.5 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                      <FiClock /> {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                    <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                      <FiCalendar /> {article.date}
                    </span>
                    <span className="text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                      Read More <FiArrowRight className="inline ml-1" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredArticles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white dark:bg-dark-card rounded-3xl border border-dashed border-gray-200 dark:border-gray-700"
          >
            <div className="w-16 h-16 bg-gray-100 dark:bg-dark-surface rounded-full flex items-center justify-center text-gray-400 mx-auto mb-4">
              <FiSearch size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No articles found</h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
              We couldn't find any articles matching your search for "{searchTerm}" in the {activeCategory} category.
            </p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('All');
              }}
              className="mt-6 btn-primary !py-2 !px-6 text-sm"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Article Detail Modal */}
        <AnimatePresence>
          {selectedArticle && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={() => setSelectedArticle(null)}
              />
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative bg-white dark:bg-dark-card w-full max-w-3xl rounded-3xl shadow-2xl z-10 overflow-hidden max-h-[90vh] flex flex-col border border-white/10"
              >
                {/* Modal Header Image */}
                <div className="h-64 sm:h-72 lg:h-80 overflow-hidden relative flex-shrink-0">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Close button inside image area */}
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/60 transition-colors z-20"
                  >
                    <FiX size={20} />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-white bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-full">
                        {selectedArticle.category}
                      </span>
                      <span className="text-xs text-gray-300 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                        <FiClock /> {selectedArticle.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-2 shadow-sm leading-tight">
                      {selectedArticle.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar bg-white dark:bg-dark-card flex-grow">
                  
                  <div className="flex items-center justify-between pb-6 border-b border-gray-100 dark:border-gray-800 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                         <img src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=100&h=100" alt="Author" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">Dr. Anisha Koirala</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400"><FiCalendar className="inline mr-1" />{selectedArticle.date}</p>
                      </div>
                    </div>
                    
                    {/* Share Buttons */}
                    <div className="flex gap-2">
                      <button className="w-8 h-8 rounded-full bg-gray-100 dark:bg-dark-surface flex items-center justify-center text-gray-500 hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 transition-colors" aria-label="Share on Twitter"><FiTwitter size={14} /></button>
                      <button className="w-8 h-8 rounded-full bg-gray-100 dark:bg-dark-surface flex items-center justify-center text-gray-500 hover:text-[#4267B2] hover:bg-[#4267B2]/10 transition-colors" aria-label="Share on Facebook"><FiFacebook size={14} /></button>
                      <button className="w-8 h-8 rounded-full bg-gray-100 dark:bg-dark-surface flex items-center justify-center text-gray-500 hover:text-[#0077b5] hover:bg-[#0077b5]/10 transition-colors" aria-label="Share on LinkedIn"><FiLinkedin size={14} /></button>
                    </div>
                  </div>

                  <div className="prose prose-lg dark:prose-invert max-w-none prose-p:leading-relaxed prose-headings:font-display prose-a:text-primary">
                    {selectedArticle.content.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-gray-700 dark:text-gray-300 mb-5 text-lg">
                        {paragraph}
                      </p>
                    ))}
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

export default Articles;
