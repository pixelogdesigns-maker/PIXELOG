import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
    return (
        <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-6xl font-black font-unbounded mb-8">Terms of Service<span className="text-[#ff4d00]">.</span></h1>
                <p className="text-zinc-500 mb-12">Last Updated: February 16, 2026</p>

                <div className="space-y-12 text-lg leading-relaxed text-zinc-800">
                    <section>
                        <h2 className="text-2xl font-bold font-unbounded mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using the Pixelog website and services, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-unbounded mb-4">2. Services Description</h2>
                        <p>
                            Pixelog provides digital design and development services including but not limited to website creation, branding, graphic design, and video editing. Specific deliverables and timelines are outlined in individual client agreements.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-unbounded mb-4">3. Intellectual Property</h2>
                        <p>
                            All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Pixelog or its content suppliers and protected by international copyright laws.
                        </p>
                        <p className="mt-4">
                            Upon full payment, rights to final deliverables are transferred to the client as specified in the individual service agreement. Pixelog retains the right to display the work in portfolios and marketing materials unless otherwise agreed upon in writing.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-unbounded mb-4">4. User Conduct</h2>
                        <p>
                            You agree not to use the website or services for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the website or services in any way that could damage the website, services, or general business of Pixelog.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-unbounded mb-4">5. Limitation of Liability</h2>
                        <p>
                            Pixelog shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this site or the performance of the products, even if Pixelog has been advised of the possibility of such damages.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-unbounded mb-4">6. Revisions and Errata</h2>
                        <p>
                            The materials appearing on Pixelog's website could include technical, typographical, or photographic errors. Pixelog does not warrant that any of the materials on its website are accurate, complete, or current. Pixelog may make changes to the materials contained on its website at any time without notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-unbounded mb-4">7. Contact Information</h2>
                        <p>
                            If you have any questions about these Terms of Service, please contact us at <a href="mailto:support@pixelog.in" className="text-[#ff4d00] hover:underline">support@pixelog.in</a>.
                        </p>
                    </section>
                </div>
            </motion.div>
        </main>
    );
};

export default TermsOfService;
