
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-orange-100">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="inline-block">
              <h2 className="font-serif text-2xl font-semibold tracking-tighter mb-4">NAKSHA</h2>
            </Link>
            <p className="text-muted-foreground mb-8 max-w-md">
              We create architectural designs that combine aesthetics, functionality, and innovation to transform spaces into extraordinary experiences.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons */}
              <a href="#" className="w-10 h-10 rounded-full bg-orange-100 hover:bg-orange-200 flex items-center justify-center text-orange-600 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-orange-100 hover:bg-orange-200 flex items-center justify-center text-orange-600 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-orange-100 hover:bg-orange-200 flex items-center justify-center text-orange-600 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
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
              <li>123 Architecture Avenue</li>
              <li>City, State 12345</li>
              <li>contact@naksha.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-orange-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {currentYear} NAKSHA. All rights reserved.
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
