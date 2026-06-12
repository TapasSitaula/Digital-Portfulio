import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiAlertCircle, FiSend, FiTwitter, FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi';
import SectionHeader from '../common/SectionHeader';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-dark-bg relative overflow-hidden">
      
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/5 via-accent/5 to-transparent rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent/5 via-primary/5 to-transparent rounded-full blur-3xl -z-0"></div>

      <div className="section-container relative z-10">

        <SectionHeader
          subtitle="Get in Touch"
          title="Contact & Location"
          description="Reach out to us for appointments, inquiries, or emergencies. We are here to help you on your health journey."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">

          {/* Contact Info Panel (Left) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Standard Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-dark-card rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/20 dark:shadow-black/20"
            >
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5 group cursor-default">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/5 text-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">Our Location</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">Kathmandu Brain & Spine Institute,<br/>Chakrapath, Kathmandu 44600, Nepal</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group cursor-default">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/5 text-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">Phone</h4>
                    <a href="tel:+97714000000" className="block text-gray-500 dark:text-gray-400 text-sm hover:text-primary transition-colors">+977 1-4000000</a>
                    <a href="tel:+9779800000000" className="block text-gray-500 dark:text-gray-400 text-sm hover:text-primary transition-colors">+977 9800000000</a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group cursor-default">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/5 text-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                    <FiClock className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">Clinic Schedule</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Mon - Fri: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Saturday: 10:00 AM - 1:00 PM</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm text-red-500/80">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-800 flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-dark-surface flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#1DA1F2] transition-colors" aria-label="Twitter"><FiTwitter size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-dark-surface flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#4267B2] transition-colors" aria-label="Facebook"><FiFacebook size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-dark-surface flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#0077b5] transition-colors" aria-label="LinkedIn"><FiLinkedin size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-dark-surface flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#E1306C] transition-colors" aria-label="Instagram"><FiInstagram size={18} /></a>
              </div>
            </motion.div>

            {/* Emergency Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-red-50 dark:bg-red-900/10 rounded-3xl p-8 border border-red-100 dark:border-red-900/30 shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="flex items-center gap-5 relative z-10">
                <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 text-red-500 rounded-full flex items-center justify-center flex-shrink-0 pulse-ring">
                  <FiAlertCircle className="text-2xl relative z-10" />
                </div>
                <div>
                  <h4 className="font-bold text-red-700 dark:text-red-400 mb-1">24/7 Emergency Line</h4>
                  <a href="tel:+9779800000001" className="text-red-600 dark:text-red-300 text-lg font-bold hover:underline">+977 9800000001</a>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Contact Form (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-white dark:bg-dark-card rounded-3xl p-8 lg:p-12 border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/20 dark:shadow-black/20"
          >
            <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-2">Send a Message</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8">We usually respond within 24 hours.</p>
            
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center text-center py-20 min-h-[400px]"
                >
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-emerald-400 text-white rounded-full flex items-center justify-center text-3xl shadow-xl shadow-primary/30 relative z-10">
                      <FiSend />
                    </div>
                  </div>
                  <h4 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto">Thank you for reaching out. A member of our team will get back to you shortly at {formData.email}.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Floating Label Input - Name */}
                    <div className="relative">
                      <input 
                        type="text" id="name" name="name" required 
                        value={formData.name} onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-surface text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                        placeholder=" "
                      />
                      <label htmlFor="name" className={`absolute left-4 transition-all duration-200 pointer-events-none ${focusedField === 'name' || formData.name ? 'top-2 text-xs text-primary' : 'top-4 text-sm text-gray-500 dark:text-gray-400'}`}>
                        Full Name
                      </label>
                    </div>

                    {/* Floating Label Input - Email */}
                    <div className="relative">
                      <input 
                        type="email" id="email" name="email" required 
                        value={formData.email} onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-surface text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                        placeholder=" "
                      />
                      <label htmlFor="email" className={`absolute left-4 transition-all duration-200 pointer-events-none ${focusedField === 'email' || formData.email ? 'top-2 text-xs text-primary' : 'top-4 text-sm text-gray-500 dark:text-gray-400'}`}>
                        Email Address
                      </label>
                    </div>
                  </div>

                  {/* Floating Label Input - Subject */}
                  <div className="relative">
                    <input 
                      type="text" id="subject" name="subject" required 
                      value={formData.subject} onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-surface text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                      placeholder=" "
                    />
                    <label htmlFor="subject" className={`absolute left-4 transition-all duration-200 pointer-events-none ${focusedField === 'subject' || formData.subject ? 'top-2 text-xs text-primary' : 'top-4 text-sm text-gray-500 dark:text-gray-400'}`}>
                      Subject
                    </label>
                  </div>

                  {/* Floating Label Input - Message */}
                  <div className="relative">
                    <textarea 
                      id="message" name="message" required rows="5" 
                      value={formData.message} onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-surface text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none custom-scrollbar" 
                      placeholder=" "
                    ></textarea>
                    <label htmlFor="message" className={`absolute left-4 transition-all duration-200 pointer-events-none ${focusedField === 'message' || formData.message ? 'top-2 text-xs text-primary' : 'top-4 text-sm text-gray-500 dark:text-gray-400'}`}>
                      Your Message
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Send Message <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }} 
          className="bg-white dark:bg-dark-card rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/20 dark:shadow-black/20 h-[400px] relative group"
        >
          {/* Overlay to disable scroll zooming until clicked (better UX) */}
          <div className="absolute inset-0 bg-transparent z-10" onMouseDown={(e) => e.target.style.pointerEvents = 'none'}></div>
          <iframe
            title="Kathmandu Brain and Spine Institute Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31625953296!2d85.29111!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
