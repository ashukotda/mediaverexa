import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, TrendingUp, Users, Zap, Shield } from 'lucide-react';
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

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest quality in every project, ensuring exceptional results.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Ethical practices and transparency guide all our client relationships.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace cutting-edge strategies and creative solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together with clients to achieve shared success.'
    }
  ];

  const usps = [
    {
      icon: Target,
      title: 'Research-Backed Content',
      description: 'Every piece of content is grounded in thorough research and data analysis, ensuring accuracy and relevance.'
    },
    {
      icon: TrendingUp,
      title: 'Integrated SEO + Content + Promotion',
      description: 'We offer a complete solution—from content creation to SEO optimization and strategic promotion.'
    },
    {
      icon: Users,
      title: 'Youth-Led Innovation',
      description: 'Our team brings fresh perspectives and cutting-edge digital strategies from young, talented professionals.'
    },
    {
      icon: Shield,
      title: 'Affordable & Ethical',
      description: 'Premium quality services at competitive rates, delivered with complete transparency and ethical practices.'
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
              About Verexa Media
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
              Where Research Meets Powerful Content
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="w-full py-20 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-8 text-center">
              Our Story
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="font-paragraph text-lg text-foreground/80">
                Verexa Media was founded with a singular vision: to bridge the gap between rigorous research and compelling content creation. In today's digital landscape, businesses need more than just words—they need data-driven strategies that deliver measurable results.
              </p>
              <p className="font-paragraph text-lg text-foreground/80">
                Our journey began with a team of passionate researchers, content creators, and digital marketers who recognized that the most powerful content is built on a foundation of thorough research and analysis. We've grown into a full-service digital agency that combines academic rigor with creative excellence.
              </p>
              <p className="font-paragraph text-lg text-foreground/80">
                Today, we serve businesses of all sizes, helping them transform their digital presence through research-backed content, strategic SEO, and targeted promotion. Our youth-led team brings fresh perspectives and innovative approaches to every project, ensuring our clients stay ahead in an ever-evolving digital world.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-20">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-secondary p-12 rounded-lg"
            >
              <Target className="h-12 w-12 text-primary mb-6" />
              <h2 className="font-heading text-3xl text-foreground mb-6">
                Our Mission
              </h2>
              <p className="font-paragraph text-lg text-foreground/80">
                To empower businesses with research-driven content strategies that deliver real, measurable results. We're committed to combining data analysis, creative excellence, and strategic promotion to help our clients achieve their digital goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-secondary p-12 rounded-lg"
            >
              <Eye className="h-12 w-12 text-primary mb-6" />
              <h2 className="font-heading text-3xl text-foreground mb-6">
                Our Vision
              </h2>
              <p className="font-paragraph text-lg text-foreground/80">
                To become the leading digital agency known for transforming businesses through the perfect blend of research, content, and promotion. We envision a future where every business has access to data-driven strategies that drive growth and success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full py-20 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
              Our Values
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-background p-8 rounded-lg text-center"
              >
                <value.icon className="h-12 w-12 text-primary mx-auto mb-6" />
                <h3 className="font-heading text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="font-paragraph text-base text-foreground/70">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* USPs */}
      <section className="w-full py-20">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
              What Sets Us Apart
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
              Our unique approach to digital content and marketing
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {usps.map((usp, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-secondary p-8 rounded-lg flex gap-6"
              >
                <usp.icon className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-3">
                    {usp.title}
                  </h3>
                  <p className="font-paragraph text-base text-foreground/70">
                    {usp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
