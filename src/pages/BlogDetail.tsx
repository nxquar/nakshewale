
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { ArchitecturalElements } from '../components/ArchitecturalElements';
import { AppointmentCard } from '../components/AppointmentCard';
import { blogPosts } from '../data/blogData';
import { ConsultationCard } from '@/components/ConsultationCard';

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState(blogPosts[0]);
  
  useEffect(() => {
    const foundBlog = blogPosts.find(post => post.slug === slug) || blogPosts[0];
    setBlog(foundBlog);
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed inset-0 pointer-events-none z-0">
        <ArchitecturalElements variant="light" density="low" position="top-right" />
      </div>
      <Navbar />
      <main className="relative z-10 flex-1">
        <div className="pt-32 pb-20 px-6 md:px-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm text-orange-500 mb-2 block">{blog.category} • {blog.date}</span>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">{blog.title}</h1>
            <div className="relative w-full aspect-[16/9] mb-10 rounded-xl overflow-hidden">
              <img 
                src={blog.imageUrl} 
                alt={blog.title} 
                className="object-cover w-full h-full"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground font-light mb-8">{blog.summary}</p>
              
              {blog.content.map((paragraph, i) => (
                <p key={i} className="mb-6">{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
        
        <section className="py-16 bg-orange-50">
          <div className="max-w-5xl mx-auto px-6">
            <AppointmentCard />
              
                  <ConsultationCard></ConsultationCard>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default BlogDetail;
