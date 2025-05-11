
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  imageUrl: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "Modern Living Spaces",
    quote: "The team at NAKSHA transformed our vision into reality. Their attention to detail and innovative solutions exceeded our expectations and delivered a truly magnificent project.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Developer",
    company: "Horizon Developments",
    quote: "Working with NAKSHA has been a revelation. Their understanding of sustainable architecture and ability to blend aesthetic beauty with functionality is unmatched in the industry.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Director",
    company: "Urban Revitalization Fund",
    quote: "NAKSHA's approach to urban planning has transformed our community projects. They listen, understand local needs, and create spaces that truly enhance community life.",
    imageUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Robert Wilson",
    role: "Homeowner",
    company: "",
    quote: "Our dream home became a reality thanks to NAKSHA. They captured our vision perfectly while adding creative touches we never would have thought of ourselves.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  }
];

export function TestimonialsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    // Add floating elements animation
    const elements = document.querySelectorAll('.testimonial-decor');
    
    elements.forEach((el) => {
      gsap.to(el, {
        y: `random(-10, 10)`,
        x: `random(-5, 5)`,
        rotation: `random(-5, 5)`,
        duration: 'random(4, 7)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 'random(0, 2)'
      });
    });
    
    // Set up carousel autoplay
    if (carouselRef.current) {
      autoplayRef.current = setInterval(() => {
        const nextButton = carouselRef.current?.querySelector('[data-carousel-next]') as HTMLButtonElement;
        if (nextButton && !nextButton.disabled) {
          nextButton.click();
        }
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => {
      gsap.killTweensOf(elements);
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-orange-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute testimonial-decor top-12 left-8 w-24 h-24 border-2 border-orange-500/20 rounded-sm rotate-12 opacity-40" />
      <div className="absolute testimonial-decor bottom-16 left-1/4 w-16 h-32 border-2 border-orange-300/30 rounded-sm -rotate-12 opacity-30" />
      <div className="absolute testimonial-decor top-32 right-16 w-20 h-20 border-2 border-orange-400/20 rotate-45 opacity-40" />
      <div className="absolute testimonial-decor bottom-8 right-1/3 w-28 h-28 border-2 border-orange-200/20 -rotate-6 opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with NAKSHA
          </p>
        </motion.div>
        
        <div ref={carouselRef} className="relative">
          <Carousel
            opts={{
              align: "center",
              loop: true
            }}
            className="w-full mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-3/4 lg:basis-2/3 pl-4">
                  <div className="bg-white rounded-xl p-8 md:p-10 shadow-md border border-orange-100">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={testimonial.imageUrl} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <svg 
                          className="h-8 w-8 text-orange-300 mb-4" 
                          fill="currentColor" 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-xl text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                        <div>
                          <h4 className="font-medium text-lg">{testimonial.name}</h4>
                          <p className="text-muted-foreground">{testimonial.role}{testimonial.company && `, ${testimonial.company}`}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious data-carousel-prev className="hidden md:flex left-4 bg-white/80 hover:bg-white" />
            <CarouselNext data-carousel-next className="hidden md:flex right-4 bg-white/80 hover:bg-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
