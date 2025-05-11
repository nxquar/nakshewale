
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { ArchitecturalElements } from '../components/ArchitecturalElements';
import { AppointmentCard } from '../components/AppointmentCard';
import { BlogsGrid } from '../components/BlogsGrid';
import { ConsultationCard } from '@/components/ConsultationCard';

const Blogs = () => {
  const [animationReady, setAnimationReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimationReady(true);
    }, 300);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed inset-0 pointer-events-none z-0">
        <ArchitecturalElements variant="light" density="low" position="top-right" />
      </div>
      <Navbar />
      <main className="relative z-10 flex-1">
        {/* Hero section with banner image */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full">
              <img 
                src="https://images.unsplash.com/photo-1588329546340-4b167563c1cb?auto=format&fit=crop&q=80" 
                alt="Architecture Insights" 
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
                Architecture Insights
              </h1>
              <p className="text-xl text-white/80 max-w-2xl">
                Explore our collection of articles covering architectural trends, sustainable design practices, 
                and insights from our team of experts.
              </p>
            </motion.div>
          </div>
        </section>
        
        <BlogsGrid />
        
        <section className="py-16 bg-orange-50">
          <div className="max-w-5xl mx-auto px-6">
            <AppointmentCard />
          </div>
        </section>
      </main>
 
            <ConsultationCard></ConsultationCard>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Blogs;
