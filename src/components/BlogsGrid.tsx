
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogData';

export function BlogsGrid() {
  const [animationReady, setAnimationReady] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setAnimationReady(true);
    }, 300);
  }, []);

  return (
    <section className="pb-16 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className={`animate-on-scroll slide-up ${animationReady ? 'animated' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
          >
            <Link to={`/blog/${post.slug}`} className="block group">
              <div className="border border-orange-100 hover:border-orange-300 transition-all duration-500 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
                    <div className="p-4">
                      <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs rounded-full mb-2">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar size={16} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.summary}
                  </p>
                  <div className="flex items-center text-orange-600 font-medium">
                    <span className="text-sm">Read More</span>
                    <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
