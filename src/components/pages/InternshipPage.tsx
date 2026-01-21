import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Search, TrendingUp, Share2, FileText, CheckCircle, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
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
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    education: '',
    experience: '',
    motivation: '',
    portfolio: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const roles = [
    {
      icon: Users,
      title: 'Human Resources Intern',
      code: 'HR',
      responsibilities: [
        'Assist in recruitment and onboarding processes',
        'Manage intern coordination and communication',
        'Support employee engagement initiatives',
        'Maintain HR documentation and records'
      ],
      skills: [
        'Strong communication skills',
        'Organizational abilities',
        'Basic HR knowledge',
        'Proficiency in MS Office'
      ]
    },
    {
      icon: Search,
      title: 'Research Analyst Intern',
      code: 'RA',
      responsibilities: [
        'Conduct market and industry research',
        'Analyze data and identify trends',
        'Prepare research reports and presentations',
        'Support content creation with data insights'
      ],
      skills: [
        'Analytical thinking',
        'Research methodology',
        'Data analysis tools',
        'Report writing'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Research Partner Intern',
      code: 'RP',
      responsibilities: [
        'Collaborate on research projects',
        'Develop research frameworks',
        'Present findings to clients',
        'Support strategic recommendations'
      ],
      skills: [
        'Strategic thinking',
        'Project management',
        'Client communication',
        'Advanced research skills'
      ]
    },
    {
      icon: Share2,
      title: 'Social Media Marketing Intern',
      code: 'SMM',
      responsibilities: [
        'Create and schedule social media content',
        'Monitor and engage with online communities',
        'Analyze social media metrics',
        'Support paid advertising campaigns'
      ],
      skills: [
        'Social media platforms expertise',
        'Content creation',
        'Analytics tools',
        'Creative thinking'
      ]
    },
    {
      icon: FileText,
      title: 'Content Writer Intern',
      code: 'CW',
      responsibilities: [
        'Write blog posts and articles',
        'Create website and marketing copy',
        'Conduct content research',
        'Optimize content for SEO'
      ],
      skills: [
        'Excellent writing skills',
        'SEO knowledge',
        'Research abilities',
        'Creativity and adaptability'
      ]
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Application Submitted!',
        description: 'Thank you for applying. We will review your application and get back to you soon.',
      });
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        role: '',
        education: '',
        experience: '',
        motivation: '',
        portfolio: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

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
              Available Positions
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
              Explore our internship opportunities and find the perfect role for you
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {roles.map((role, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-secondary p-8 rounded-lg"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <role.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="font-heading text-2xl text-foreground">
                        {role.title}
                      </h3>
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-paragraph font-semibold">
                        {role.code}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-heading text-lg text-foreground mb-3">
                          Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {role.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="font-paragraph text-base text-foreground/70">
                                {resp}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-heading text-lg text-foreground mb-3">
                          Required Skills
                        </h4>
                        <ul className="space-y-2">
                          {role.skills.map((skill, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="font-paragraph text-base text-foreground/70">
                                {skill}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="w-full py-20 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
                Apply Now
              </h2>
              <p className="font-paragraph text-lg text-foreground/70">
                Fill out the form below to submit your application
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-background p-8 md:p-12 rounded-lg space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName" className="font-paragraph text-base text-foreground mb-2 block">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="font-paragraph"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="font-paragraph text-base text-foreground mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="font-paragraph"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="font-paragraph text-base text-foreground mb-2 block">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="font-paragraph"
                  />
                </div>
                <div>
                  <Label htmlFor="role" className="font-paragraph text-base text-foreground mb-2 block">
                    Desired Role *
                  </Label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    className="w-full h-10 px-3 rounded-lg border border-input bg-background font-paragraph text-base"
                  >
                    <option value="">Select a role</option>
                    {roles.map((role) => (
                      <option key={role.code} value={role.code}>
                        {role.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="education" className="font-paragraph text-base text-foreground mb-2 block">
                  Education Background *
                </Label>
                <Input
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  placeholder="e.g., Bachelor's in Marketing, University Name"
                  required
                  className="font-paragraph"
                />
              </div>

              <div>
                <Label htmlFor="experience" className="font-paragraph text-base text-foreground mb-2 block">
                  Relevant Experience
                </Label>
                <Textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="Describe any relevant experience, projects, or coursework"
                  rows={4}
                  className="font-paragraph"
                />
              </div>

              <div>
                <Label htmlFor="motivation" className="font-paragraph text-base text-foreground mb-2 block">
                  Why do you want to intern at Verexa Media? *
                </Label>
                <Textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  placeholder="Tell us about your motivation and what you hope to learn"
                  rows={4}
                  required
                  className="font-paragraph"
                />
              </div>

              <div>
                <Label htmlFor="portfolio" className="font-paragraph text-base text-foreground mb-2 block">
                  Portfolio/LinkedIn URL
                </Label>
                <Input
                  id="portfolio"
                  name="portfolio"
                  type="url"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  placeholder="https://"
                  className="font-paragraph"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full font-paragraph text-base py-6 rounded-lg"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
