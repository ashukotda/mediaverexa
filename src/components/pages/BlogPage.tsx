import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'SEO', 'Content Marketing', 'Research', 'Social Media', 'Digital Strategy'];

  const blogPosts = [
    {
      id: '1',
      title: 'The Ultimate Guide to SEO in 2026',
      excerpt: 'Discover the latest SEO strategies and techniques that will help your website rank higher in search results.',
      category: 'SEO',
      author: 'Sarah Johnson',
      date: '2026-01-15',
      readTime: '8 min read',
      image: 'https://static.wixstatic.com/media/0eba7f_bab70bc9c0fb44c7923400439195d39f~mv2.png?originWidth=576&originHeight=320'
    },
    {
      id: '2',
      title: 'Content Marketing Trends to Watch',
      excerpt: 'Stay ahead of the curve with these emerging content marketing trends that are shaping the industry.',
      category: 'Content Marketing',
      author: 'Michael Chen',
      date: '2026-01-12',
      readTime: '6 min read',
      image: 'https://static.wixstatic.com/media/0eba7f_33ced7476dc24e95a6856e6e9f952151~mv2.png?originWidth=576&originHeight=320'
    },
    {
      id: '3',
      title: 'How Data-Driven Research Improves Content',
      excerpt: 'Learn how incorporating research and data analysis can elevate your content strategy and drive better results.',
      category: 'Research',
      author: 'Emily Rodriguez',
      date: '2026-01-10',
      readTime: '10 min read',
      image: 'https://static.wixstatic.com/media/0eba7f_8475e3110dbc4bbba66107f1ca96f730~mv2.png?originWidth=576&originHeight=320'
    },
    {
      id: '4',
      title: 'Social Media Algorithm Changes Explained',
      excerpt: 'Understanding the latest social media algorithm updates and how to adapt your strategy accordingly.',
      category: 'Social Media',
      author: 'David Kim',
      date: '2026-01-08',
      readTime: '7 min read',
      image: 'https://static.wixstatic.com/media/0eba7f_23ac78df5abe42ceae18c591e8f91b32~mv2.png?originWidth=576&originHeight=320'
    },
    {
      id: '5',
      title: 'Building a Comprehensive Digital Strategy',
      excerpt: 'A step-by-step guide to creating a digital strategy that aligns with your business goals and drives growth.',
      category: 'Digital Strategy',
      author: 'Sarah Johnson',
      date: '2026-01-05',
      readTime: '12 min read',
      image: 'https://static.wixstatic.com/media/0eba7f_e938ec231d7243eab94d9529ebe99283~mv2.png?originWidth=576&originHeight=320'
    },
    {
      id: '6',
      title: 'The Power of Long-Form Content',
      excerpt: 'Why long-form content continues to dominate search rankings and how to create compelling in-depth articles.',
      category: 'Content Marketing',
      author: 'Michael Chen',
      date: '2026-01-03',
      readTime: '9 min read',
      image: 'https://static.wixstatic.com/media/0eba7f_176109c1619a424a80be4bc4ad115b88~mv2.png?originWidth=576&originHeight=320'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full pt-32 pb-20 px-8">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-6">
              Our Blog
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
              Insights, strategies, and research from the world of digital content and marketing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="w-full pb-12 px-8">
        <div className="max-w-[100rem] mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-foreground/40" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 font-paragraph"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-lg font-paragraph text-sm transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-foreground hover:bg-primary/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="w-full py-12 px-8">
        <div className="max-w-[100rem] mx-auto min-h-[600px]">
          {filteredPosts.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  variants={fadeInUp}
                  className="bg-secondary rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <Link to={`/blog/${post.id}`}>
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded text-xs font-paragraph font-semibold">
                          {post.category}
                        </span>
                      </div>
                      <h2 className="font-heading text-xl text-foreground mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="font-paragraph text-base text-foreground/70 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-foreground/60">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span className="font-paragraph">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span className="font-paragraph">{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-foreground/10">
                        <span className="font-paragraph text-sm text-foreground/70">
                          By {post.author}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <p className="font-paragraph text-lg text-foreground/70">
                No articles found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              Want to Work With Us?
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
              Let's create research-backed content that drives real results for your business.
            </p>
            <Link to="/contact">
              <Button size="lg" className="font-paragraph text-base px-8 py-6 rounded-lg">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
