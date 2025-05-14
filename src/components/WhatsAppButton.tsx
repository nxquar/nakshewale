
import { useEffect, useState } from 'react';

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919876605658', '_blank');
  };
  
  return (
    <>
      {isVisible && (
        <button
          onClick={handleWhatsAppClick}
          className="fixed bottom-8 left-8 z-40 p-3 bg-green-500 text-white rounded-full shadow-lg transition-opacity hover:opacity-90"
          aria-label="Contact via WhatsApp"
        >
       <svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="24" 
  height="24" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  strokeWidth="2" 
  strokeLinecap="round" 
  strokeLinejoin="round"
>
  {/* <!-- Outer chat bubble --> */}
  <path d="M21.5 12a9.5 9.5 0 1 0-17.062 6.266L3 21l2.887-.756A9.5 9.5 0 0 0 21.5 12Z" />
  
  {/* <!-- Inner phone (filled) --> */}
  <path 
    fill="currentColor"
    d="M16.2 14.8c-.3.8-1.8 1.4-2.5 1.2-.7-.2-2.1-.9-3.2-2-1.1-1.1-1.8-2.5-2-3.2-.2-.7.4-2.2 1.2-2.5.3-.1.6-.1.8 0l1.1.6c.2.1.3.4.2.7l-.3 1c-.1.3 0 .6.2.8l1.6 1.6c.2.2.5.3.8.2l1-.3c.3-.1.6 0 .7.2l.6 1.1c.1.3.1.6 0 .8Z"
  />
</svg>


        </button>
      )}
    </>
  );
}
