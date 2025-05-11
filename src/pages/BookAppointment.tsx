
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { ArchitecturalElements } from '../components/ArchitecturalElements';
import { Phone, User, Mail, Calendar, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

// List of services
const services = [
  "Architectural Design",
  "Interior Design",
  "Renovation",
  "Construction Management",
  "Landscape Design",
  "Urban Planning",
  "3D Visualization",
  "Sustainable Design"
];

const BookAppointment = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.phone) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Appointment Request Sent",
        description: "We'll call you back shortly to confirm your free consultation.",
      });
      
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed inset-0 pointer-events-none z-0">
        <ArchitecturalElements variant="light" density="low" />
      </div>
      <Navbar />
      <main className="relative z-10 flex-1">
        {/* Hero section with banner image */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full">
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80" 
                alt="Book an appointment" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
            </div>
          </div>
          
          <div className="relative z-10 pt-40 pb-20 px-6 md:px-10 max-w-7xl mx-auto text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6">
                Book a Free Consultation
              </h1>
              <p className="text-xl text-white/80 max-w-2xl">
                Let us call you back to discuss your architectural project needs and schedule a free consultation.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Booking Section */}
        <section className="py-16 px-6 md:px-10">
          <div className="max-w-xl mx-auto">
            <Card className="bg-white p-8 rounded-3xl shadow-lg border border-orange-100">
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-semibold mb-2">Book a Free Consultation</h3>
                <p className="text-muted-foreground">
                  Let us call you back to schedule your architectural consultation
                </p>
              </div>
              
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <User className="mt-3 text-orange-500 flex-shrink-0" size={20} />
                    <div className="flex-grow">
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-orange-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="mt-3 text-orange-500 flex-shrink-0" size={20} />
                    <div className="flex-grow">
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number*</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-orange-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="mt-3 text-orange-500 flex-shrink-0" size={20} />
                    <div className="flex-grow">
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email (Optional)</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-orange-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Calendar className="mt-3 text-orange-500 flex-shrink-0" size={20} />
                    <div className="flex-grow">
                      <label htmlFor="service" className="block text-sm font-medium mb-1">Select Service*</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full p-3 border border-orange-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                        required
                      >
                        <option value="">Select a service</option>
                        {services.map(service => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <FileText className="mt-3 text-orange-500 flex-shrink-0" size={20} />
                    <div className="flex-grow">
                      <label htmlFor="message" className="block text-sm font-medium mb-1">Message (Optional)</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full p-3 border border-orange-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none resize-none"
                        placeholder="Tell us briefly about your project"
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="pt-3">
                    <Button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Request Free Consultation"}
                    </Button>
                  </div>
                </form>
              </CardContent>
              
              <p className="text-xs text-center text-muted-foreground mt-6">
                By submitting this form, you agree to our <Link to="/privacy-policy" className="text-orange-500 hover:underline">privacy policy</Link>
              </p>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BookAppointment;
