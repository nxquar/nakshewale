import { Building2, Users, Award, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ServicesSection() {
 const services = [
  {
    icon: <Building2 size={36} />,
    title: 'Architectural Design',
    description: 'Comprehensive architectural services that turn concepts into reality with sustainable and custom solutions.',
    slug: 'architectural-design',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
  },
  {
    icon: <Lightbulb size={36} />,
    title: 'Interior Architecture',
    description: 'Thoughtfully designed interiors that maximize space, comfort, and productivity.',
    slug: 'interior-architecture',
    image: 'https://cdn.pixabay.com/photo/2024/09/19/02/23/living-room-9057382_1280.png',
  },
  {
    icon: <Building2 size={36} />,
    title: '3D Elevation & Visualization',
    description: 'Stunning 3D elevations and walkthroughs that help you visualize your project before it’s built.',
    slug: '3d-elevation',
    image: 'https://yousee.studio/image/image-sizer.webp?image=%2Fstorage%2Fimages%2Fcontent%2F3d-floor-plan_2.jpg&width=2560',
  },
  {
    icon: <Award size={36} />,
    title: 'Government Approvals',
    description: 'Hassle-free handling of documentation and permits for construction compliance.',
    slug: 'government-approvals',
    image: 'https://cdn.pixabay.com/photo/2019/12/18/13/07/right-4703934_1280.jpg',
  },
];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design services for homeowners, developers, and businesses alike.
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
