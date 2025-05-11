
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { Building, Landmark, Layers, Compass, Ruler } from "lucide-react";
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

type Project = {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  slug: string;
};

const featuredProjects: Project[] = [
  {
    id: 1,
    title: 'Modern Residential Complex',
    category: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80',
    description: 'A contemporary residential complex featuring sustainable materials and innovative design. The project includes 50 residential units, community spaces, and green areas designed to promote social interaction while respecting the environment.',
    slug: 'modern-residential-complex'
  },
  {
    id: 4,
    title: 'Cultural Center',
    category: 'Public',
    imageUrl: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&q=80',
    description: 'A multifunctional cultural center that serves as a landmark for the community. This 10,000 square meter facility includes exhibition spaces, performance halls, and educational areas designed to celebrate local heritage while offering a contemporary architectural statement.',
    slug: 'cultural-center'
  },
  {
    id: 6,
    title: 'Tech Innovation Campus',
    category: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?auto=format&fit=crop&q=80',
    description: 'A sustainable campus designed for innovation and collaboration. The project features flexible workspaces, research facilities, and sustainable design elements including solar panels, rainwater harvesting systems, and energy-efficient building materials.',
    slug: 'tech-innovation-campus'
  }
];

export function ProjectShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [currentProject, setCurrentProject] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  
  // Set up auto-scroll for the carousel
  useEffect(() => {
    if (api) {
      api.on("select", () => {
        const selected = api.selectedScrollSnap();
        setCurrentProject(selected);
      });
      
      autoplayRef.current = setInterval(() => {
        api.scrollNext();
      }, 4000); // Change slide every 4 seconds
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [api]);
  
  // Animation for architectural elements
  useEffect(() => {
    if (!containerRef.current) return;
    
    const elements = containerRef.current.querySelectorAll('.arch-element');
    
    elements.forEach((el) => {
      gsap.to(el, {
        y: `random(-8, 8)`,
        x: `random(-5, 5)`,
        rotation: `random(-5, 5)`,
        duration: 'random(4, 7)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 'random(0, 2)'
      });
    });
    
    return () => {
      gsap.killTweensOf(elements);
    };
  }, []);

  // Animation for the floating card in the About section
  useEffect(() => {
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach((card) => {
      gsap.to(card, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });
    
    return () => {
      gsap.killTweensOf(floatingCards);
    };
  }, []);

  return (
    <section id="project-showcase" className="section-padding bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto relative">
        {/* Architectural decorative elements */}
        <div className="absolute arch-element top-12 left-8 w-24 h-24 border-2 border-orange-500/20 rounded-sm rotate-12 opacity-40" />
        <div className="absolute arch-element bottom-16 left-1/4 w-16 h-32 border-2 border-orange-300/30 rounded-sm -rotate-12 opacity-30" />
        <div className="absolute arch-element top-32 right-16 w-20 h-20 border-2 border-orange-400/20 rotate-45 opacity-40" />
        <div className="absolute arch-element bottom-8 right-1/3 w-28 h-28 border-2 border-orange-200/20 -rotate-6 opacity-20" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 px-6"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our signature works that showcase our architectural vision and expertise
          </p>
        </motion.div>

        {/* Featured Project Details */}
        <div className="mb-16 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src={featuredProjects[currentProject]?.imageUrl} 
                alt={featuredProjects[currentProject]?.title} 
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs rounded-full">
                  {featuredProjects[currentProject]?.category}
                </span>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4">{featuredProjects[currentProject]?.title}</h3>
              <p className="text-muted-foreground mb-6">{featuredProjects[currentProject]?.description}</p>
              <Link 
                to={`/project/${featuredProjects[currentProject]?.slug}`}
                className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg self-start"
              >
                View Project Details
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="ml-2"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Full-width carousel with no side padding */}
        <div className="w-full overflow-hidden">
          <Carousel
            opts={{
              align: "center",
              loop: true
            }}
            className="w-full mx-auto"
            setApi={setApi}
          >
            <CarouselContent className="-ml-0 md:-ml-2">
              {featuredProjects.map((project, index) => (
                <CarouselItem key={project.id} className="md:basis-4/5 lg:basis-1/2 pl-0 md:pl-2">
                  <Link to={`/project/${project.slug}`} className="block h-full">
                    <Card className="overflow-hidden border border-orange-100 hover:border-orange-300 transition-all duration-500 shadow-sm hover:shadow-lg">
                      <div className="relative overflow-hidden aspect-[16/9]">
                        <img 
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                          <div className="text-white">
                            <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs rounded-full mb-2">
                              {project.category}
                            </span>
                            <h3 className="text-xl font-medium">{project.title}</h3>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex items-center text-orange-600">
                          <span className="text-sm font-medium">View Project</span>
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="ml-1 transition-transform group-hover:translate-x-1"
                          >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                          </svg>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex left-4 bg-white/80 hover:bg-white" />
            <CarouselNext className="hidden md:flex right-4 bg-white/80 hover:bg-white" />
          </Carousel>
        </div>
        
        {/* Architectural icons */}
        <div className="mt-12 flex justify-center gap-8 md:gap-12 flex-wrap px-6">
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Building className="w-12 h-12 text-orange-500/70" />
            <span className="mt-2 text-sm text-muted-foreground">Residential</span>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Landmark className="w-12 h-12 text-orange-500/70" />
            <span className="mt-2 text-sm text-muted-foreground">Public</span>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Layers className="w-12 h-12 text-orange-500/70" />
            <span className="mt-2 text-sm text-muted-foreground">Commercial</span>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Compass className="w-12 h-12 text-orange-500/70" />
            <span className="mt-2 text-sm text-muted-foreground">Urban Planning</span>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <Ruler className="w-12 h-12 text-orange-500/70" />
            <span className="mt-2 text-sm text-muted-foreground">Interior Design</span>
          </motion.div>
        </div>
        
        <div className="mt-12 text-center px-6">
          <Link 
            to="/projects" 
            className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Explore All Projects
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="ml-2"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
