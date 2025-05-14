
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export function AnimatedPhotoElements() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const elements = containerRef.current.querySelectorAll('.floating-element');
    
    elements.forEach((el) => {
      // Create random animation for each element
      gsap.to(el, {
        y: `random(-15, 15)`,
        x: `random(-10, 10)`,
        rotation: `random(-8, 8)`,
        duration: 'random(3, 6)',
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

  return (
    <div ref={containerRef} className="relative h-full w-full">
      {/* Main image */}
      <motion.div 
  className="rounded-2xl overflow-hidden shadow-lg w-full h-[80vh]" // Adjust height here
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <img 
    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80" 
    alt="Architecture studio" 
    className="w-full h-full object-cover rounded-2xl"
  />
</motion.div>

      {/* Floating elements */}
      <motion.div 
        className="floating-element absolute top-[-40px] right-[-20px] bg-[#9b87f5] rounded-full w-20 h-20 opacity-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      
      <motion.div 
        className="floating-element absolute bottom-[30px] left-[-30px] bg-[#33C3F0] rounded-xl w-16 h-16 opacity-30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
      
      <motion.div 
        className="floating-element absolute top-[40%] left-[-15px] bg-[#D6BCFA] rounded-md w-10 h-10 rotate-45 opacity-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
      
      <motion.div 
        className="floating-element absolute bottom-[-20px] right-[30%] bg-[#7E69AB] rounded-lg w-14 h-14 opacity-25"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
      
      <motion.div 
        className="floating-element absolute top-[30%] right-[-25px] bg-white border-2 border-[#E5DEFF] rounded-full w-12 h-12 opacity-70"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      />
    </div>
  );
}
