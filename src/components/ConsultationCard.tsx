
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function ConsultationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
          alt="Architectural consultation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>
      
      <div className="relative z-10 p-8 md:p-12 text-white max-w-lg">
        <h3 className="text-3xl font-serif font-semibold mb-4">
          Book Your Free Consultation
        </h3>
        <p className="mb-8 text-white/80">
          Get expert advice on your architectural project from our team of professionals. 
          We'll help you bring your vision to life.
        </p>
        
        <Link 
          to="/book-appointment"
          className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-full text-white transition-colors"
        >
          <Calendar className="mr-2" size={18} />
          Book Free Consultation
        </Link>
      </div>
    </motion.div>
  );
}
