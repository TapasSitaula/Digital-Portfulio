import React from 'react';
import Navbar from '../components/common/Navbar';
import Hero from '../components/Hero/Hero';
import Stats from '../components/Stats/Stats';
import Services from '../components/Services/Services';
import Timeline from '../components/Timeline/Timeline';
import Team from '../components/Team/Team';
import Appointment from '../components/Appointment/Appointment';
import Testimonials from '../components/Testimonials/Testimonials';
import Articles from '../components/Articles/Articles';
import Awards from '../components/Awards/Awards';
import FAQ from '../components/FAQ/FAQ';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import ScrollProgress from '../components/common/ScrollProgress';

const Home = () => {
  return (
    <div className="relative overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Timeline />
        <Team />
        <Appointment />
        <Testimonials />
        <Articles />
        <Awards />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
