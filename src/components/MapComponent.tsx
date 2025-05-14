
import { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function MapComponent() {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-12 text-center">Find Us</h2>
          
          <div className="w-full">
            {/* Map */}
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl w-full">
              <div className={`absolute inset-0 transition-opacity duration-500 ${mapLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <iframe 
src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d773.6712381865983!2d75.87601626958094!3d31.943574998376405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDU2JzM2LjkiTiA3NcKwNTInMzYuMCJF!5e1!3m2!1sen!2sin!4v1747204462536!5m2!1sen!2sin"                   width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yurdaer Architecture Location"
                  onLoad={() => setMapLoaded(true)}
                ></iframe>
              </div>
              
              {!mapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="text-center p-6">
                    <MapPin size={40} className="mx-auto mb-2 text-orange-500" />
                    <p className="font-medium">Map loading...</p>
                  </div>
                </div>
              )}
              
              {/* Overlay gradient to match theme */}
              <div className="absolute inset-0 pointer-events-none shadow-inner" 
                   style={{ 
                     boxShadow: 'inset 0 4px 6px -1px rgba(249, 115, 22, 0.1), inset 0 2px 4px -2px rgba(249, 115, 22, 0.05)',
                     background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.03), rgba(249, 115, 22, 0.05))'
                   }}></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
