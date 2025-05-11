
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { ServicesSection } from "../components/ServicesSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { ProjectShowcase } from "../components/ProjectShowcase";
import { ArchitecturalElements } from "../components/ArchitecturalElements";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { BlogSection } from "../components/BlogSection";
import { initScrollAnimations, animateChildren } from "../utils/animation";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { MapComponent } from "../components/MapComponent";
import { ConsultationCard } from "../components/ConsultationCard";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Initialize scroll animations with original site behavior
    const cleanup = initScrollAnimations();
    
    // Apply staggered animations to specific sections
    animateChildren('#services .grid', '.bg-background', 100);
    animateChildren('#about .grid-cols-1', '.border', 150);
    
    // Add page loading animation
    document.body.classList.add('page-loaded');
    
    // Initialize scrolling behavior
    if (mainRef.current) {
      // Set up scroll triggers for smooth transitions
      const sections = mainRef.current.querySelectorAll('section');
      
      sections.forEach((section, i) => {
        // Add fade-in animation for each section
        gsap.fromTo(section, 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'bottom center',
              toggleActions: 'play none none none',
            },
            duration: 0.8,
          }
        );
      });
    }
    
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed inset-0 pointer-events-none z-0">
        <ArchitecturalElements variant="light" density="medium" />
      </div>
      <Navbar />
      <main ref={mainRef} className="relative z-10">
        <Hero />
        <ProjectShowcase />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <BlogSection />
        <MapComponent />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}

export default Index;
