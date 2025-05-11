
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [animatedIn, setAnimatedIn] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const location = useLocation();
  
  useEffect(() => {
    // Check if current location is home page
    setIsHome(location.pathname === "/");
    
    // Handle initial animation - match original site behavior
    setTimeout(() => {
      setAnimatedIn(true);
    }, 1000);
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 20) {
        setScrolled(true);
        setIsAtTop(false);
      } else {
        setScrolled(false);
        setIsAtTop(true);
      }
    };
    
    // Initialize scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);
  
  const menuItems = [
    { label: "Home", href: location.pathname === "/" ? "#home" : "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blogs" },
    { label: "Contact", href: "/contact" }
  ];
  
  const handleNavigation = (href: string, e: React.MouseEvent) => {
    setIsOpen(false);
    
    if (href.startsWith('#') && location.pathname === "/") {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  const scrollToContact = () => {
    if (location.pathname === "/") {
      const contactSection = document.querySelector("#contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = "/#contact";
    }
  };
  
  // Show centered logo with no menu items when at top of home page
  const showCenteredLogo = isHome && isAtTop;
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled ? "bg-background/95 backdrop-blur-sm py-4 shadow-sm" : "py-8 mt-8", // Added mt-8 to move down when at top
      animatedIn ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8",
      "px-6 md:px-16 lg:px-24"
    )}>
      <nav className={cn(
        "flex items-center",
        showCenteredLogo ? "justify-center" : "justify-between max-w-7xl mx-auto"
      )}>
        <div className={cn(
          "flex items-center gap-8",
          showCenteredLogo && "flex-col"
        )}>
          <Link to="/" className={cn(
            "font-serif text-2xl font-semibold tracking-tighter",
            showCenteredLogo && "text-4xl text-white"
          )}>
            NAKSHA
          </Link>
          
          {/* Desktop Navigation */}
          {!showCenteredLogo && (
            <ul className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link 
                    to={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith('#')) {
                        handleNavigation(item.href, e);
                      }
                    }}
                    className={cn(
                      "hover:text-orange-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-orange-500 after:transition-transform hover:after:origin-bottom-left hover:after:scale-x-100",
                      location.pathname === item.href || 
                      (location.pathname === "/" && item.href === "#home") ||
                      (location.pathname === "/about" && item.label === "About") ||
                      (location.pathname === "/projects" && item.label === "Projects") ||
                      (location.pathname === "/blogs" && item.label === "Blog") ||
                      (location.pathname === "/services" && item.label === "Services") ||
                      (location.pathname === "/contact" && item.label === "Contact")
                        ? "text-orange-500"
                        : ""
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Contact Info and Book Appointment - Desktop */}
        {!showCenteredLogo && (
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+15551234567" 
              className="flex items-center text-muted-foreground hover:text-orange-500 transition-colors"
            >
              <Phone size={18} className="mr-2" />
              <span className="font-medium">+1 (555) 123-4567</span>
            </a>
            
            <Button 
              onClick={() => {
                window.location.href = "/book-appointment";
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-5"
            >
              <Calendar size={18} className="mr-2" />
              Book Appointment
            </Button>
          </div>
        )}
        
        {/* Mobile Menu Button - Hidden when showing centered logo */}
        {!showCenteredLogo && (
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed inset-0 bg-background z-40 md:hidden pt-24">
            <div className="absolute top-0 right-0 p-6">
              <button onClick={() => setIsOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col h-full p-8">
              <ul className="flex flex-col items-center space-y-8 mb-10">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <Link 
                      to={item.href}
                      onClick={(e) => {
                        if (item.href.startsWith('#')) {
                          handleNavigation(item.href, e);
                        }
                      }}
                      className={cn(
                        "text-lg font-medium hover:text-orange-500 transition-colors",
                        location.pathname === item.href || 
                        (location.pathname === "/" && item.href === "#home") ||
                        (location.pathname === "/about" && item.label === "About") ||
                        (location.pathname === "/projects" && item.label === "Projects") ||
                        (location.pathname === "/blogs" && item.label === "Blog") ||
                        (location.pathname === "/services" && item.label === "Services") ||
                        (location.pathname === "/contact" && item.label === "Contact")
                          ? "text-orange-500"
                          : ""
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto flex flex-col items-center gap-6">
                <a 
                  href="tel:+15551234567" 
                  className="flex items-center text-muted-foreground hover:text-orange-500 transition-colors"
                >
                  <Phone size={18} className="mr-2" />
                  <span className="font-medium">+1 (555) 123-4567</span>
                </a>
                
                <Button 
                  onClick={() => {
                    setIsOpen(false);
                    window.location.href = "/book-appointment";
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-5 w-full"
                >
                  <Calendar size={18} className="mr-2" />
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
