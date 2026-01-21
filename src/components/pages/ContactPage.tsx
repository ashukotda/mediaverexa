import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
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

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'mediaverexa@gmail.com',
      link: 'mailto:mediaverexa@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 83908070021',
      link: 'tel:+918390807021'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: 'Bilaspur Yamunanagar 135102',
      link: 'https://maps.google.com/?q=Bilaspur+Yamunanagar+135102'
    }
  ];

  const services = [
    'Content Writing',
    'SEO Optimization',
    'Research & Analysis',
    'Social Media Promotion',
    'Brand Awareness',
    'Website Content',
    'Lead Generation',
    'Other'
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
        title: 'Message Sent!',
        description: 'Thank you for contacting us. We will get back to you within 24 hours.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
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
              Get in Touch
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
              Let's discuss how we can help transform your digital presence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="w-full pb-20 px-8">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <info.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl text-foreground mb-2">
                  {info.title}
                </h3>
                <p className="font-paragraph text-base text-foreground/70">
                  {info.content}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="w-full py-20 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                Send Us a Message
              </h2>
              <p className="font-paragraph text-lg text-foreground/70 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="font-paragraph text-base text-foreground mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
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
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="font-paragraph"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="font-paragraph text-base text-foreground mb-2 block">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="font-paragraph"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service" className="font-paragraph text-base text-foreground mb-2 block">
                    Service Interested In *
                  </Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full h-10 px-3 rounded-lg border border-input bg-background font-paragraph text-base"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="font-paragraph text-base text-foreground mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project and how we can help..."
                    rows={6}
                    required
                    className="font-paragraph"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full font-paragraph text-base py-6 rounded-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                  Visit Our Office
                </h2>
                <p className="font-paragraph text-lg text-foreground/70 mb-8">
                  We're located in Bilaspur, Yamunanagar. Feel free to reach out to discuss your project.
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="bg-background rounded-lg overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27634.84!2d77.29!3d30.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f7f5e5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2sBilaspur%2C%20Yamunanagar%2C%20Haryana%20135102!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Verexa Media Office Location"
                />
              </div>

              {/* Business Hours */}
              <div className="bg-background p-8 rounded-lg">
                <h3 className="font-heading text-xl text-foreground mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 font-paragraph text-base text-foreground/70">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
