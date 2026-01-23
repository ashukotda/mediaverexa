// HPI 1.7-G
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, TrendingUp, Users, Zap, CheckCircle, FileText, BarChart, Share2, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- DATA FIDELITY PROTOCOL: CANONICAL DATA SOURCES ---
// Preserved exactly from original source
const services = [
  {
    icon: FileText,
    title: 'Content Writing',
    description: 'Research-backed articles and blogs that engage and convert your audience.'
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimization',
    description: 'Data-driven strategies to boost your search rankings and visibility.'
  },
  {
    icon: BarChart,
    title: 'Research & Analysis',
    description: 'In-depth market research and data analysis for informed decisions.'
  },
  {
    icon: Share2,
    title: 'Social Media Promotion',
    description: 'Strategic campaigns that amplify your brand across all platforms.'
  }
];

const whyChooseUs = [
  {
    title: 'Research-Backed',
    description: 'Every piece of content is grounded in thorough research and data analysis.'
  },
  {
    title: 'Full-Service Solution',
    description: 'SEO, content creation, and promotion—all under one roof.'
  },
  {
    title: 'Youth-Led Innovation',
    description: 'Fresh perspectives and cutting-edge digital strategies from young talent.'
  },
  {
    title: 'Affordable Excellence',
    description: 'Premium quality services at competitive rates for businesses of all sizes.'
  }
];

const process = [
  { step: '01', title: 'Discovery', description: 'We understand your goals, audience, and challenges.' },
  { step: '02', title: 'Research', description: 'Deep dive into data, trends, and competitive landscape.' },
  { step: '03', title: 'Strategy', description: 'Craft a tailored plan aligned with your objectives.' },
  { step: '04', title: 'Execution', description: 'Create and deploy high-quality content and campaigns.' },
  { step: '05', title: 'Optimization', description: 'Monitor, analyze, and refine for continuous improvement.' }
];

