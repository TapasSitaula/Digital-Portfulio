import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiLinkedin, FiMail } from 'react-icons/fi';
import SectionHeader from '../common/SectionHeader';

const teamData = [
  {
    id: 1,
    name: 'Dr. Anisha Koirala',
    role: 'Lead Consultant Neurosurgeon',
    specialty: 'Brain & Spine Surgery',
    qualifications: 'MBBS, MS (Neurosurgery), Fellowship (AIIMS)',
    bio: 'With over 14 years of experience in neurosurgery, Dr. Koirala leads the team at Himalayan Neuro Care Center. She specializes in complex brain and spine surgeries and has performed over 1,200 successful procedures.',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=600&h=750',
  },
  {
    id: 2,
    name: 'Dr. Rajesh Basnet',
    role: 'Senior Neurologist',
    specialty: 'Stroke & Epilepsy Management',
    qualifications: 'MBBS, MD (Neurology)',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600&h=750',
  },
  {
    id: 3,
    name: 'Dr. Sushila Karki',
    role: 'Neuro-Oncologist',
    specialty: 'Brain Tumor Treatment',
    qualifications: 'MBBS, DM (Neuro-Oncology)',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600&h=750',
  },
  {
    id: 4,
    name: 'Dr. Bikash Pradhan',
    role: 'Orthopedic Spine Surgeon',
    specialty: 'Spinal Deformity Correction',
    qualifications: 'MBBS, MS (Ortho), Fellowship (Spine)',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600&h=750',
  },
  {
    id: 5,
    name: 'Dr. Manisha Acharya',
    role: 'Pediatric Neurosurgeon',
    specialty: 'Child Brain & Spine Disorders',
    qualifications: 'MBBS, MCh (Pediatric Neurosurgery)',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600&h=750',
  },
  {
    id: 6,
    name: 'Dr. Sunil Lama',
    role: 'Endovascular Neurosurgeon',
    specialty: 'Aneurysm & Stroke Intervention',
    qualifications: 'MBBS, MS, DM (Interventional Neuro)',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600&h=750',
  },
  {
    id: 7,
    name: 'Dr. Pratima Gurung',
    role: 'Rehabilitation Specialist',
    specialty: 'Neuro-Rehabilitation & Recovery',
    qualifications: 'MBBS, MD (PMR)',
    image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=600&h=750',
  },
  {
    id: 8,
    name: 'Dr. Dipendra Maharjan',
    role: 'Neuro-Anesthesiologist',
    specialty: 'Surgical Anesthesia & Pain',
    qualifications: 'MBBS, MD (Anesthesiology)',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=600&h=750',
  },
  {
    id: 9,
    name: 'Dr. Kamala Thapa',
    role: 'Clinical Neuropsychologist',
    specialty: 'Cognitive & Behavioral Neurology',
    qualifications: 'PhD (Clinical Neuropsychology)',
    image: 'https://images.unsplash.com/photo-1590611936760-eeb9bc598548?auto=format&fit=crop&q=80&w=600&h=750',
  },
];

const Team = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="team" className="section-padding bg-gray-50 dark:bg-dark-bg relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-0" />

      <div className="section-container relative z-10" ref={containerRef}>
        <SectionHeader
          subtitle="Our Experts"
          title="Meet Our Specialist Team"
          description="A dedicated team of experienced professionals committed to delivering world-class neurological care in Nepal."
        />

        {/* Lead Doctor - Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-14 bg-white dark:bg-dark-card rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row group"
        >
          <div className="md:w-2/5 overflow-hidden">
            <img
              src={teamData[0].image}
              alt={teamData[0].name}
              className="w-full h-full object-cover min-h-[350px] md:min-h-[450px] group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary dark:text-accent mb-3">
              Department Head
            </span>
            <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
              {teamData[0].name}
            </h3>
            <p className="text-primary dark:text-accent font-semibold mb-1">{teamData[0].role}</p>
            <p className="text-gray-400 text-sm mb-5">{teamData[0].qualifications}</p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {teamData[0].bio}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#appointment"
                className="btn-primary text-sm !px-6"
              >
                Book Consultation
              </a>
              <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-surface flex items-center justify-center text-gray-500 hover:text-primary hover:bg-primary/10 transition-colors">
                <FiLinkedin size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-surface flex items-center justify-center text-gray-500 hover:text-primary hover:bg-primary/10 transition-colors">
                <FiMail size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.slice(1).map((doctor, idx) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.08, ease: 'easeOut' }}
              className="group bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 card-hover"
            >
              <div className="aspect-[4/5] overflow-hidden bg-gray-200 dark:bg-dark-surface relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.name)}&background=059669&color=fff&size=400&font-size=0.33`;
                  }}
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white/90 text-sm mb-3">{doctor.specialty}</p>
                    <div className="flex gap-2">
                      <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors">
                        <FiLinkedin size={14} />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors">
                        <FiMail size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-0.5">
                  {doctor.name}
                </h3>
                <p className="text-primary dark:text-accent font-medium text-sm mb-0.5">
                  {doctor.role}
                </p>
                <p className="text-gray-400 text-xs">
                  {doctor.qualifications}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
