import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsConditionsPage() {
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
              Terms & Conditions
            </h1>
            <p className="font-paragraph text-lg text-foreground/70 mb-12">
              Last updated: January 21, 2026
            </p>

            <div className="space-y-8 font-paragraph text-base text-foreground/80">
              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">1. Agreement to Terms</h2>
                <p className="mb-4">
                  These Terms and Conditions ("Terms") constitute a legally binding agreement between you and Verexa Media ("Company," "we," "us," or "our") concerning your access to and use of our website and services.
                </p>
                <p>
                  By accessing or using our website and services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our website or services.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">2. Services</h2>
                <p className="mb-4">
                  Verexa Media provides digital content creation, research, SEO optimization, social media promotion, and related services. The specific services provided to you will be outlined in a separate service agreement or proposal.
                </p>
                <p>
                  We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">3. User Accounts</h2>
                <p className="mb-4">
                  When you create an account with us, you must provide accurate, complete, and current information. You are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized access or security breach</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">4. Intellectual Property Rights</h2>
                <h3 className="font-heading text-xl text-foreground mb-3">Our Content</h3>
                <p className="mb-4">
                  All content on our website, including text, graphics, logos, images, and software, is the property of Verexa Media or its licensors and is protected by copyright, trademark, and other intellectual property laws.
                </p>

                <h3 className="font-heading text-xl text-foreground mb-3">Client Content</h3>
                <p className="mb-4">
                  Content created for clients as part of our services will be governed by the terms of the specific service agreement. Generally, upon full payment, clients receive ownership rights to the deliverables as specified in the agreement.
                </p>

                <h3 className="font-heading text-xl text-foreground mb-3">Portfolio Rights</h3>
                <p>
                  We reserve the right to use completed work in our portfolio, case studies, and marketing materials unless otherwise agreed in writing.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">5. Payment Terms</h2>
                <p className="mb-4">
                  Payment terms will be specified in individual service agreements. Generally:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payments are due according to the schedule outlined in the service agreement</li>
                  <li>Late payments may incur additional fees</li>
                  <li>We reserve the right to suspend services for non-payment</li>
                  <li>All fees are non-refundable unless otherwise stated in the service agreement</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">6. Client Responsibilities</h2>
                <p className="mb-4">
                  Clients are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing timely feedback and approvals</li>
                  <li>Supplying necessary materials, information, and access</li>
                  <li>Ensuring they have rights to any materials provided to us</li>
                  <li>Reviewing and approving deliverables within agreed timeframes</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">7. Revisions and Changes</h2>
                <p>
                  The number of revisions included in each project will be specified in the service agreement. Additional revisions beyond the agreed scope may incur additional charges. Significant changes to project scope will require a new agreement and additional fees.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">8. Project Timelines</h2>
                <p>
                  We will make reasonable efforts to meet agreed-upon deadlines. However, timelines are estimates and may be affected by factors including client delays in providing feedback or materials, scope changes, or unforeseen circumstances.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">9. Confidentiality</h2>
                <p>
                  We will maintain the confidentiality of any proprietary or confidential information shared by clients during the course of our engagement. We will not disclose such information to third parties without client consent, except as required by law.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">10. Limitation of Liability</h2>
                <p className="mb-4">
                  To the maximum extent permitted by law, Verexa Media shall not be liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Loss of profits, revenue, data, or business opportunities</li>
                  <li>Damages exceeding the amount paid by the client for the specific services in question</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">11. Warranties and Disclaimers</h2>
                <p className="mb-4">
                  We warrant that our services will be performed in a professional and workmanlike manner. However:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We do not guarantee specific results, rankings, or outcomes</li>
                  <li>Our services are provided "as is" without warranties of any kind</li>
                  <li>We are not responsible for third-party platforms, algorithms, or policies</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">12. Termination</h2>
                <p className="mb-4">
                  Either party may terminate a service agreement according to the terms specified in that agreement. Upon termination:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Client remains responsible for payment for work completed</li>
                  <li>We will deliver completed work as of the termination date</li>
                  <li>Confidentiality obligations continue after termination</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">13. Indemnification</h2>
                <p>
                  You agree to indemnify and hold harmless Verexa Media from any claims, damages, losses, or expenses arising from your use of our services, violation of these Terms, or infringement of any third-party rights.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">14. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">15. Dispute Resolution</h2>
                <p>
                  Any disputes arising from these Terms or our services shall first be attempted to be resolved through good faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration in New York, NY.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">16. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website. Your continued use of our services after such changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">17. Severability</h2>
                <p>
                  If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground mb-4">18. Contact Information</h2>
                <p className="mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
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
