import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    return (
        <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-6xl font-black font-unbounded mb-8 text-white">Privacy Policy<span className="text-[#FFE600]">.</span></h1>
                <p className="text-zinc-500 mb-12">Last Updated: February 16, 2026</p>

                <div className="space-y-12 text-lg leading-relaxed text-zinc-300">
                    <section>
                        <h2 className="text-2xl font-bold font-unbounded mb-4 text-white">1. Information We Collect</h2>
                        <p>
                            We collect information you provide directly to us when you fill out a contact form, subscribe to our newsletter, or communicate with us via email. This may include your name, email address, phone number, and any other information you choose to provide.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-unbounded mb-4 text-white">2. How We Use Your Information</h2>
                        <p>
                            We use the information we collect to provide, maintain, and improve our services, to respond to your comments and questions, and to send you related information, including confirmations, invoices, technical notices, updates, security alerts, and support and administrative messages.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-unbounded mb-4 text-white">3. Data Protection</h2>
                        <p>
                            We implement a variety of security measures to maintain the safety of your personal information. We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide users with advance notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-unbounded mb-4 text-white">4. Cookies</h2>
                        <p>
                            We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-unbounded mb-4 text-white">5. Third-Party Links</h2>
                        <p>
                            Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-unbounded mb-4 text-white">6. Contact Us</h2>
                        <p>
                            If there are any questions regarding this privacy policy, you may contact us using the information below:
                            <br /><br />
                            <a href="mailto:support@pixelog.in" className="text-[#FFE600] hover:underline">support@pixelog.in</a>
                        </p>
                    </section>
                </div>
            </motion.div>
        </main>
    );
};

export default PrivacyPolicy;
