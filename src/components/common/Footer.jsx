import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">Himalayan Neuro Care</h3>
            <p className="text-gray-400 mb-6">
              A team of dedicated neurosurgeons providing exceptional brain and spine care in Nepal.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <FiLinkedin />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <FiTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <FiFacebook />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-accent transition-colors">About Me</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-accent transition-colors">Treatments & Services</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-accent transition-colors">Professional Experience</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-accent transition-colors">Patient Stories</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-accent transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Brain Surgery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Spine Surgery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Neuro-Oncology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Pediatric Neurosurgery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Endovascular Neurosurgery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-accent mt-1 flex-shrink-0" />
                <span className="text-gray-400">Kathmandu Brain & Spine Institute, Chakrapath, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-accent flex-shrink-0" />
                <span className="text-gray-400">+977 1-4000000</span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-accent flex-shrink-0" />
                <span className="text-gray-400">info@dranishakoirala.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Himalayan Neuro Care. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
