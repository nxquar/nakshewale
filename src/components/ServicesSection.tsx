
import { SquarePen, Building, Ruler, Compass, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ServicesSection() {
  const services = [
    {
      icon: <SquarePen size={36} />,
      title: 'Architectural Design',
      description: 'From concept to completion, we create architectural solutions that perfectly balance form and function.',
      slug: 'architectural-design',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80'
    },
    {
      icon: <Building size={36} />,
      title: 'Interior Architecture',
      description: 'We craft interior spaces that enhance the user experience while complementing the overall architectural vision.',
      slug: 'interior-architecture',
      image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80'
    },
    {
      icon: <Ruler size={36} />,
      title: 'Urban Planning',
      description: 'Our urban planning services focus on creating sustainable, vibrant, and functional community spaces.',
      slug: 'urban-planning',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80'
    },
    {
      icon: <Compass size={36} />,
      title: 'Project Management',
      description: 'We oversee every aspect of project execution to ensure quality, timeliness, and budget adherence.',
      slug: 'project-management',
      image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&q=80'
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of architectural services to bring your vision to life.
          </p>
        </div>
        
        <div className="space-y-12">
          {services.map((service, index) => (
            <Link
              to={`/service/${service.slug}`}
              key={index} 
              className="block bg-white border border-orange-100 rounded-2xl hover:shadow-lg transition-shadow animate-on-scroll hover:bg-orange-50/50 group overflow-hidden"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6 text-orange-500 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-medium mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <span className="inline-flex items-center text-sm font-medium text-orange-600 group/link">
                    Learn more
                    <ArrowRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* New "See All Services" button */}
        <div className="flex justify-center mt-16 animate-on-scroll">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-colors text-lg font-medium group"
          >
            See All Services
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
