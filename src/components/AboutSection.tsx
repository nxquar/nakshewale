
import { Building2, Users, Award, Lightbulb } from 'lucide-react';
import { AnimatedPhotoElements } from './AnimatedPhotoElements';

export function AboutSection() {
  const stats = [
    { value: '20+', label: 'Years Experience' },
    { value: '150+', label: 'Projects Completed' },
    { value: '15', label: 'Team Members' },
    { value: '12', label: 'Design Awards' },
  ];
  
  const values = [
    { 
      icon: <Building2 size={24} />, 
      title: 'Innovative Design', 
      description: 'We push boundaries to create spaces that inspire and elevate the human experience.' 
    },
    { 
      icon: <Users size={24} />, 
      title: 'Client Focus', 
      description: 'Our collaborative approach ensures that each project perfectly aligns with our clients\' vision.' 
    },
    { 
      icon: <Award size={24} />, 
      title: 'Excellence', 
      description: 'We maintain the highest standards in every aspect of our architectural practice.' 
    },
    { 
      icon: <Lightbulb size={24} />, 
      title: 'Sustainability', 
      description: 'We integrate eco-friendly solutions that minimize environmental impact.' 
    },
  ];

  return (
    <section id="about" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="animate-on-scroll px-6">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">About Yurdaer Mimarlik</h2>
            <p className="text-lg mb-4">
              Founded in 2000, Yurdaer Mimarlik has established itself as a leading architectural practice committed to creating spaces that inspire, function perfectly, and stand the test of time.
            </p>
            <p className="text-muted-foreground mb-5">
              Our diverse team of architects, designers, and planners brings together extensive expertise and creative thinking to deliver exceptional architectural solutions across residential, commercial, and public sectors.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-3 rounded-xl bg-orange-50/50 border border-orange-100">
                  <p className="text-2xl font-serif font-bold text-orange-600">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="inline-block border border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
            >
              Get in touch
            </a>
          </div>
          
          <div className="animate-on-scroll relative px-6 lg:px-0">
            <AnimatedPhotoElements />
            
            {/* Floating project counter card */}
            <div className="absolute z-10 -bottom-4 -left-4 md:left-4 bg-orange-500 text-white px-5 py-4 rounded-xl shadow-lg floating-card">
              <div className="text-4xl font-serif font-bold">100+</div>
              <div className="text-sm">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
