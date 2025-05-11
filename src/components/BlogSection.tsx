
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogData';

export function BlogSection() {
  // Get only the first 3 posts for the homepage
  const featuredPosts = blogPosts.slice(0, 3);
  
  return (
    <section className="bg-orange-50/50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Recent Insights</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our latest thoughts on architecture, design trends, and sustainable building practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="animate-on-scroll"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link to={`/blog/${post.slug}`} className="block group">
                <div className="border border-orange-100 hover:border-orange-300 transition-all duration-500 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md h-full">
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
                  
                  <div className="p-5">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar size={16} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-lg font-medium mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
                      {post.summary}
                    </p>
                    <div className="flex items-center text-orange-600 font-medium">
                      <span className="text-sm">Read More</span>
                      <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link 
            to="/blogs" 
            className="inline-flex items-center px-6 py-3 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
          >
            View All Articles
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
