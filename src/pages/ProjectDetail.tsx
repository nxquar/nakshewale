
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Calendar, User, Building, Grid, ChevronRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MapComponent } from '@/components/MapComponent';
import { AppointmentCard } from '@/components/AppointmentCard';
import { ConsultationCard } from '@/components/ConsultationCard';

// Project data
const projects = [
  {
    id: 1,
    title: 'Modern Residential Complex',
    category: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80',
    description: 'A contemporary residential complex featuring sustainable materials and innovative design.',
    slug: 'modern-residential-complex',
    details: {
      client: 'Residential Development Corp.',
      date: 'January 2023',
      location: 'Istanbul, Turkey',
      area: '12,000 m²',
      fullDescription: 'This modern residential complex represents our commitment to creating living spaces that balance aesthetics with functionality. Featuring 45 units ranging from studio apartments to three-bedroom residences, the complex integrates sustainable building materials and energy-efficient systems throughout. The design incorporates abundant natural light, versatile communal spaces, and a cohesive relationship with the surrounding landscape.',
      images: [
        'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80'
      ]
    }
  },
  {
    id: 2,
    title: 'Corporate Headquarters',
    category: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&q=80',
    description: 'An award-winning corporate headquarters that combines functionality with striking aesthetics.',
    slug: 'corporate-headquarters',
    details: {
      client: 'Global Tech Inc.',
      date: 'March 2022',
      location: 'Ankara, Turkey',
      area: '8,500 m²',
      fullDescription: 'This corporate headquarters was designed to reflect the innovative spirit of our client while providing a functional workspace that enhances collaboration and productivity. The building features a striking glass facade that maximizes natural light while minimizing solar gain. The interior spaces are organized around a central atrium that serves as both a visual anchor and a gathering space for employees and visitors.',
      images: [
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80'
      ]
    }
  },
  {
    id: 3,
    title: 'Urban Renewal Project',
    category: 'Urban Planning',
    imageUrl: 'https://images.unsplash.com/photo-1498936178812-4b2e558d2937?auto=format&fit=crop&q=80',
    description: 'Transforming urban spaces into vibrant, sustainable community hubs.',
    slug: 'urban-renewal-project',
    details: {
      client: 'City Municipality',
      date: 'July 2021',
      location: 'Istanbul, Turkey',
      area: '25,000 m²',
      fullDescription: 'This urban renewal project transformed an underutilized industrial area into a vibrant mixed-use district that serves as a hub for community activities, commerce, and culture. The master plan preserves several historic industrial buildings while introducing new structures that complement the existing urban fabric. Public spaces, including parks, plazas, and pedestrian corridors, weave through the development to create a cohesive and accessible environment.',
      images: [
        'https://images.unsplash.com/photo-1533832100063-f52ef5c25ff2?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1548275147-72271d07dff3?auto=format&fit=crop&q=80'
      ]
    }
  },
  {
    id: 4,
    title: 'Cultural Center',
    category: 'Public',
    imageUrl: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&q=80',
    description: 'A multifunctional cultural center that serves as a landmark for the community.',
    slug: 'cultural-center',
    details: {
      client: 'Ministry of Culture',
      date: 'November 2022',
      location: 'Izmir, Turkey',
      area: '6,800 m²',
      fullDescription: 'This cultural center was conceived as both a functional venue for various cultural activities and a landmark that contributes to the identity of the community. The building houses a 400-seat theater, exhibition spaces, workshops, and educational facilities. Its distinctive form draws inspiration from traditional Turkish architectural motifs, reinterpreted in a contemporary language. The center serves as a catalyst for cultural engagement and civic pride.',
      images: [
        'https://images.unsplash.com/photo-1529084177577-4228cdcc0ad1?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1542069774-d61b8a242e1c?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1575252056748-20f24b5f0630?auto=format&fit=crop&q=80'
      ]
    }
  },
  {
    id: 5,
    title: 'Luxury Villa',
    category: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&q=80',
    description: 'An exclusive seaside villa that harmonizes with its natural surroundings.',
    slug: 'luxury-villa',
    details: {
      client: 'Private Client',
      date: 'August 2023',
      location: 'Bodrum, Turkey',
      area: '950 m²',
      fullDescription: 'This luxury seaside villa was designed to create a seamless connection between indoor living spaces and the magnificent coastal landscape. The architecture emphasizes horizontal planes and transparent boundaries that frame views of the sea and surrounding hills. Natural materials, including local stone and timber, establish a visual harmony with the site while providing thermal mass for passive climate control. The villa includes five bedroom suites, expansive living areas, and a range of amenity spaces.',
      images: [
        'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1618221058355-6a0587d9edbc?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80'
      ]
    }
  },
  {
    id: 6,
    title: 'Tech Innovation Campus',
    category: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?auto=format&fit=crop&q=80',
    description: 'A sustainable campus designed for innovation and collaboration.',
    slug: 'tech-innovation-campus',
    details: {
      client: 'Tech Solutions Group',
      date: 'February 2022',
      location: 'Istanbul, Turkey',
      area: '15,000 m²',
      fullDescription: 'This technology innovation campus creates an environment that fosters creativity, collaboration, and well-being for employees and visitors. The project comprises four interconnected buildings organized around a central courtyard that serves as the heart of the campus. The architecture employs a modular system that allows for flexibility and future adaptation. Sustainable features include photovoltaic arrays, green roofs, rainwater harvesting, and efficient building systems that minimize energy consumption.',
      images: [
        'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80'
      ]
    }
  }
];

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

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
  
  if (!project) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-serif mb-4">Project not found</h2>
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
            <Link to="/#projects" className="hover:text-orange-500">Projects</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-orange-500">{project.title}</span>
          </div>
        </div>
        
        {/* Hero Section */}
        <div className="container mx-auto px-6 md:px-16 lg:px-24 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="max-w-2xl animate-on-scroll slide-up">
              <Link to="/#projects" className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-6">
                <ArrowLeft size={16} className="mr-2" />
                Back to Projects
              </Link>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">{project.title}</h1>
              <p className="text-lg text-muted-foreground mb-8">{project.details.fullDescription}</p>
              
              {/* Project Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 border-t border-b py-6 mb-8">
                <div className="flex items-start">
                  <Calendar size={20} className="mr-3 text-orange-500 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p>{project.details.date}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User size={20} className="mr-3 text-orange-500 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Client</p>
                    <p>{project.details.client}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Building size={20} className="mr-3 text-orange-500 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p>{project.details.location}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Grid size={20} className="mr-3 text-orange-500 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Area</p>
                    <p>{project.details.area}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Project Images */}
        <div className="container mx-auto px-6 md:px-16 lg:px-24 mb-20">
          {/* Main Image */}
          <div className="mb-8 rounded-3xl overflow-hidden shadow-lg animate-on-scroll">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-[50vh] md:h-[70vh] object-cover"
            />
          </div>
          
          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.details.images.map((img, index) => (
              <div 
                key={index} 
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all animate-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img 
                  src={img} 
                  alt={`${project.title} - Detail ${index + 1}`} 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <AppointmentCard></AppointmentCard>
      <ConsultationCard></ConsultationCard>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
