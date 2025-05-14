import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { ArchitecturalElements } from '../components/ArchitecturalElements';
import { MapComponent } from '../components/MapComponent';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const contactInfo = [
  {
    icon: <MapPin className="text-orange-500 mb-4" size={32} />,
    title: "Our Address",
    content: "Main Market Talwara,\nMukerian, Hoshiarpur,\nPunjab, India"
  },
  {
    icon: <Phone className="text-orange-500 mb-4" size={32} />,
    title: "Phone Number",
    content: "+91-9876605658\n+91-9417680658"
  },
  {
    icon: <Mail className="text-orange-500 mb-4" size={32} />,
    title: "Email Address",
    content: "Nakshewale@hotmail.com"
  },
  {
    icon: <Clock className="text-orange-500 mb-4" size={32} />,
    title: "Working Hours",
    content: "Monday - Saturday: 9:00 AM - 6:00 PM\nSunday: Closed"
  }
];


  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed inset-0 pointer-events-none z-0">
        <ArchitecturalElements variant="light" density="low" />
      </div>

      <Navbar />

      <main className="relative z-10 flex-1">
        {/* Hero */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80"
              alt="Contact Us"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
          </div>

          <div className="relative z-10 pt-40 pb-20 px-6 md:px-10 max-w-7xl mx-auto text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-white/80 max-w-2xl">
                We're here to answer any questions you have about our architectural services and how we can help with your project.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-12 text-center">Contact Information</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md border border-orange-100 flex flex-col items-center text-center"
              >
                {item.icon}
                <h3 className="font-serif text-2xl font-medium mb-3">{item.title}</h3>
                <p className="text-muted-foreground whitespace-pre-line text-lg">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Map */}
        <MapComponent />

        {/* Book Appointment */}
        <section className="py-16 px-6 md:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-3">Get Free Consultation</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Schedule a free consultation with our expert architects to discuss your project needs.</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80"
                    alt="Consultation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-10">
                    <div className="text-white">
                      <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4">Book Your Appointment</h3>
                      <p className="text-lg opacity-90">Discuss your architectural vision with our team and get expert advice.</p>
                    </div>
                  </div>
                </div>
                <div className="p-10 flex items-center">
                  <div>
                    <h3 className="text-2xl font-serif font-medium mb-6">Ready to Transform Your Space?</h3>
                    <p className="text-lg text-gray-600 mb-8">
                      Click below to schedule your free consultation session with our experienced architects. We'll help you bring your vision to life.
                    </p>
                    <Link
                      to="/book-appointment"
                      className="inline-block px-8 py-4 bg-orange-500 text-white text-lg font-medium rounded-full hover:bg-orange-600 transition-colors"
                    >
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
