import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();

  // Mock blog post data - in a real app, this would be fetched based on the id
  const blogPosts: Record<string, any> = {
    '1': {
      title: 'The Ultimate Guide to SEO in 2026',
      content: `
        <p>Search Engine Optimization continues to evolve, and staying ahead of the curve is crucial for digital success. In this comprehensive guide, we'll explore the latest SEO strategies and techniques that will help your website rank higher in search results.</p>

        <h2>Understanding Modern SEO</h2>
        <p>SEO in 2026 is about more than just keywords and backlinks. It's about creating a holistic digital experience that serves both users and search engines. The focus has shifted towards user intent, content quality, and technical excellence.</p>

        <h2>Key SEO Strategies for 2026</h2>
        <h3>1. User Experience Optimization</h3>
        <p>Google's algorithms now prioritize websites that offer exceptional user experiences. This includes fast loading times, mobile responsiveness, intuitive navigation, and engaging content that keeps visitors on your site.</p>

        <h3>2. Content Quality and Depth</h3>
        <p>Gone are the days of thin content and keyword stuffing. Modern SEO demands comprehensive, well-researched content that thoroughly addresses user queries. Long-form content that provides real value continues to dominate search rankings.</p>

        <h3>3. Technical SEO Excellence</h3>
        <p>Technical SEO remains a critical foundation. This includes proper site architecture, clean code, fast page speeds, secure connections (HTTPS), and proper implementation of structured data markup.</p>

        <h2>The Role of AI in SEO</h2>
        <p>Artificial intelligence is transforming how search engines understand and rank content. Understanding AI-driven search algorithms and optimizing for semantic search is now essential for SEO success.</p>

        <h2>Measuring SEO Success</h2>
        <p>Track key metrics including organic traffic, keyword rankings, conversion rates, and user engagement metrics. Use tools like Google Analytics and Search Console to monitor performance and identify opportunities for improvement.</p>

        <h2>Conclusion</h2>
        <p>SEO in 2026 requires a balanced approach that combines technical excellence, high-quality content, and exceptional user experience. By implementing these strategies, you'll be well-positioned to achieve and maintain strong search rankings.</p>
      `,
      category: 'SEO',
      author: 'Sarah Johnson',
      date: '2026-01-15',
      readTime: '8 min read',
      image: 'https://static.wixstatic.com/media/0eba7f_dcdc9a657e73409d90e8b3cfa8a79770~mv2.png?originWidth=1152&originHeight=576'
    },
    '2': {
      title: 'Content Marketing Trends to Watch',
      content: `
        <p>The content marketing landscape is constantly evolving. To stay competitive, businesses must adapt to emerging trends and leverage new opportunities. Here are the key content marketing trends shaping the industry in 2026.</p>

        <h2>Personalization at Scale</h2>
        <p>Audiences expect personalized content experiences. Advanced analytics and AI tools now make it possible to deliver tailored content to different audience segments at scale, improving engagement and conversion rates.</p>

        <h2>Interactive Content</h2>
        <p>Static content is giving way to interactive experiences. Quizzes, calculators, assessments, and interactive infographics drive higher engagement and provide valuable data about your audience.</p>

        <h2>Video Content Dominance</h2>
        <p>Video continues to dominate content consumption. Short-form videos, live streaming, and video podcasts are essential components of a modern content strategy.</p>

        <h2>Voice Search Optimization</h2>
        <p>With the rise of voice assistants, optimizing content for voice search is crucial. This means focusing on conversational keywords and providing direct answers to common questions.</p>

        <h2>Sustainability and Purpose-Driven Content</h2>
        <p>Consumers increasingly support brands that align with their values. Content that highlights sustainability efforts, social responsibility, and brand purpose resonates strongly with modern audiences.</p>

        <h2>Conclusion</h2>
        <p>Staying ahead in content marketing requires continuous adaptation and innovation. By embracing these trends, you can create content that truly connects with your audience and drives business results.</p>
      `,
      category: 'Content Marketing',
      author: 'Michael Chen',
      date: '2026-01-12',
      readTime: '6 min read',
      image: 'https://static.wixstatic.com/media/0eba7f_ca72877f28724a6dbf973c6eec5807f1~mv2.png?originWidth=1152&originHeight=576'
    },
    '3': {
      title: 'How Data-Driven Research Improves Content',
      content: `
        <p>In today's competitive digital landscape, creating content based on intuition alone is no longer sufficient. Data-driven research provides the insights needed to create content that truly resonates with your audience and achieves your business objectives.</p>

        <h2>The Power of Data in Content Creation</h2>
        <p>Data-driven research transforms content creation from guesswork into a strategic process. By analyzing audience behavior, search trends, and competitive landscapes, you can create content that addresses real needs and interests.</p>

        <h2>Key Research Methods</h2>
        <h3>Audience Analysis</h3>
        <p>Understanding your audience through demographic data, behavioral patterns, and psychographic insights allows you to create content that speaks directly to their needs and preferences.</p>

        <h3>Keyword Research</h3>
        <p>Comprehensive keyword research reveals what your audience is searching for, helping you create content that captures organic traffic and addresses user intent.</p>

        <h3>Competitive Analysis</h3>
        <p>Analyzing competitor content helps identify gaps in the market and opportunities to create superior, more comprehensive content.</p>

        <h2>Implementing Research Insights</h2>
        <p>The key to success is translating research insights into actionable content strategies. This includes topic selection, content format decisions, and optimization tactics based on data-driven findings.</p>

        <h2>Measuring Content Performance</h2>
        <p>Continuous measurement and analysis of content performance allows for ongoing optimization and improvement. Track metrics like engagement rates, conversion rates, and SEO performance to refine your strategy.</p>

        <h2>Conclusion</h2>
        <p>Data-driven research is the foundation of effective content marketing. By grounding your content strategy in solid research and analysis, you can create content that delivers measurable results and drives business growth.</p>
      `,
      category: 'Research',
      author: 'Emily Rodriguez',
      date: '2026-01-10',
      readTime: '10 min read',
      image: 'https://static.wixstatic.com/media/0eba7f_680bf79070e941c28492218b9ee9c841~mv2.png?originWidth=1152&originHeight=576'
    },
    '4': {
      title: 'Social Media Algorithm Changes Explained',
      content: `
        <p>Social media algorithms are constantly evolving, and understanding these changes is crucial for maintaining and growing your social media presence. Let's break down the latest algorithm updates and how to adapt your strategy.</p>

        <h2>Understanding Algorithm Basics</h2>
        <p>Social media algorithms determine what content users see in their feeds. These algorithms prioritize content based on various factors including engagement, relevance, timeliness, and user relationships.</p>

        <h2>Recent Algorithm Changes</h2>
        <h3>Emphasis on Authentic Engagement</h3>
        <p>Platforms are increasingly prioritizing genuine interactions over vanity metrics. Content that sparks meaningful conversations and authentic engagement receives better visibility.</p>

        <h3>Video Content Priority</h3>
        <p>Most platforms now give preference to video content, particularly short-form videos and live streams, in their algorithms.</p>

        <h3>Reduced Organic Reach</h3>
        <p>Organic reach continues to decline across platforms, making paid promotion and highly engaging content more important than ever.</p>

        <h2>Adapting Your Strategy</h2>
        <p>To succeed with current algorithms, focus on creating high-quality, engaging content that encourages interaction. Build genuine relationships with your audience, post consistently, and leverage platform-specific features like Stories and Reels.</p>

        <h2>Best Practices</h2>
        <p>Post at optimal times when your audience is most active, use relevant hashtags strategically, engage with your community promptly, and experiment with different content formats to see what resonates best.</p>

        <h2>Conclusion</h2>
        <p>While algorithm changes can be challenging, they ultimately reward quality content and authentic engagement. By understanding and adapting to these changes, you can maintain and grow your social media presence effectively.</p>
      `,
      category: 'Social Media',
      author: 'David Kim',
      date: '2026-01-08',
      readTime: '7 min read',
      image: 'https://static.wixstatic.com/media/0eba7f_eca906c1bebf4605b82db60a1955480b~mv2.png?originWidth=1152&originHeight=576'
    },
    '5': {
      title: 'Building a Comprehensive Digital Strategy',
      content: `
        <p>A comprehensive digital strategy is essential for business success in today's connected world. This guide will walk you through the process of creating a digital strategy that aligns with your business goals and drives measurable results.</p>

        <h2>Defining Your Digital Objectives</h2>
        <p>Start by clearly defining what you want to achieve with your digital presence. Whether it's increasing brand awareness, generating leads, or driving sales, your objectives should be specific, measurable, and aligned with overall business goals.</p>

        <h2>Understanding Your Audience</h2>
        <p>Deep audience understanding is the foundation of any successful digital strategy. Create detailed buyer personas, map customer journeys, and identify key touchpoints where your digital presence can make an impact.</p>

        <h2>Channel Selection and Integration</h2>
        <p>Not all digital channels are right for every business. Choose channels based on where your audience spends time and how they prefer to engage. Ensure your presence across channels is integrated and consistent.</p>

        <h2>Content Strategy Development</h2>
        <p>Develop a content strategy that supports your objectives and resonates with your audience. This includes content themes, formats, distribution channels, and a sustainable content creation process.</p>

        <h2>Technology and Tools</h2>
        <p>Select the right technology stack to support your digital strategy. This includes your website platform, marketing automation tools, analytics platforms, and social media management tools.</p>

        <h2>Measurement and Optimization</h2>
        <p>Establish KPIs and measurement frameworks to track progress toward your objectives. Regular analysis and optimization ensure your strategy continues to deliver results.</p>

        <h2>Conclusion</h2>
        <p>A well-crafted digital strategy provides a roadmap for success in the digital landscape. By following these steps and maintaining flexibility to adapt as needed, you can build a digital presence that drives real business results.</p>
      `,
      category: 'Digital Strategy',
      author: 'Sarah Johnson',
      date: '2026-01-05',
      readTime: '12 min read',
      image: 'https://static.wixstatic.com/media/0eba7f_175fff096ee64b45b52d9db58679d2ea~mv2.png?originWidth=1152&originHeight=576'
    },
    '6': {
      title: 'The Power of Long-Form Content',
      content: `
        <p>In an era of short attention spans and bite-sized content, long-form content continues to dominate search rankings and drive engagement. Here's why long-form content matters and how to create compelling in-depth articles.</p>

        <h2>Why Long-Form Content Works</h2>
        <p>Long-form content (typically 2,000+ words) performs better in search rankings because it provides comprehensive coverage of topics, naturally incorporates more keywords, and keeps readers engaged longer—all signals that search engines value.</p>

        <h2>Benefits of Long-Form Content</h2>
        <h3>Better SEO Performance</h3>
        <p>Long-form content tends to rank higher in search results and attracts more backlinks, both crucial factors for SEO success.</p>

        <h3>Increased Authority</h3>
        <p>Comprehensive, well-researched content establishes your brand as an authority in your field, building trust with your audience.</p>

        <h3>Higher Engagement</h3>
        <p>When done well, long-form content keeps readers engaged longer, reducing bounce rates and increasing the likelihood of conversions.</p>

        <h2>Creating Effective Long-Form Content</h2>
        <p>Start with thorough research to ensure your content is comprehensive and accurate. Use clear structure with headings and subheadings, incorporate visuals to break up text, and ensure every section adds value.</p>

        <h2>Optimization Tips</h2>
        <p>Make long-form content scannable with bullet points, short paragraphs, and clear headings. Include a table of contents for easy navigation, and optimize for featured snippets by answering common questions directly.</p>

        <h2>Conclusion</h2>
        <p>Long-form content remains a powerful tool for SEO, authority building, and audience engagement. By investing in comprehensive, high-quality content, you can achieve lasting results in your content marketing efforts.</p>
      `,
      category: 'Content Marketing',
      author: 'Michael Chen',
      date: '2026-01-03',
      readTime: '9 min read',
      image: 'https://static.wixstatic.com/media/0eba7f_03bc780f7add4824ae5eeb246ee08153~mv2.png?originWidth=1152&originHeight=576'
    }
  };

  const post = id ? blogPosts[id] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-[100rem] mx-auto px-8 py-32 text-center">
          <h1 className="font-heading text-4xl text-foreground mb-4">Post Not Found</h1>
          <p className="font-paragraph text-lg text-foreground/70 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blog">
            <Button className="font-paragraph text-base px-8 py-6 rounded-lg">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full pt-32 pb-12 px-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 font-paragraph text-base text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded text-sm font-paragraph font-semibold">
                {post.category}
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl text-foreground mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-foreground/60 mb-8">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span className="font-paragraph text-base">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span className="font-paragraph text-base">
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span className="font-paragraph text-base">{post.readTime}</span>
              </div>
            </div>
            <Button variant="outline" className="font-paragraph text-base px-6 py-5 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Share2 className="mr-2 h-5 w-5" />
              Share Article
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="w-full pb-12 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="aspect-video rounded-lg overflow-hidden"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="w-full py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="prose prose-lg max-w-none"
            style={{
              fontFamily: 'var(--font-paragraph)',
            }}
          >
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75',
                color: 'var(--foreground)',
              }}
            />
          </motion.article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 mb-8">
              Let's create research-backed content that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="font-paragraph text-base px-8 py-6 rounded-lg">
                  Get in Touch
                </Button>
              </Link>
              <Link to="/blog">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="font-paragraph text-base px-8 py-6 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  More Articles
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .blog-content h2 {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 700;
          color: var(--foreground);
          margin-top: 3rem;
          margin-bottom: 1.5rem;
        }
        .blog-content h3 {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--foreground);
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .blog-content p {
          font-family: var(--font-paragraph);
          margin-bottom: 1.5rem;
          color: rgba(51, 51, 51, 0.8);
        }
      `}</style>

      <Footer />
    </div>
  );
}
