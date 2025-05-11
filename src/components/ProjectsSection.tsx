
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
    imageUrl: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80',
    description: 'A contemporary residential complex featuring sustainable materials and innovative design.',
    slug: 'modern-residential-complex',
  },
  {
    id: 2,
    title: 'Corporate Headquarters',
    category: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&q=80',
    description: 'An award-winning corporate headquarters that combines functionality with striking aesthetics.',
    slug: 'corporate-headquarters',
  },
  {
    id: 3,
    title: 'Urban Renewal Project',
    category: 'Urban Planning',
    imageUrl: 'https://images.unsplash.com/photo-1498936178812-4b2e558d2937?auto=format&fit=crop&q=80',
    description: 'Transforming urban spaces into vibrant, sustainable community hubs.',
    slug: 'urban-renewal-project',
  },
  {
    id: 4,
    title: 'Cultural Center',
    category: 'Public',
    imageUrl: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&q=80',
    description: 'A multifunctional cultural center that serves as a landmark for the community.',
    slug: 'cultural-center',
  },
  {
    id: 5,
    title: 'Luxury Villa',
    category: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&q=80',
    description: 'An exclusive seaside villa that harmonizes with its natural surroundings.',
    slug: 'luxury-villa',
  },
  {
    id: 6,
    title: 'Tech Innovation Campus',
    category: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?auto=format&fit=crop&q=80',
    description: 'A sustainable campus designed for innovation and collaboration.',
    slug: 'tech-innovation-campus',
  },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Residential', 'Commercial', 'Public', 'Urban Planning'];
  const [animationReady, setAnimationReady] = useState(false);
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  useEffect(() => {
    // Set animation delay
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
          
          {/* Category Filter - with rounded buttons */}
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
        
        {/* Standard Grid - Equal sized items in a responsive grid */}
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
