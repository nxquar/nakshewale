
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ProjectsSection } from '../components/ProjectsSection';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { ArchitecturalElements } from '../components/ArchitecturalElements';
import { AppointmentCard } from '../components/AppointmentCard';

const Projects = () => {
  const [animationReady, setAnimationReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimationReady(true);
    }, 300);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed inset-0 pointer-events-none z-0">
        <ArchitecturalElements variant="light" density="medium" />
      </div>
      <Navbar />
      <main className="relative z-10 flex-1">
        {/* Hero section with banner image */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80" 
                alt="Architectural projects" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
            </div>
          </div>
          
          <div className="relative z-10 pt-40 pb-20 px-6 md:px-10 max-w-7xl mx-auto text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6">
                Our Projects
              </h1>
              <p className="text-xl text-white/80 max-w-2xl">
                Explore our portfolio of architectural excellence. Each project demonstrates our 
                commitment to innovative design, sustainable practices, and client satisfaction.
              </p>
            </motion.div>
          </div>
        </section>
        
        <ProjectsSection />
        
        <section className="py-16 bg-orange-50">
          <div className="max-w-5xl mx-auto px-6">
            <AppointmentCard />
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Projects;
