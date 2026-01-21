import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Search, BarChart, Share2, Award, Globe, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
      staggerChildren: 0.15
    }
  }
};

export default function ServicesPage() {
  const services = [
    {
      icon: FileText,
      title: 'Article & Blog Writing',
      description: 'Engaging, research-backed articles and blog posts that resonate with your audience and drive traffic.',
      features: [
        'SEO-optimized content',
        'Industry research and analysis',
        'Compelling storytelling',
        'Regular content calendars',
        'Multiple revisions included'
      ]
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Comprehensive SEO strategies to improve your search rankings and increase organic visibility.',
      features: [
        'Keyword research and analysis',
        'On-page optimization',
        'Technical SEO audits',
        'Link building strategies',
        'Performance tracking and reporting'
      ]
    },
    {
      icon: BarChart,
      title: 'Research & Data Analysis',
      description: 'In-depth market research and data analysis to inform your business decisions and strategies.',
      features: [
        'Market research and insights',
        'Competitor analysis',
        'Data visualization',
        'Trend identification',
        'Actionable recommendations'
      ]
    },
    {
      icon: Share2,
      title: 'Social Media Promotion',
      description: 'Strategic social media campaigns that amplify your brand and engage your target audience.',
      features: [
        'Platform-specific strategies',
        'Content creation and scheduling',
        'Community management',
        'Paid advertising campaigns',
        'Analytics and optimization'
      ]
    },
    {
      icon: Award,
      title: 'Brand Awareness',
      description: 'Build a strong, recognizable brand that stands out in your industry and resonates with customers.',
      features: [
        'Brand strategy development',
        'Visual identity guidelines',
        'Messaging and positioning',
        'Multi-channel campaigns',
        'Brand monitoring and management'
      ]
    },
    {
      icon: Globe,
      title: 'Website Content',
      description: 'Professional website content that converts visitors into customers and reflects your brand voice.',
      features: [
        'Homepage and landing pages',
        'Product and service descriptions',
        'About and company pages',
        'SEO-optimized copy',
        'Conversion-focused writing'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Lead Generation',
      description: 'Targeted strategies to attract, capture, and nurture high-quality leads for your business.',
      features: [
        'Lead magnet creation',
        'Landing page optimization',
        'Email marketing campaigns',
        'Lead nurturing sequences',
        'Conversion rate optimization'
      ]
    }
  ];

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
              Our Services
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-20">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="bg-secondary p-12 rounded-lg flex items-center justify-center h-full min-h-[300px]">
                    <service.icon className="h-32 w-32 text-primary" />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="font-paragraph text-lg text-foreground/80 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        </div>
                        <span className="font-paragraph text-base text-foreground/70">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className="font-paragraph text-base px-8 py-6 rounded-lg">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
              Ready to Get Started?
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
              Let's discuss how our services can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button size="lg" className="font-paragraph text-base px-8 py-6 rounded-lg">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="font-paragraph text-base px-8 py-6 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
