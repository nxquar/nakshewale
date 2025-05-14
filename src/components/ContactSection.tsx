import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ConsultationCard } from './ConsultationCard';

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Get in Touch</h2>
            <p className="mb-8 text-muted-foreground">
              We're always interested in new projects and collaborations. Reach out to discuss how we can help bring your architectural vision to life.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start p-5 border border-orange-100 rounded-2xl hover:bg-orange-50/50 transition-colors">
                <div className="mr-4 text-orange-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">
                    Main Market Talwara, Mukerian<br />
                    Hoshiarpur, Punjab, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-5 border border-orange-100 rounded-2xl hover:bg-orange-50/50 transition-colors">
                <div className="mr-4 text-orange-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Call Us</h3>
                  <p className="text-muted-foreground">
                    +91-9876605658<br />
                    +91-9417680658
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-5 border border-orange-100 rounded-2xl hover:bg-orange-50/50 transition-colors">
                <div className="mr-4 text-orange-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email Us</h3>
                  <p className="text-muted-foreground">Nakshewale@hotmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start p-5 border border-orange-100 rounded-2xl hover:bg-orange-50/50 transition-colors">
                <div className="mr-4 text-orange-500">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Working Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: By appointment only
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="space-y-6 animate-on-scroll bg-white p-8 rounded-3xl border border-orange-100 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 border border-orange-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 border border-orange-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
                  placeholder="Your Email"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full p-3 border border-orange-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
                placeholder="Subject"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full p-3 border border-orange-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition resize-none"
                placeholder="Your Message"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full sm:w-auto px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        
        {/* Consultation Card */}
        <div className="mt-16">
          <ConsultationCard />
        </div>
      </div>
    </section>
  );
}