const testimonials = [
  {
    quote: 'Verexa Media transformed our content strategy. Their research-driven approach delivered measurable results.',
    author: 'Sarah Johnson',
    role: 'Marketing Director, TechCorp'
  },
  {
    quote: 'The team\'s dedication to quality and data-backed insights set them apart. Highly recommended.',
    author: 'Michael Chen',
    role: 'CEO, GrowthLabs'
  },
  {
    quote: 'Professional, innovative, and results-oriented. Verexa Media exceeded our expectations.',
    author: 'Emily Rodriguez',
    role: 'Founder, BrandBoost'
  }
];

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const revealText = {
  initial: { y: "100%" },
  animate: { y: "0%", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function HomePage() {
  // Hero Parallax Setup
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScrollY } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroScrollY, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScrollY, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground font-paragraph overflow-clip selection:bg-primary selection:text-primary-foreground">
      <Header />

      {/* --- HERO SECTION: IMMERSIVE PARALLAX --- */}
      <section ref={heroRef} className="relative w-full h-[100vh] min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Parallax Layer */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 w-full h-full z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background z-10" />
          <Image
            src="https://static.wixstatic.com/media/0eba7f_96f1fc7c41a54ae39c6a46d3e2fdaddc~mv2.png?originWidth=1920&originHeight=768"
            alt="Abstract digital landscape representing research and growth"
            className="w-full h-full object-cover opacity-40"
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-[120rem] mx-auto px-6 md:px-12 pt-20">
          <div className="max-w-5xl">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <Image
                src="https://static.wixstatic.com/media/0eba7f_2f7683f8c0af4338b8e446ee5753b7be~mv2.png"
                alt="Verexa Media Logo"
                width={80}
                className="h-20 w-auto"
              />
            </motion.div>

            <div className="overflow-hidden mb-2">
              <motion.h1 
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-foreground leading-[0.9]"
              >
                <div className="overflow-hidden">
                  <motion.span variants={revealText} className="block">Create.</motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span variants={revealText} className="block text-primary">Research.</motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span variants={revealText} className="block">Grow.</motion.span>
                </div>
              </motion.h1>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="font-paragraph text-xl md:text-2xl text-foreground/70 mt-8 max-w-2xl leading-relaxed"
            >
              Where Research Meets Powerful Content. Transform your digital presence with data-driven strategies that deliver real results.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-4 mt-12"
            >
              <Link to="/contact">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20">
                  Hire Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/internship">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-14 px-8 text-lg rounded-full border-2 border-foreground/10 hover:border-primary hover:text-primary transition-all duration-300 bg-transparent backdrop-blur-sm"
                >
                  Apply as Intern
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- MANIFESTO SECTION: TYPOGRAPHIC STATEMENT --- */}
      <section className="w-full py-32 bg-background relative z-10">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <div className="w-12 h-[2px] bg-primary mb-6" />
              <span className="font-heading text-sm font-bold tracking-widest uppercase text-foreground/50">Our Philosophy</span>
            </div>
            <div className="lg:col-span-8">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-heading text-3xl md:text-5xl lg:text-6xl leading-tight font-medium text-foreground"
              >
                We believe that <span className="text-primary">clarity</span> is the ultimate sophistication. In a noisy digital world, we use rigorous research to cut through the clutter, delivering content that is not just seen, but <span className="italic text-foreground/60">understood</span> and <span className="italic text-foreground/60">acted upon</span>.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION: STICKY LAYOUT --- */}
      <section className="w-full py-32 bg-secondary/30 relative">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Sticky Header */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-32">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
                    Our<br />Services
                  </h2>
                  <p className="font-paragraph text-lg text-foreground/70 mb-8 max-w-xs">
                    Comprehensive digital solutions tailored to your business needs, driven by data and creativity.
                  </p>
                  <Link to="/services">
                    <Button variant="link" className="p-0 text-primary text-lg font-medium hover:text-primary/80 group">
                      View All Services
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="lg:col-span-8">
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="group relative bg-background p-10 rounded-2xl border border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
                  >
                    <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="h-6 w-6 text-primary" />
                    </div>
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="font-paragraph text-foreground/60 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US: SPLIT PARALLAX --- */}
      <section className="w-full py-0 bg-background overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          
          {/* Left: Content Scroll */}
          <div className="flex flex-col justify-center px-6 md:px-20 py-24 lg:py-32 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
                Why Choose<br />Verexa Media
              </h2>
              <p className="font-paragraph text-xl text-foreground/60">
                We combine research excellence with creative execution to deliver unmatched value.
              </p>
            </motion.div>

            <div className="space-y-12">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <CheckCircle className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="font-paragraph text-foreground/60 leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Sticky Image */}
          <div className="relative h-[50vh] lg:h-auto lg:sticky lg:top-0 order-1 lg:order-2 overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10" />
            <Image
              src="https://static.wixstatic.com/media/0eba7f_6e197ec8655e451a936cb13fa29bed02~mv2.png?originWidth=960&originHeight=576"
              alt="Team analyzing data"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:hidden" />
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION: HORIZONTAL FLOW --- */}
      <section className="w-full py-32 bg-foreground text-background relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-background/20 to-transparent" />
        
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Methodology</span>
              <h2 className="font-heading text-4xl md:text-6xl font-bold text-background">
                The Process
              </h2>
            </div>
            <p className="font-paragraph text-background/60 max-w-md text-right md:text-left">
              A systematic, data-driven approach to delivering exceptional results for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-background/10 z-0" />

            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative z-10 group"
              >
                <div className="w-24 h-24 bg-foreground border border-background/20 rounded-full flex items-center justify-center mb-8 group-hover:border-primary transition-colors duration-300 relative">
                  <span className="font-heading text-3xl font-bold text-background/30 group-hover:text-primary transition-colors duration-300">
                    {item.step}
                  </span>
                  {/* Dot on line */}
                  <div className="absolute top-1/2 -right-4 w-2 h-2 bg-background/20 rounded-full hidden lg:block" />
                </div>
                
                <h3 className="font-heading text-xl font-bold text-background mb-4 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-paragraph text-sm text-background/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* --- FINAL CTA: BOLD & CENTERED --- */}
      <section className="w-full py-32 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Abstract Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-5xl md:text-7xl font-bold mb-8 tracking-tight"
          >
            Ready to Transform Your Digital Presence?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-paragraph text-xl md:text-2xl text-primary-foreground/90 mb-12 leading-relaxed"
          >
            Let's create something remarkable together. Join the forward-thinking brands growing with Verexa Media.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link to="/contact">
              <Button 
                size="lg" 
                className="h-16 px-10 text-lg rounded-full bg-background text-primary hover:bg-background/90 border-2 border-transparent transition-all duration-300 shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="h-16 px-10 text-lg rounded-full border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent transition-all duration-300"
              >
                Explore Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}