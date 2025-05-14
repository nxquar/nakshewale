
import { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Briefcase, MessageSquare, Star, Users } from "lucide-react";
import { ConsultationCard } from '@/components/ConsultationCard';

// Team members data
const teamMembers = [
  {
    name: "Ayşe Yurdaer",
    position: "Principal Architect",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    bio: "With over 20 years of experience, Ayşe leads our team with a focus on sustainable and innovative design solutions."
  },
  {
    name: "Mehmet Aydın",
    position: "Senior Architect",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80",
    bio: "Mehmet specializes in urban planning and has contributed to numerous award-winning projects across the country."
  },
  {
    name: "Zeynep Kaya",
    position: "Interior Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
    bio: "Zeynep brings spaces to life with her unique approach to interior design, balancing functionality with aesthetics."
  },
  {
    name: "Can Özturk",
    position: "Project Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    bio: "Can ensures that every project runs smoothly from concept to completion, maintaining the highest standards of quality."
  }
];

// Testimonials data
const testimonials = [
  {
    quote: "The team at NAKSHEWALE transformed our vision into reality. Their attention to detail and innovative solutions exceeded our expectations and delivered a truly magnificent project.",
    author: "Ravi Thakur"
  },
  {
    quote: "Working with NAKSHEWALE has been a revelation. Their understanding of sustainable architecture and ability to blend aesthetic beauty with functionality is unmatched in the industry.",
    author: "Amit Sharma"
  },
  {
    quote: "NAKSHEWALE's approach to urban planning has transformed our community projects. They listen, understand local needs, and create spaces that truly enhance community life.",
    author: "Priya Sharma"
  },
  {
    quote: "Our dream home became a reality thanks to NAKSHEWALE. They captured our vision perfectly while adding creative touches we never would have thought of ourselves.",
    author: "Sandeep Thakur"
  }
];


// Awards and recognitions
const awards = [
  "European Architecture Award 2023",
  "Sustainable Design Excellence, Green Building Council",
  "Urban Innovation Prize, Istanbul Architecture Biennale",
  "National Recognition for Cultural Preservation",
  "Best Residential Design, Architectural Digest Turkey"
];

const About = () => {
  const [animationReady, setAnimationReady] = useState(false);
  
  useEffect(() => {
    // Set animation delay
    setTimeout(() => {
      setAnimationReady(true);
    }, 300);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-orange-50 to-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">About Naksha</h1>
              <p className="text-xl text-muted-foreground">Creating spaces that inspire, endure, and transform lives through thoughtful and sustainable architecture.</p>
            </div>
          </div>
        </section>
        
     {/* New Section Above "Our Philosophy" */}
<section className="py-16 md:py-24 bg-gradient-to-b from-orange-50 to-white">
  <div className="max-w-7xl mx-auto px-6 md:px-8">
    <div className="flex flex-col md:flex-row items-center justify-between">
      {/* Left Side: Text Content */}
      <motion.div
        className="max-w-lg text-center md:text-left mb-8 md:mb-0"
        custom={0}
        initial="hidden"
        animate={animationReady ? "visible" : "hidden"}
        variants={staggerVariants}
      >
        <p className="text-lg text-muted-foreground">
          We understand that design is not just about aesthetics—it’s about creating environments that influence emotions, productivity, and well-being. Our approach is rooted in a deep understanding of the needs of the people who will inhabit the spaces we create.
        </p>
      </motion.div>

      {/* Right Side: Image */}
      <motion.div
        className="w-full md:w-1/2 lg:w-2/5"
        custom={1}
        initial="hidden"
        animate={animationReady ? "visible" : "hidden"}
        variants={staggerVariants}
      >
        <img
          src= "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
          alt="Design Concept"
          className="w-full h-full object-cover object-center rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
        />
      </motion.div>
    </div>
  </div>
</section>

        
        {/* Design Philosophy */}
        <section className="py-16 md:py-24 bg-orange-50">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Our Design Philosophy</h2>
              <p className="text-muted-foreground">
                We believe in architecture that tells a story, serves a purpose, and stands the test of time.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Human-Centered",
                  description: "We create spaces that serve people's needs, enhance their experiences, and foster community.",
                  icon: <Users className="h-8 w-8 text-orange-500" />
                },
                {
                  title: "Sustainable Innovation",
                  description: "We integrate eco-friendly practices and innovative solutions for resilient, future-proof buildings.",
                  icon: <BookOpen className="h-8 w-8 text-orange-500" />
                },
                {
                  title: "Contextual Harmony",
                  description: "Our designs respect and respond to their surroundings, cultural context, and historical significance.",
                  icon: <Briefcase className="h-8 w-8 text-orange-500" />
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                  custom={index}
                  initial="hidden"
                  animate={animationReady ? "visible" : "hidden"}
                  variants={staggerVariants}
                >
                  <div className="mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Our Team</h2>
              <p className="text-muted-foreground">
                Meet the talented professionals who bring our architectural vision to life.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={index}
                  className="overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                  custom={index}
                  initial="hidden"
                  animate={animationReady ? "visible" : "hidden"}
                  variants={staggerVariants}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                    <p className="text-orange-500 text-sm mb-3">{member.position}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
         */}
        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-orange-50">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Client Testimonials</h2>
              <p className="text-muted-foreground">
                What our clients say about working with us.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                  custom={index}
                  initial="hidden"
                  animate={animationReady ? "visible" : "hidden"}
                  variants={staggerVariants}
                >
                  <MessageSquare className="h-8 w-8 text-orange-500 mb-4" />
                  <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                  <p className="font-medium">{testimonial.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Awards
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Awards & Recognition</h2>
              <p className="text-muted-foreground">
                Our commitment to excellence has been recognized throughout the industry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                  custom={index}
                  initial="hidden"
                  animate={animationReady ? "visible" : "hidden"}
                  variants={staggerVariants}
                >
                  <Award className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0" />
                  <p className="font-medium">{award}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
         */}
        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-orange-500 text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Let's Create Together</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to transform your architectural vision into reality? We're here to help bring your project to life.
            </p>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-3 rounded-full font-medium hover:bg-orange-50 transition-colors"
            >
              Start Your Project <Star className="h-4 w-4" />
          
          
            </a>
         
         {/* Appointment and Consultation Cards */}
         
         
         <div className="mt-8">  {/* Added mt-8 for spacing */}
           <ConsultationCard />
         </div>
          </div>
          
        </section>
      </main>
       
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;
