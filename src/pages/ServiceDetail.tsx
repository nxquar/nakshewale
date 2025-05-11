
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, CheckCircle, ChevronRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ConsultationCard } from '@/components/ConsultationCard';
import { AppointmentCard } from '@/components/AppointmentCard';

// Services data
const services = [
  {
    title: 'Architectural Design',
    slug: 'architectural-design',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
    description: "Our architectural design services encompass the entire process from conceptual development to construction documentation. We prioritize innovative solutions that respond to our clients' needs, site conditions, and cultural context.",
    benefits: [
      'Comprehensive needs analysis and site evaluation',
      'Creative conceptual designs that reflect client vision',
      'Detailed design development with 3D visualization',
      'Sustainable design strategies and materials selection',
      'Complete construction documentation',
      'Coordination with consultants and contractors'
    ]
  },
  {
    title: 'Interior Architecture',
    slug: 'interior-architecture',
    imageUrl: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80',
    description: "Our interior architecture services create thoughtfully designed spaces that enhance the user experience while seamlessly integrating with the overall architectural concept. We focus on materiality, spatial quality, lighting, and functional planning to create interiors that inspire and function beautifully.",
    benefits: [
      'Spatial planning and optimization',
      'Material and finish selection',
      'Custom furniture and fixture design',
      'Lighting design and specification',
      'Acoustical considerations and solutions',
      'Art and accessory curation and placement'
    ]
  },
  {
    title: 'Urban Planning',
    slug: 'urban-planning',
    imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80',
    description: "Our urban planning services address the complex challenges of developing cohesive, sustainable communities. We work at various scales from neighborhood planning to large-scale urban developments, focusing on creating places that enhance quality of life while addressing environmental, social, and economic considerations.",
    benefits: [
      'Comprehensive site analysis and context evaluation',
      'Master planning for mixed-use developments',
      'Public space and streetscape design',
      'Transit-oriented development strategies',
      'Sustainable urban infrastructure planning',
      'Community engagement and participatory design processes'
    ]
  },
  {
    title: 'Project Management',
    slug: 'project-management',
    imageUrl: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&q=80',
    description: "Our project management services ensure that architectural projects are delivered on time, within budget, and to the highest quality standards. We oversee all aspects of the construction process, serving as the client's representative and advocate throughout the project.",
    benefits: [
      'Comprehensive project scheduling and milestone tracking',
      'Budget development, monitoring, and cost control',
      'Contractor selection and bid management',
      'Construction administration and quality control',
      'Regular progress reporting and client communication',
      'Risk assessment and management strategies'
    ]
  }
];

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Add page loaded animation
    document.body.classList.add('page-loaded');
    
    // Initialize animations for this page
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const delay = element.dataset.delay ? parseInt(element.dataset.delay) : 0;
          
          setTimeout(() => {
            element.classList.add('animated');
          }, delay);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    });
    
    animatedElements.forEach((element) => {
      observer.observe(element);
    });
    
    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
  
  if (!service) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-serif mb-4">Service not found</h2>
            <Link to="/" className="text-orange-500 hover:text-orange-600">
              Return to homepage
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-6 md:px-16 lg:px-24 mb-6">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link to="/" className="hover:text-orange-500">Home</Link>
            <ChevronRight size={14} className="mx-2" />
            <Link to="/#services" className="hover:text-orange-500">Services</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-orange-500">{service.title}</span>
          </div>
        </div>
        
        {/* Hero Section */}
        <div className="container mx-auto px-6 md:px-16 lg:px-24 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="w-full animate-on-scroll slide-up">
              <Link to="/#services" className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-6">
                <ArrowLeft size={16} className="mr-2" />
                Back to Services
              </Link>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">{service.title}</h1>
            </div>
          </div>
        </div>
        
        {/* Service Content */}
        <div className="container mx-auto px-6 md:px-16 lg:px-24 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image */}
            <div className="rounded-3xl overflow-hidden shadow-lg animate-on-scroll">
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="w-full h-[400px] object-cover"
              />
            </div>
            
            {/* Right Column - Content */}
            <div className="animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              <p className="text-lg mb-8">{service.description}</p>
              
              <h3 className="text-xl font-medium font-serif mb-4">Key Benefits</h3>
              <ul className="space-y-3 mb-8">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="mr-3 text-orange-500 flex-shrink-0 mt-1" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
              >
                Inquire about this service
              </Link>
            </div>
          </div>
        </div>
      </main>
        <AppointmentCard></AppointmentCard>
            <ConsultationCard></ConsultationCard>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
