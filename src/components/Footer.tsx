import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-orange-100">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="inline-block">
              <h2 className="font-serif text-2xl font-semibold tracking-tighter mb-4">NAKSHEWALE</h2>
            </Link>
            <p className="text-muted-foreground mb-8 max-w-md">
              We create architectural designs that combine aesthetics, functionality, and innovation to transform spaces into extraordinary experiences.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons */}
              <a href="#" className="w-10 h-10 rounded-full bg-orange-100 hover:bg-orange-200 flex items-center justify-center text-orange-600 transition-colors">
                <span className="sr-only">Instagram</span>
                {/* Instagram Icon */}
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-orange-100 hover:bg-orange-200 flex items-center justify-center text-orange-600 transition-colors">
                <span className="sr-only">Twitter</span>
                {/* Twitter Icon */}
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-orange-100 hover:bg-orange-200 flex items-center justify-center text-orange-600 transition-colors">
                <span className="sr-only">LinkedIn</span>
                {/* LinkedIn Icon */}
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="text-muted-foreground hover:text-orange-600">Home</a></li>
              <li><a href="#projects" className="text-muted-foreground hover:text-orange-600">Projects</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-orange-600">About Us</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-orange-600">Services</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-orange-600">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Contact</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li>Main Market Talwara, Mukerian, Hoshiarpur, Punjab, India</li>
              <li>Email: Nakshewale@hotmail.com</li>
              <li>Phone: +91-9876605658, +91-9417680658</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-orange-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {currentYear} NAKSHEWALE. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-orange-600">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-orange-600">Terms of Service</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-orange-600">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
