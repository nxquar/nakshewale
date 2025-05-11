
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { ArchitecturalElements } from '../components/ArchitecturalElements';
import { AppointmentCard } from '../components/AppointmentCard';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Services data
const services = [
  {
    title: 'Architectural Design',
    slug: 'architectural-design',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
    summary: "Comprehensive architectural design services that transform concepts into reality.",
    description: "Our architectural design services encompass the entire process from conceptual development to construction documentation."
  },
  {
    title: 'Interior Architecture',
    slug: 'interior-architecture',
    imageUrl: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80',
    summary: "Creating beautiful, functional interior spaces that elevate the human experience.",
    description: "Our interior architecture services create thoughtfully designed spaces that enhance the user experience."
  },
  {
    title: 'Urban Planning',
    slug: 'urban-planning',
    imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80',
    summary: "Designing sustainable communities and urban environments for future generations.",
    description: "Our urban planning services address the complex challenges of developing cohesive, sustainable communities."
  },
  {
    title: 'Project Management',
    slug: 'project-management',
    imageUrl: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&q=80',
    summary: "Ensuring projects are delivered on time, within budget, and to the highest standards.",
    description: "Our project management services ensure that architectural projects are delivered on time, within budget, and to the highest quality standards."
  }
];

const Services = () => {
  const [animationReady, setAnimationReady] = useState(false);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set animation delay
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
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
                alt="Architectural services" 
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
                Our Services
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mb-8">
                We offer comprehensive architectural solutions tailored to your unique vision and requirements.
                From conceptual design to project completion, we're with you every step of the way.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Services grid */}
        <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                className={`animate-on-scroll ${animationReady ? 'animated' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Link to={`/service/${service.slug}`} className="block group">
                  <div className="border border-orange-100 hover:border-orange-300 transition-all duration-500 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img 
                        src={service.imageUrl} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-medium font-serif mb-4 group-hover:text-orange-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {service.summary}
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start">
                          <CheckCircle size={20} className="mr-2 text-orange-500 flex-shrink-0 mt-1" />
                          <span className="text-sm">Expert planning and design</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={20} className="mr-2 text-orange-500 flex-shrink-0 mt-1" />
                          <span className="text-sm">Customized to your needs</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={20} className="mr-2 text-orange-500 flex-shrink-0 mt-1" />
                          <span className="text-sm">Sustainable solutions</span>
                        </li>
                      </ul>
                      <div className="flex justify-end">
                        <span className="inline-flex items-center font-medium text-orange-500 group-hover:text-orange-600 transition-colors">
                          Learn More 
                          <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
        
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
};

export default Services;
