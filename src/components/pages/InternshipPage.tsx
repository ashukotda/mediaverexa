import { motion } from 'framer-motion';
import { Users, Search, FileText, Code, Share2, Palette, CheckCircle, Clock, Award, Lightbulb, Target, TrendingUp } from 'lucide-react';
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
      staggerChildren: 0.1
    }
  }
};

export default function InternshipPage() {

  const roles = [
    {
      icon: Users,
      title: 'HR Intern',
      code: 'HR',
      overview: 'Join our HR team to support recruitment, onboarding, and employee engagement initiatives while building foundational human resources skills.',
      responsibilities: [
        'Assist in recruitment and candidate screening',
        'Support onboarding and orientation processes',
        'Coordinate intern programs and communications',
        'Maintain HR records and documentation'
      ],
      skills: [
        'Strong interpersonal and communication skills',
        'Organizational and time management abilities',
        'Basic understanding of HR practices',
        'Proficiency in MS Office and Google Workspace'
      ],
      learning: [
        'Recruitment and talent acquisition strategies',
        'Employee engagement and retention techniques',
        'HR compliance and best practices',
        'Professional communication and coordination'
      ],
      duration: '3-6 months',
      perks: ['Certificate of completion', 'Mentorship from HR professionals', 'Flexible remote work', 'Real-world HR experience']
    },
    {
      icon: Search,
      title: 'Research Analyst Intern (RA)',
      code: 'RA',
      overview: 'Dive deep into market research and data analysis to uncover insights that drive strategic decisions and content creation.',
      responsibilities: [
        'Conduct comprehensive market and industry research',
        'Analyze data trends and compile findings',
        'Prepare detailed research reports and presentations',
        'Support content teams with data-driven insights'
      ],
      skills: [
        'Strong analytical and critical thinking',
        'Research methodology and data collection',
        'Proficiency in Excel, Google Sheets, or data tools',
        'Excellent report writing and presentation skills'
      ],
      learning: [
        'Advanced research methodologies',
        'Data analysis and interpretation techniques',
        'Market intelligence and competitive analysis',
        'Professional report writing and visualization'
      ],
      duration: '3-6 months',
      perks: ['Certificate of completion', 'Hands-on research projects', 'Mentorship from analysts', 'Portfolio-building opportunities']
    },
    {
      icon: FileText,
      title: 'Research Writer Intern (RW)',
      code: 'RW',
      overview: 'Transform research findings into compelling written content that educates, informs, and engages diverse audiences.',
      responsibilities: [
        'Write research-based articles and reports',
        'Translate complex data into accessible content',
        'Collaborate with research analysts on projects',
        'Edit and proofread research documentation'
      ],
      skills: [
        'Exceptional writing and editing abilities',
        'Research and information synthesis',
        'Attention to detail and accuracy',
        'Ability to write for different audiences'
      ],
      learning: [
        'Research-based content writing techniques',
        'Data storytelling and visualization',
        'Academic and professional writing standards',
        'Content strategy and audience engagement'
      ],
      duration: '3-6 months',
      perks: ['Certificate of completion', 'Published work portfolio', 'Editorial mentorship', 'Byline opportunities']
    },
    {
      icon: Code,
      title: 'Web Developer Intern',
      code: 'WD',
      overview: 'Build and optimize modern web experiences using cutting-edge technologies while working on real client projects.',
      responsibilities: [
        'Develop and maintain website features',
        'Implement responsive designs and UI components',
        'Optimize website performance and user experience',
        'Collaborate with designers and content teams'
      ],
      skills: [
        'HTML, CSS, JavaScript fundamentals',
        'Familiarity with React or modern frameworks',
        'Basic understanding of responsive design',
        'Problem-solving and debugging skills'
      ],
      learning: [
        'Modern web development frameworks and tools',
        'Best practices in UI/UX implementation',
        'Website optimization and performance tuning',
        'Collaborative development workflows'
      ],
      duration: '3-6 months',
      perks: ['Certificate of completion', 'Real project portfolio', 'Technical mentorship', 'Industry-standard tools experience']
    },
    {
      icon: Share2,
      title: 'Social Media Content Creator Intern',
      code: 'SMCC',
      overview: 'Create engaging social media content that builds brand presence and connects with audiences across multiple platforms.',
      responsibilities: [
        'Create and schedule social media content',
        'Design graphics and visual assets for posts',
        'Monitor engagement and community interactions',
        'Analyze social media metrics and performance'
      ],
      skills: [
        'Social media platform expertise (Instagram, LinkedIn, etc.)',
        'Content creation and copywriting',
        'Basic graphic design skills',
        'Understanding of social media trends'
      ],
      learning: [
        'Social media strategy and content planning',
        'Community management and engagement',
        'Analytics and performance optimization',
        'Brand voice and storytelling techniques'
      ],
      duration: '3-6 months',
      perks: ['Certificate of completion', 'Social media portfolio', 'Creative mentorship', 'Campaign management experience']
    },
    {
      icon: Palette,
      title: 'Graphic Designer Intern',
      code: 'GD',
      overview: 'Bring creative visions to life through visual design, creating compelling graphics for digital marketing and brand materials.',
      responsibilities: [
        'Design graphics for social media and marketing',
        'Create visual assets for websites and campaigns',
        'Develop brand-consistent design materials',
        'Collaborate with content and marketing teams'
      ],
      skills: [
        'Proficiency in Adobe Creative Suite or Figma',
        'Strong visual design and composition skills',
        'Understanding of color theory and typography',
        'Creativity and attention to detail'
      ],
      learning: [
        'Professional design workflows and processes',
        'Brand identity and visual consistency',
        'Digital marketing design best practices',
        'Client collaboration and feedback integration'
      ],
      duration: '3-6 months',
      perks: ['Certificate of completion', 'Design portfolio pieces', 'Creative mentorship', 'Industry software experience']
    }
  ];

  const perks = [
    {
      icon: Award,
      title: 'Certificate of Completion',
      description: 'Receive a professional certificate upon successful completion'
    },
    {
      icon: Users,
      title: 'Mentorship',
      description: 'Work closely with experienced professionals in your field'
    },
    {
      icon: TrendingUp,
      title: 'Real Projects',
      description: 'Gain hands-on experience with actual client projects'
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Remote work with flexible scheduling options'
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
              Join Our Team
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
              Launch your career with hands-on experience in digital content, research, and marketing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Internship Overview */}
      <section className="w-full py-20 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              Why Intern at Verexa Media?
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-3xl mx-auto mb-12">
              We offer a unique opportunity to work on real projects, learn from experienced professionals, and build a strong foundation for your career in digital marketing and content creation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {perks.map((perk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background p-6 rounded-lg"
                >
                  <perk.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-heading text-lg text-foreground mb-2">
                    {perk.title}
                  </h3>
                  <p className="font-paragraph text-sm text-foreground/70">
                    {perk.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-background px-6 py-3 rounded-lg">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-paragraph text-base text-foreground">
                <strong>Duration:</strong> 3-6 months (flexible)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Available Roles */}
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
              Open Positions
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
              Explore our current internship opportunities and find the perfect role to launch your career
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {roles.map((role, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-secondary p-8 rounded-lg hover:shadow-lg transition-shadow"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <role.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-heading text-2xl text-foreground">
                        {role.title}
                      </h3>
                      <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-paragraph font-semibold">
                        {role.code}
                      </span>
                    </div>
                    <p className="font-paragraph text-sm text-foreground/70">
                      {role.overview}
                    </p>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="h-5 w-5 text-primary" />
                    <h4 className="font-heading text-base text-foreground">
                      Key Responsibilities
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {role.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                        <span className="font-paragraph text-sm text-foreground/70">
                          {resp}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Required */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="h-5 w-5 text-primary" />
                    <h4 className="font-heading text-base text-foreground">
                      Skills Required
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {role.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                        <span className="font-paragraph text-sm text-foreground/70">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What You'll Learn */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    <h4 className="font-heading text-base text-foreground">
                      What You'll Learn
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {role.learning.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                        <span className="font-paragraph text-sm text-foreground/70">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Duration & Perks */}
                <div className="mb-6 p-4 bg-background rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="font-paragraph text-sm text-foreground">
                      <strong>Duration:</strong> {role.duration}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {role.perks.map((perk, idx) => (
                      <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-paragraph">
                        {perk}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <Button 
                  onClick={() => window.open('https://forms.gle/4EcQfHWWhRA6KXn36', '_blank')}
                  className="w-full font-paragraph"
                >
                  Apply for {role.title}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Apply Now Section */}
      <section className="w-full py-20 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              Apply for an Internship
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 mb-12">
              To apply for an internship at Verexa Media, please fill out the Google Form below.
            </p>
            <Button
              onClick={() => window.open('https://forms.gle/4EcQfHWWhRA6KXn36', '_blank')}
              size="lg"
              className="font-paragraph text-base py-6 px-12 shadow-md hover:shadow-lg transition-shadow"
            >
              Apply Now
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
