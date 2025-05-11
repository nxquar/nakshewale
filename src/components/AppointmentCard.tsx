
import { useState } from 'react';
import { Calendar, Phone, User, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

export function AppointmentCard() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        description: "We'll call you back shortly to confirm your appointment.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg border border-orange-100">
      <div className="mb-6">
        <h3 className="text-2xl font-serif font-semibold mb-2">Book a Consultation</h3>
        <p className="text-muted-foreground">
          Let us call you back to schedule your architectural consultation
        </p>
      </div>
      
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
            <Calendar className="mr-2" size={18} />
            {isSubmitting ? "Processing..." : "Request Call Back"}
          </Button>
        </div>
      </form>
      
      <p className="text-xs text-center text-muted-foreground mt-4">
        By submitting this form, you agree to our <Link to="/privacy-policy" className="text-orange-500 hover:underline">privacy policy</Link>
      </p>
    </div>
  );
}
