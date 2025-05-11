
// Advanced animation utility to match original Yurdaer Mimarlik animations

// Animation types to match the original site
export const ANIMATION_TYPES = {
  FADE_IN: 'fade-in',
  SLIDE_UP: 'slide-up',
  SLIDE_LEFT: 'slide-left',
  SLIDE_RIGHT: 'slide-right',
  ZOOM_IN: 'zoom-in',
};

export function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        const delay = element.dataset.delay ? parseInt(element.dataset.delay) : 0;
        
        setTimeout(() => {
          element.classList.add('animated');
        }, delay);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
  });
  
  animatedElements.forEach((element) => {
    observer.observe(element);
  });
  
  return () => {
    animatedElements.forEach((element) => {
      observer.unobserve(element);
    });
  };
}

// Add staggered animation to child elements
export function animateChildren(parentSelector: string, childSelector: string, delayIncrement: number = 100) {
  const parent = document.querySelector(parentSelector);
  if (!parent) return;
  
  const children = parent.querySelectorAll(childSelector);
  
  children.forEach((child, index) => {
    const element = child as HTMLElement;
    element.classList.add('animate-on-scroll');
    element.dataset.delay = (index * delayIncrement).toString();
  });
}
