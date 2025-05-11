
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

type ElementsProps = {
  variant?: 'light' | 'dark';
  density?: 'low' | 'medium' | 'high';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'all';
};

export function ArchitecturalElements({ 
  variant = 'light', 
  density = 'medium',
  position = 'all'
}: ElementsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Calculate number of elements based on density
  const getElementCount = () => {
    switch(density) {
      case 'low': return 4;
      case 'high': return 12;
      case 'medium':
      default: return 8;
    }
  };
  
  // Get position class based on position prop
  const getPositionClass = (index: number) => {
    const totalElements = getElementCount();
    
    if (position === 'all') {
      // Distribute evenly
      if (index < totalElements / 4) return 'top-left';
      if (index < totalElements / 2) return 'top-right';
      if (index < (totalElements * 3) / 4) return 'bottom-left';
      return 'bottom-right';
    }
    
    return position;
  };
  
  // Generate CSS classes for positioning
  const getPositionStyles = (positionType: string) => {
    switch(positionType) {
      case 'top-left':
        return {
          top: `${Math.random() * 30}%`,
          left: `${Math.random() * 30}%`,
        };
      case 'top-right':
        return {
          top: `${Math.random() * 30}%`,
          right: `${Math.random() * 30}%`,
        };
      case 'bottom-left':
        return {
          bottom: `${Math.random() * 30}%`,
          left: `${Math.random() * 30}%`,
        };
      case 'bottom-right':
        return {
          bottom: `${Math.random() * 30}%`,
          right: `${Math.random() * 30}%`,
        };
      default:
        return {};
    }
  };
  
  // Generate random shapes
  const shapes = [
    'rounded-none', // square
    'rounded-full', // circle
    'rounded-sm rotate-45', // diamond
    'rounded-none', // rectangle (with custom width/height)
    'rounded-md', // rounded rectangle
  ];
  
  // Generate color based on variant
  const getColor = () => {
    if (variant === 'dark') {
      return 'border-white/20';
    } 
    return 'border-orange-500/20';
  };
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const elements = containerRef.current.querySelectorAll('.arch-decor');
    
    elements.forEach((el) => {
      gsap.to(el, {
        y: `random(-15, 15)`,
        x: `random(-10, 10)`,
        rotation: `random(-8, 8)`,
        duration: 'random(5, 10)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 'random(0, 3)'
      });
    });
    
    return () => {
      gsap.killTweensOf(elements);
    };
  }, []);
  
  const elementCount = getElementCount();
  const elements = Array.from({ length: elementCount }).map((_, index) => {
    const posType = getPositionClass(index);
    const posStyles = getPositionStyles(posType);
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    const size = Math.floor(Math.random() * 40) + 20; // 20px to 60px
    const isVertical = Math.random() > 0.7; // 30% chance of being vertical
    
    return {
      shape,
      width: isVertical ? size / 2 : size,
      height: isVertical ? size : size / 2,
      posStyles,
      rotation: Math.floor(Math.random() * 45) - 22.5, // -22.5 to +22.5 degrees
      opacity: (Math.random() * 0.3) + 0.1, // 0.1 to 0.4
    };
  });

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((el, index) => (
        <div
          key={index}
          className={`arch-decor absolute border-2 ${getColor()} ${el.shape}`}
          style={{
            ...el.posStyles,
            width: `${el.width}px`,
            height: `${el.height}px`,
            transform: `rotate(${el.rotation}deg)`,
            opacity: el.opacity,
          }}
        />
      ))}
    </div>
  );
}
