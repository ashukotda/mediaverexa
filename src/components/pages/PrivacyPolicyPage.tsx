import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="w-full pt-32 pb-20 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="font-paragraph text-lg text-foreground/70 mb-12">
              Last updated: January 21, 2026
            </p>

            <div className="space-y-8 font-paragraph text-base text-foreground/80">
              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">1. Introduction</h2>
                <p className="mb-4">
                  Welcome to Verexa Media ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p>
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">2. Information We Collect</h2>
                <h3 className="font-heading text-xl text-foreground mb-3">Personal Information</h3>
                <p className="mb-4">
                  We collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Register for our services</li>
                  <li>Submit a contact form or inquiry</li>
                  <li>Apply for an internship position</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Engage with our content or services</li>
                </ul>
                <p className="mb-4">
                  This information may include: name, email address, phone number, company name, job title, and any other information you choose to provide.
                </p>

                <h3 className="font-heading text-xl text-foreground mb-3">Automatically Collected Information</h3>
                <p>
                  When you visit our website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device. We also collect information about your browsing behavior and interactions with our site.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">
                  We use the information we collect or receive:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide, operate, and maintain our services</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To process internship applications</li>
                  <li>To send you marketing and promotional communications (with your consent)</li>
                  <li>To improve our website and services</li>
                  <li>To analyze usage patterns and trends</li>
                  <li>To protect against fraudulent or illegal activity</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">4. Sharing Your Information</h2>
                <p className="mb-4">
                  We may share your information in the following situations:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf, such as hosting, analytics, and email delivery.</li>
                  <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with a merger, sale, or acquisition of all or a portion of our business.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
                  <li><strong>With Your Consent:</strong> We may share your information with third parties when you give us explicit consent to do so.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">6. Your Privacy Rights</h2>
                <p className="mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The right to access and receive a copy of your personal information</li>
                  <li>The right to correct or update your personal information</li>
                  <li>The right to delete your personal information</li>
                  <li>The right to restrict or object to our processing of your personal information</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">7. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">8. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">9. Children's Privacy</h2>
                <p>
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">10. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">11. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <ul className="space-y-2">
                  <li><strong>Email:</strong> contact@verexamedia.com</li>
                  <li><strong>Phone:</strong> +1 (234) 567-890</li>
                  <li><strong>Address:</strong> 123 Business Street, Suite 100, New York, NY 10001</li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
