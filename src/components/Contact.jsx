import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-black text-caps mb-4">
                        Contact
                    </h2>
                    <div className="w-16 h-[2px] bg-black"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <p className="text-gray-700 text-base leading-relaxed">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-gray-700">
                                <Mail size={20} />
                                <span className="text-sm">archit0825@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-700">
                                <MapPin size={20} />
                                <span className="text-sm">India</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-4">
                            <a
                                href="https://github.com/ArchitCodes1204"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 minimal-border bg-white hover:bg-black hover:text-white transition-all"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://linkedin.com/in/archit-mamodiya-42514a221"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 minimal-border bg-white hover:bg-black hover:text-white transition-all"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 minimal-border bg-white"
                    >
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-white border border-gray-200 px-4 py-3 text-black focus:outline-none focus:border-black transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-white border border-gray-200 px-4 py-3 text-black focus:outline-none focus:border-black transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-white border border-gray-200 px-4 py-3 text-black focus:outline-none focus:border-black transition-all resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-black text-white font-medium hover:bg-gray-800 transition-all"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
