import React, { useState } from "react";
import Section from "../ui/Section";
import { IoSend } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
    const [mailer, setMailer] = useState({
        name: "",
        email: "",
        title: "",
        message: "",
    });

    const [clicked, setClicked] = useState("Send Message");

    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const handleMail = async () => {
        try {
            setClicked("Sending...");
            await delay(2000);
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE,
                import.meta.env.VITE_EMAILJS_TEMPLATE,
                {
                    title: mailer.title,
                    name: mailer.name,
                    email: mailer.email,
                    message: mailer.message,
                },
                import.meta.env.VITE_EMAILJS_KEY
            );

            toast.success("Mail Sent Successfully");
            setClicked("Message Sent");

            setMailer({
                name: "",
                email: "",
                title: "",
                message: "",
            });

            await delay(1500);
            setClicked("Send Message");
        } catch (error) {
            console.log("Error Sending Mail!", error);
            toast.error("Mail not sent!");
            setClicked("Send Message");
        }
    };

    return (
        <Section id="contact" className="bg-[#f9f9f9] py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 relative z-10 flex flex-col md:flex-row gap-20">
                <div className="md:w-1/2 space-y-8">
                    <span className="text-[#ff4d00] font-bold tracking-widest uppercase text-sm block">Contact</span>
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black font-unbounded text-black"
                    >
                        Let's Talk<span className="text-[#ff4d00]">.</span>
                    </motion.h2>

                    <p className="text-zinc-500 text-xl max-w-sm font-sora font-medium leading-relaxed">
                        Have an idea, a project, or just a question? We'd love to hear from you.
                    </p>

                    <div className="pt-10">
                        <a href="mailto:support@pixelog.in" className="text-2xl font-bold text-black border-b-2 border-black hover:text-[#ff4d00] hover:border-[#ff4d00] pb-1 transition-colors">
                            support@pixelog.in
                        </a>
                    </div>
                </div>

                <motion.form
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="md:w-1/2 bg-white p-10 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-black/5 space-y-6"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleMail();
                    }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-black uppercase tracking-wider pl-2">Name</label>
                            <input
                                value={mailer.name}
                                onChange={(e) => setMailer({ ...mailer, name: e.target.value })}
                                required
                                type="text"
                                className="w-full bg-[#f5f5f5] rounded-2xl p-4 md:p-5 border-none text-black focus:ring-2 focus:ring-[#ff4d00]/20 outline-none transition-all placeholder:text-zinc-400 font-medium"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-black uppercase tracking-wider pl-2">Email</label>
                            <input
                                value={mailer.email}
                                onChange={(e) => setMailer({ ...mailer, email: e.target.value })}
                                required
                                type="email"
                                className="w-full bg-[#f5f5f5] rounded-2xl p-4 md:p-5 border-none text-black focus:ring-2 focus:ring-[#ff4d00]/20 outline-none transition-all placeholder:text-zinc-400 font-medium"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-black uppercase tracking-wider pl-2">Subject</label>
                        <input
                            value={mailer.title}
                            onChange={(e) => setMailer({ ...mailer, title: e.target.value })}
                            required
                            type="text"
                            className="w-full bg-[#f5f5f5] rounded-2xl p-4 md:p-5 border-none text-black focus:ring-2 focus:ring-[#ff4d00]/20 outline-none transition-all placeholder:text-zinc-400 font-medium"
                            placeholder="Project Inquiry"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-black uppercase tracking-wider pl-2">Message</label>
                        <textarea
                            value={mailer.message}
                            onChange={(e) => setMailer({ ...mailer, message: e.target.value })}
                            required
                            rows={4}
                            className="w-full bg-[#f5f5f5] rounded-2xl p-4 md:p-5 border-none text-black focus:ring-2 focus:ring-[#ff4d00]/20 outline-none transition-all placeholder:text-zinc-400 resize-none font-medium"
                            placeholder="Tell us about your project..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={clicked !== "Send Message" && clicked !== "Message Sent"}
                        className="w-full bg-black text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#ff4d00] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide cursor-pointer shadow-xl shadow-black/10"
                    >
                        {clicked}
                        {clicked === "Send Message" && <IoSend />}
                    </button>
                </motion.form>
            </div>
        </Section>
    );
};

export default Contact;
