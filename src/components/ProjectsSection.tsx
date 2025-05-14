import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArchitecturalElements } from './ArchitecturalElements';

type Project = {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  slug: string;
};

const projects = [
  {
    id: 1,
    title: 'Modern Residential Complex',
    category: 'Residential',
    imageUrl: 'https://rqxpdjistljirrpgomtb.supabase.co/storage/v1/object/sign/nakshewale/images/projects/1/WhatsApp%20Image%202025-05-12%20at%2014.07.57_a35b130c.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2NTczMmQzLTBiZTEtNGVlZi05M2Y5LWUyM2M5Y2EwYmM1MCJ9.eyJ1cmwiOiJuYWtzaGV3YWxlL2ltYWdlcy9wcm9qZWN0cy8xL1doYXRzQXBwIEltYWdlIDIwMjUtMDUtMTIgYXQgMTQuMDcuNTdfYTM1YjEzMGMuanBnIiwiaWF0IjoxNzQ3MjAxMjgxLCJleHAiOjQ5MDA4MDEyODF9.R3Z9A5lGOr464KIsr6Qo8Kyc6nG59sX0Ti-s5mjwsZg',
    description: 'A contemporary residential complex featuring sustainable materials and innovative design.',
    slug: 'modern-residential-complex',
  },
  {
    id: 2,
    title: 'Corporate Headquarters',
    category: 'Commercial',
    imageUrl: 'https://rqxpdjistljirrpgomtb.supabase.co/storage/v1/object/sign/nakshewale/images/projects/2/Screenshot%202025-05-13%20225317.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2NTczMmQzLTBiZTEtNGVlZi05M2Y5LWUyM2M5Y2EwYmM1MCJ9.eyJ1cmwiOiJuYWtzaGV3YWxlL2ltYWdlcy9wcm9qZWN0cy8yL1NjcmVlbnNob3QgMjAyNS0wNS0xMyAyMjUzMTcucG5nIiwiaWF0IjoxNzQ3MjAxMzA3LCJleHAiOjQ5MDA4MDEzMDd9.TO39TPFvskBFRgA1gNTMvCBteNhoTs0MqrRbx_7AsNM',
    description: 'An award-winning corporate headquarters that combines functionality with striking aesthetics.',
    slug: 'corporate-headquarters',
  },
  {
    id: 3,
    title: 'Urban Renewal Project',
    category: 'Urban Planning',
    imageUrl: 'https://rqxpdjistljirrpgomtb.supabase.co/storage/v1/object/sign/nakshewale/images/projects/3/WhatsApp%20Image%202025-05-12%20at%2014.06.36_ac882480.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2NTczMmQzLTBiZTEtNGVlZi05M2Y5LWUyM2M5Y2EwYmM1MCJ9.eyJ1cmwiOiJuYWtzaGV3YWxlL2ltYWdlcy9wcm9qZWN0cy8zL1doYXRzQXBwIEltYWdlIDIwMjUtMDUtMTIgYXQgMTQuMDYuMzZfYWM4ODI0ODAuanBnIiwiaWF0IjoxNzQ3MjAxMzMyLCJleHAiOjQ5MDA4MDEzMzJ9.uX2h0tgpoPokmvbUNsGz25nM1qgpFyLBmNXd4yU6q60',
    description: 'Transforming urban spaces into vibrant, sustainable community hubs.',
    slug: 'urban-renewal-project',
  },
  {
    id: 4,
    title: 'Guest House Commercial',
    category: 'Commercial',
    imageUrl: 'https://rqxpdjistljirrpgomtb.supabase.co/storage/v1/object/sign/nakshewale/images/projects/3/WhatsApp%20Image%202025-05-12%20at%2014.06.36_bbf87b29.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2NTczMmQzLTBiZTEtNGVlZi05M2Y5LWUyM2M5Y2EwYmM1MCJ9.eyJ1cmwiOiJuYWtzaGV3YWxlL2ltYWdlcy9wcm9qZWN0cy8zL1doYXRzQXBwIEltYWdlIDIwMjUtMDUtMTIgYXQgMTQuMDYuMzZfYmJmODdiMjkuanBnIiwiaWF0IjoxNzQ3MjAxMzY4LCJleHAiOjQ5MDA4MDEzNjh9.92aMNZ7MGmcSvJ4RqiIIefzGC9pWKPxMUMpljYMrPSs',
    description: 'A comfortable guest house with strong commercial appeal.',
    slug: 'guest-house-commercial',
  },
  {
    id: 5,
    title: 'Modern Residential Complex',
    category: 'Residential',
    imageUrl: 'https://rqxpdjistljirrpgomtb.supabase.co/storage/v1/object/sign/nakshewale/images/projects/3/WhatsApp%20Image%202025-05-12%20at%2014.06.37_7b72a57a.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2NTczMmQzLTBiZTEtNGVlZi05M2Y5LWUyM2M5Y2EwYmM1MCJ9.eyJ1cmwiOiJuYWtzaGV3YWxlL2ltYWdlcy9wcm9qZWN0cy8zL1doYXRzQXBwIEltYWdlIDIwMjUtMDUtMTIgYXQgMTQuMDYuMzdfN2I3MmE1N2EuanBnIiwiaWF0IjoxNzQ3MjAxMzg5LCJleHAiOjQ5MDA4MDEzODl9.eh2hLpuGJp_vx4-IQdDDV8Lco_P2veLlu_biS5tJai4',
    description: 'A contemporary residential complex featuring sustainable materials and innovative design.',
    slug: 'modern-residential-complex',
  },
  {
    id: 6,
    title: 'Corporate Headquarters',
    category: 'Commercial',
    imageUrl: 'https://rqxpdjistljirrpgomtb.supabase.co/storage/v1/object/sign/nakshewale/images/projects/real/WhatsApp%20Image%202025-05-13%20at%2021.37.04_5ac71100.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2NTczMmQzLTBiZTEtNGVlZi05M2Y5LWUyM2M5Y2EwYmM1MCJ9.eyJ1cmwiOiJuYWtzaGV3YWxlL2ltYWdlcy9wcm9qZWN0cy9yZWFsL1doYXRzQXBwIEltYWdlIDIwMjUtMDUtMTMgYXQgMjEuMzcuMDRfNWFjNzExMDAuanBnIiwiaWF0IjoxNzQ3MjAxNTExLCJleHAiOjQ5MDA4MDE1MTF9.habJSusNjomQ5ePF9gQHhyN8TzxI7buiUsqUClgNtA8',
    description: 'An award-winning corporate headquarters that combines functionality with striking aesthetics.',
    slug: 'corporate-headquarters',
  },
  {
    id: 7,
    title: 'Urban Renewal Project',
    category: 'Urban Planning',
    imageUrl: 'https://rqxpdjistljirrpgomtb.supabase.co/storage/v1/object/sign/nakshewale/images/projects/3/WhatsApp%20Image%202025-05-12%20at%2014.06.37_aa20a85e.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2NTczMmQzLTBiZTEtNGVlZi05M2Y5LWUyM2M5Y2EwYmM1MCJ9.eyJ1cmwiOiJuYWtzaGV3YWxlL2ltYWdlcy9wcm9qZWN0cy8zL1doYXRzQXBwIEltYWdlIDIwMjUtMDUtMTIgYXQgMTQuMDYuMzdfYWEyMGE4NWUuanBnIiwiaWF0IjoxNzQ3MjAxNDE1LCJleHAiOjQ5MDA4MDE0MTV9.4Ehkz-_S4vJplfbFQf2ORBSB7ZdLXDFH8ZLxPY9An-Y',
    description: 'Transforming urban spaces into vibrant, sustainable community hubs.',
    slug: 'urban-renewal-project',
  },
  {
    id: 8,
    title: 'Guest House Commercial',
    category: 'Commercial',
    imageUrl: 'https://rqxpdjistljirrpgomtb.supabase.co/storage/v1/object/sign/nakshewale/images/projects/3/WhatsApp%20Image%202025-05-12%20at%2014.06.37_f4c6adef.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2NTczMmQzLTBiZTEtNGVlZi05M2Y5LWUyM2M5Y2EwYmM1MCJ9.eyJ1cmwiOiJuYWtzaGV3YWxlL2ltYWdlcy9wcm9qZWN0cy8zL1doYXRzQXBwIEltYWdlIDIwMjUtMDUtMTIgYXQgMTQuMDYuMzdfZjRjNmFkZWYuanBnIiwiaWF0IjoxNzQ3MjAxNDU2LCJleHAiOjQ5MDA4MDE0NTZ9.zm5BAFIG652pVzIFIDonA7b_GNjfw5welwv7cW1Z_go',
    description: 'A comfortable guest house with strong commercial appeal.',
    slug: 'guest-house-commercial',
  }
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Residential', 'Commercial', 'Urban Planning'];
  const [animationReady, setAnimationReady] = useState(false);
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  useEffect(() => {
    setTimeout(() => {
      setAnimationReady(true);
    }, 300);
  }, []);

  return (
    <section id="projects" className="section-padding bg-white relative">
      <ArchitecturalElements variant="light" density="low" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="animate-on-scroll slide-up"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-2">Our Projects</h2>
          <p className="text-muted-foreground mb-10">Discover our portfolio of architectural excellence</p>
          
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm transition-all duration-300 rounded-full ${
                  activeCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-orange-100 hover:bg-orange-200 text-orange-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Link 
              to={`/project/${project.slug}`} 
              key={project.id} 
              className={`group overflow-hidden bg-white transition-all duration-500 animate-on-scroll slide-up ${
                animationReady ? 'animated' : ''
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                border: '1px solid rgba(249, 115, 22, 0.1)' 
              }}
            >
              <div className="flex flex-col h-full rounded-2xl shadow-sm hover:shadow-lg overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-orange-500/0 to-orange-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm uppercase tracking-wider mb-1">{project.category}</p>
                      <h3 className="text-xl font-medium">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-sm uppercase tracking-wider text-orange-500 mb-1">{project.category}</p>
                  <h3 className="text-xl font-medium mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <span className="inline-flex items-center text-sm font-medium text-orange-600 group/link">
                    View project details
                    <ArrowRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}