import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Logo } from "./Logo";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  
  // Text for typewriter effect
  const headingText = "Design that transforms spaces into experiences";
  const subheadingText = "We create architectural solutions that combine aesthetics, functionality, and innovation to elevate every project.";
  
  // Track scroll progress for logo visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // Calculate scroll progress percentage (0 to 100)
      const progress = Math.min((scrollPosition / windowHeight) * 100, 100);
      setScrollProgress(progress);
      
      // Show logo when progress is over 80%
      if (progress > 80) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize GSAP animations
  useEffect(() => {
    // Type writer effect setup for heading
    if (headingRef.current) {
      const heading = headingRef.current;
      heading.innerHTML = "";
      
      const characters = headingText.split("");
      characters.forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0";
        span.style.transform = "translateY(10px)";
        span.style.display = char === " " ? "inline" : "inline-block";
        heading.appendChild(span);
        
        gsap.to(span, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: 0.8 + (index * 0.04),
          ease: "power2.out"
        });
      });
    }
    
    // Type writer effect for subheading
    if (subheadingRef.current) {
      const subheading = subheadingRef.current;
      subheading.innerHTML = "";
      
      const words = subheadingText.split(" ");
      words.forEach((word, index) => {
        const span = document.createElement("span");
        span.textContent = (index > 0 ? " " : "") + word;
        span.style.opacity = "0";
        span.style.transform = "translateY(10px)";
        span.style.display = "inline-block";
        subheading.appendChild(span);
        
        gsap.to(span, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: 1.5 + (index * 0.05),
          ease: "power2.out"
        });
      });
    }
    
    // Set up parallax effect without shrinking the frame
    const frameElement = frameRef.current;
    if (frameElement) {
      gsap.fromTo(frameElement, 
        { scale: 1, opacity: 1 },
        {
          // Remove the scale shrinking effect
          scale: 1, 
          opacity: 0.9, // Keep good visibility
          scrollTrigger: {
            trigger: frameElement,
            start: "top top",
            end: "bottom top",
            scrub: true,
          }
        }
      );
    }
    
    // Add overlay fade-in effect when component mounts
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      setTimeout(() => {
        heroContent.classList.add('opacity-100');
        heroContent.classList.remove('opacity-0');
        heroContent.classList.add('translate-y-0');
        heroContent.classList.remove('translate-y-8');
      }, 300);
    }
  }, []);
  
  // Remove the scaling based on scroll
  // Keep frame opacity but maintain size
  const frameOpacity = Math.max(1 - (scrollProgress * 0.001), 0.9);

  return (
    <section 
      id="home" 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Rounded frame with background image - fixed size regardless of scroll */}
      <div 
        ref={frameRef}
        className="absolute inset-0 m-auto rounded-3xl overflow-hidden transition-all duration-300"
        style={{ 
          transform: `scale(1) rotateX(${scrollProgress * 0.03}deg)`, // Keep scale at 1, reduce rotation impact
          opacity: frameOpacity,
          maxWidth: "90%",
          maxHeight: "90%",
          height: `${90}%`,
          width: `${90}%`,
        }}
      >
        <div 
          className="h-full w-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80')`,
            backgroundPosition: '50%',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/70 to-orange-600/50 rounded-3xl"></div>
        </div>
      </div>
      
      {/* Logo that appears as frame disappears */}
      <Logo visible={showLogo} />
      
      <div className="container relative z-10 px-6 md:px-16 lg:px-24 text-white">
        <div className="max-w-3xl mx-auto hero-content opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <h1 
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight mb-6 hero-text-shadow"
          >
            {/* Text is populated dynamically via JavaScript */}
          </h1>
          <p 
            ref={subheadingRef}
            className="text-lg sm:text-xl opacity-90 mb-10 max-w-2xl"
          >
            {/* Text is populated dynamically via JavaScript */}
          </p>
          
          <a 
            href="#projects" 
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-8 py-4 bg-white text-black hover:bg-orange-50 transition-all group rounded-full"
          >
            View our projects
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
