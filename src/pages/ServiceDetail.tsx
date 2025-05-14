
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
    description: "We offer complete architectural design solutions tailored to houses, shops, commercial complexes, and factories—all aligned with Vastu principles. From vision to blueprint, we deliver designs that are functional, inspiring, and rooted in cultural relevance.",
    benefits: [
      'Custom planning for residential, commercial & industrial spaces',
      'Vastu-integrated layouts from day one',
      'Concept to construction-ready documentation',
      '3D visualizations for immersive client experience',
      'Site-responsive, sustainable design solutions',
      'Coordination with consultants for smooth execution'
    ]
  },
  {
    title: 'Interior Design',
    slug: 'interior-design',
    imageUrl: 'https://cdn.pixabay.com/photo/2024/09/19/02/23/living-room-9057382_1280.png',
    description: "We craft beautiful, functional interiors that echo the architecture and enhance everyday life. From stylish homes to productive workspaces, every detail—from furniture to lighting—is tailored with precision and Vastu balance.",
    benefits: [
      'Tailored interior solutions for all types of buildings',
      'Material, lighting, and layout harmony',
      'Custom furniture & modular solutions',
      'Vastu-compliant internal arrangements',
      'Space optimization for flow and purpose',
      'On-site supervision for execution perfection'
    ]
  },
  {
    title: 'Exterior Design',
    slug: 'exterior-design',
    imageUrl: 'https://www.home-designing.com/wp-content/uploads/2017/05/wood-white-and-charcoal-modern-exterior-paint-themes.jpg',
    description: "Your building's first impression starts here. We shape stunning exteriors that reflect identity, purpose, and energy efficiency—always tuned with Vastu and site orientation.",
    benefits: [
      'Facade design tailored to project scale',
      'Material selection for durability & aesthetics',
      'Landscape integration for harmony',
      'Lighting & shading design',
      'Vastu-informed elevation orientation',
      'Visual coherence with surrounding context'
    ]
  },
  {
    title: 'Structural Design',
    slug: 'structural-design',
    imageUrl: 'https://erusuconsultants.com/wp-content/uploads/2023/04/Structural_Drawing.jpg',
    description: "Strong buildings stand on strong foundations. We engineer resilient, safe, and efficient structural systems for homes, shops, commercial buildings, and factories—fully compliant with local codes and your vision.",
    benefits: [
      'Tailored RCC & steel structural solutions',
      'Load analysis & safety compliance',
      'Coordination with architectural plans',
      'Economical use of materials',
      'Seismic & wind-resistant design',
      'Vastu-based structural placement when required'
    ]
  },
  {
    title: 'Building Planning',
    slug: 'building-planning',
    imageUrl: 'https://wordpress.bricknbolt.com/blogs-and-articles/wp-content/uploads/sites/2/2025/02/architectural-plans.webp',
    description: "We create smart, functional building plans for homes, factories, shops, and offices—customized to your needs, site conditions, and future expansions. Every layout is optimized for purpose and performance.",
    benefits: [
      'Tailored layouts for all building types',
      'Efficient space utilization & zoning',
      'Scope for future scalability',
      'Integration with structure & elevation',
      'Client-focused planning process',
      'Code-compliant & technically sound plans'
    ]
  },
  {
    title: 'Vastu Consultation',
    slug: 'vastu-consultation',
    imageUrl: 'https://navgrahorbit.com/wp-content/uploads/2025/02/vastu-consultant.webp',
    description: "We bring ancient Vastu wisdom into modern construction. Whether you're building new or correcting an existing space, our guidance ensures peace, prosperity, and energy harmony.",
    benefits: [
      'Plot analysis and directional energy mapping',
      'Room and function placement as per Vastu',
      'Corrections for existing buildings',
      'On-site evaluation and remedies',
      'Vastu integration with architecture & interiors',
      'Ideal for homes, shops, offices, and factories'
    ]
  },
  {
    title: 'Government Approvals & Documentation',
    slug: 'government-approvals',
    imageUrl: 'https://cdn.pixabay.com/photo/2019/12/18/13/07/right-4703934_1280.jpg',
    description: "We handle the paperwork while you focus on the project. Our team ensures swift and compliant approval processes for building plans, completion certificates, and more.",
    benefits: [
      'Building plan approval from local authorities',
      'Completion & occupancy certificates',
      'Documentation for residential & commercial permits',
      'Factory layout approvals & NOCs',
      'Regulatory compliance consulting',
      'End-to-end support from submission to sanction'
    ]
  },
  {
    title: 'Project Management',
    slug: 'project-management',
    imageUrl: 'https://www.sinnaps.com/wp-content/uploads/2017/12/construction-project-management-2.jpg',
    description: "We manage your project like it’s our own—from planning to handover. We ensure everything’s on schedule, under budget, and built exactly as promised—with constant client communication.",
    benefits: [
      'Timeline & budget control',
      'Contractor coordination',
      'Site supervision & quality assurance',
      'Issue resolution & risk mitigation',
      'Progress updates & reporting',
      'Smooth workflow from design to delivery'
    ]
  },
  {
    title: '3D Visualization',
    slug: '3d-visualization',
    imageUrl: 'https://images.unsplash.com/photo-1599422314077-f4dfdaa4cd8b?auto=format&fit=crop&q=80',
    description: "See it before you build it. Our photorealistic 3D visualizations bring your project to life—helping you make confident decisions about space, design, materials, and finishes.",
    benefits: [
      'High-quality 3D renders for interior & exterior',
      'Walkthrough animations for immersive experience',
      'Design validation before execution',
      'Client-friendly visual presentations',
      'Multiple view angles and lighting options',
      'Virtual staging to explore finishes & furniture options'
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
              <a 
  href="https://wa.me/919876605658"
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
>
  Inquire about this service
</a>


            </div>
          </div>
          
{/* Appointment and Consultation Cards */}
<div className="mt-8">  {/* Added mt-8 for spacing */}
  <AppointmentCard />
</div>

<div className="mt-8">  {/* Added mt-8 for spacing */}
  <ConsultationCard />
</div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
