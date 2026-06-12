import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiClock, FiCheck, FiCalendar, FiUser, FiChevronRight, FiChevronLeft, FiArrowRight } from 'react-icons/fi';
import SectionHeader from '../common/SectionHeader';

const departments = [
  'Brain Surgery Consultation',
  'Spine Surgery Consultation',
  'Pediatric Neurosurgery',
  'Neuro-Oncology',
  'Second Opinion',
  'General Checkup'
];

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
];

// Helper to get days in month and first day of month
const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Appointment = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '',
    department: '',
    date: null, // Date object
    time: ''
  });

  // Calendar state
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateSelect = (day) => {
    const selectedDate = new Date(currentYear, currentMonth, day);
    // Don't allow past dates
    if (selectedDate < new Date().setHours(0,0,0,0)) return;
    setFormData({ ...formData, date: selectedDate });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    // Basic validation per step
    if (step === 1 && (!formData.name || !formData.email || !formData.phone)) return;
    if (step === 2 && !formData.department) return;
    if (step === 3 && (!formData.date || !formData.time)) return;
    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setStep(1);
      setFormData({ name: '', email: '', phone: '', department: '', date: null, time: '' });
    }, 5000);
  };

  const isPastDate = (day) => {
    const date = new Date(currentYear, currentMonth, day);
    return date < new Date().setHours(0, 0, 0, 0);
  };

  const isSelectedDate = (day) => {
    if (!formData.date) return false;
    return formData.date.getDate() === day &&
           formData.date.getMonth() === currentMonth &&
           formData.date.getFullYear() === currentYear;
  };

  return (
    <section id="appointment" className="section-padding bg-gray-50 dark:bg-dark-bg relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-full blur-3xl -z-0" />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-0 bg-white dark:bg-dark-card rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
          
          {/* Left Info Panel */}
          <div className="w-full lg:w-2/5 bg-gradient-to-br from-primary to-primary-dark p-10 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Book a Consultation</h2>
              <p className="text-primary-100 mb-10 text-lg leading-relaxed">
                Take the first step towards better neurological health. Schedule an appointment with our specialist team.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <FiMapPin className="text-2xl text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Clinic Location</h4>
                    <p className="text-primary-100 leading-relaxed">Kathmandu Brain & Spine Institute,<br />Chakrapath, Nepal</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <FiClock className="text-2xl text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                    <p className="text-primary-100">Mon - Fri: 9:00 AM - 5:00 PM</p>
                    <p className="text-primary-100">Sat: 10:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial preview */}
            <div className="relative z-10 mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex text-yellow-400 mb-3 text-sm">★★★★★</div>
              <p className="text-white/90 italic text-sm leading-relaxed mb-4">
                "Dr. Koirala and her team provided exceptional care. Booking an appointment was seamless and the consultation was very thorough."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">R</div>
                <span className="text-sm font-semibold text-white">Rahul S.</span>
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="w-full lg:w-3/5 p-8 lg:p-12 relative min-h-[600px] flex flex-col">
            
            {/* Progress Steps */}
            {!isSubmitted && (
              <div className="flex items-center justify-between mb-10 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-100 dark:bg-gray-800 rounded-full z-0"></div>
                <div 
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full z-0 transition-all duration-500"
                  style={{ width: `${((step - 1) / 3) * 100}%` }}
                ></div>
                
                {[1, 2, 3, 4].map((num) => (
                  <div 
                    key={num} 
                    className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                      step >= num 
                        ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                        : 'bg-white dark:bg-dark-card border-2 border-gray-200 dark:border-gray-700 text-gray-400'
                    }`}
                  >
                    {step > num ? <FiCheck /> : num}
                  </div>
                ))}
              </div>
            )}

            <div className="flex-grow flex flex-col justify-center">
              <AnimatePresence mode="wait">
                
                {/* Success Message */}
                {isSubmitted && (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-10 h-full"
                  >
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                      <div className="w-24 h-24 bg-gradient-to-br from-primary to-emerald-400 text-white rounded-full flex items-center justify-center text-5xl shadow-xl shadow-primary/30 relative z-10">
                        <FiCheck />
                      </div>
                    </div>
                    <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">Request Confirmed!</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md mx-auto">
                      Thank you, <span className="font-semibold text-gray-900 dark:text-white">{formData.name}</span>. We've received your appointment request and our team will contact you shortly to confirm the details.
                    </p>
                  </motion.div>
                )}

                {/* Step 1: Personal Details */}
                {!isSubmitted && step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Personal Details</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-6">Please provide your contact information.</p>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input 
                            type="text" name="name" required value={formData.name} onChange={handleChange}
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-surface text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address <span className="text-red-500">*</span></label>
                          <input 
                            type="email" name="email" required value={formData.email} onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-surface text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number <span className="text-red-500">*</span></label>
                          <input 
                            type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-surface text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Service Selection */}
                {!isSubmitted && step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Select Service</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-6">What is the reason for your visit?</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {departments.map((dept) => (
                        <div 
                          key={dept}
                          onClick={() => setFormData({ ...formData, department: dept })}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                            formData.department === dept 
                              ? 'border-primary bg-primary/5 dark:bg-primary/10' 
                              : 'border-gray-100 dark:border-gray-800 bg-white dark:bg-dark-card hover:border-primary/30'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className={`font-medium ${formData.department === dept ? 'text-primary dark:text-accent' : 'text-gray-700 dark:text-gray-300'}`}>
                              {dept}
                            </span>
                            {formData.department === dept && <FiCheck className="text-primary text-xl" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Date & Time */}
                {!isSubmitted && step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Schedule</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-6">Choose your preferred date and time.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Custom Calendar */}
                      <div>
                        <div className="flex items-center justify-between mb-4 px-2">
                          <button onClick={prevMonth} className="p-2 hover:bg-gray-100 dark:hover:bg-dark-surface rounded-full transition-colors"><FiChevronLeft /></button>
                          <span className="font-bold text-gray-900 dark:text-white">{monthNames[currentMonth]} {currentYear}</span>
                          <button onClick={nextMonth} className="p-2 hover:bg-gray-100 dark:hover:bg-dark-surface rounded-full transition-colors"><FiChevronRight /></button>
                        </div>
                        
                        <div className="grid grid-cols-7 gap-1 mb-2 text-center text-xs font-semibold text-gray-400">
                          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <div key={d}>{d}</div>)}
                        </div>
                        
                        <div className="grid grid-cols-7 gap-1">
                          {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}
                          {Array.from({ length: daysInMonth }).map((_, i) => {
                            const day = i + 1;
                            const isPast = isPastDate(day);
                            const isSelected = isSelectedDate(day);
                            return (
                              <button
                                key={day}
                                disabled={isPast}
                                onClick={() => handleDateSelect(day)}
                                className={`h-10 w-full flex items-center justify-center rounded-lg text-sm transition-all ${
                                  isSelected 
                                    ? 'bg-primary text-white shadow-md' 
                                    : isPast 
                                      ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed' 
                                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-surface'
                                }`}
                              >
                                {day}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Time Slots */}
                      <div>
                        <div className="mb-4 px-2 flex items-center gap-2">
                          <FiClock className="text-primary" />
                          <span className="font-bold text-gray-900 dark:text-white">Available Times</span>
                        </div>
                        {formData.date ? (
                          <div className="grid grid-cols-2 gap-3">
                            {timeSlots.map(time => (
                              <button
                                key={time}
                                onClick={() => setFormData({ ...formData, time })}
                                className={`py-2.5 rounded-lg text-sm font-medium transition-all ${
                                  formData.time === time
                                    ? 'bg-primary text-white shadow-md'
                                    : 'bg-gray-50 dark:bg-dark-surface text-gray-700 dark:text-gray-300 hover:border-primary/50 border border-transparent dark:border-gray-700'
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        ) : (
                          <div className="h-full flex flex-col items-center justify-center text-gray-400 bg-gray-50 dark:bg-dark-surface rounded-xl p-6 text-center border border-dashed border-gray-200 dark:border-gray-700">
                            <FiCalendar className="text-3xl mb-3 opacity-50" />
                            <p className="text-sm">Select a date first to see available time slots.</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Summary */}
                {!isSubmitted && step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Confirm Details</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-6">Review your appointment request before submitting.</p>
                    </div>

                    <div className="bg-gray-50 dark:bg-dark-surface rounded-2xl p-6 border border-gray-100 dark:border-gray-800 space-y-4">
                      <div className="flex items-center gap-4 border-b border-gray-200 dark:border-gray-700 pb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                          <FiUser className="text-xl" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Patient Name</p>
                          <p className="font-bold text-gray-900 dark:text-white">{formData.name}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 border-b border-gray-200 dark:border-gray-700 pb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                          <FiCheck className="text-xl" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Service</p>
                          <p className="font-bold text-gray-900 dark:text-white">{formData.department}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                          <FiCalendar className="text-xl" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Date & Time</p>
                          <p className="font-bold text-gray-900 dark:text-white">
                            {formData.date?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {formData.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            {!isSubmitted && (
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100 dark:border-gray-800">
                {step > 1 ? (
                  <button 
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-2.5 rounded-xl font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors flex items-center gap-2"
                  >
                    <FiChevronLeft /> Back
                  </button>
                ) : <div></div>}

                {step < 4 ? (
                  <button 
                    onClick={handleNextStep}
                    disabled={
                      (step === 1 && (!formData.name || !formData.email || !formData.phone)) ||
                      (step === 2 && !formData.department) ||
                      (step === 3 && (!formData.date || !formData.time))
                    }
                    className="btn-primary !px-8 !py-3 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next Step <FiArrowRight />
                  </button>
                ) : (
                  <button 
                    onClick={handleSubmit}
                    className="btn-primary !px-8 !py-3 flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500"
                  >
                    Submit Request <FiCheck />
                  </button>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Appointment;
