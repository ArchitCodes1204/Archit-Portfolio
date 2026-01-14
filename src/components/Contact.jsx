import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { SiGithub, SiLinkedin, SiLeetcode } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

export default function Contact() {
    const { isDark } = useTheme();

    return (
        <section id="contact" className={`py-32 ${isDark ? "bg-dark-surface" : "bg-gray-50"}`}>
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className={`text-3xl md:text-4xl font-bold text-caps mb-4 ${isDark ? "text-dark-text" : "text-black"}`}>
                        Contact
                    </h2>
                    <div className={`w-16 h-[2px] ${isDark ? "bg-dark-text" : "bg-black"}`}></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <p className={`text-base leading-relaxed ${isDark ? "text-dark-text-secondary" : "text-gray-700"}`}>
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-4">
                            <div className={`flex items-center gap-4 ${isDark ? "text-dark-text-secondary" : "text-gray-700"}`}>
                                <Mail size={20} />
                                <span className="text-sm">archit0825@gmail.com</span>
                            </div>
                            <div className={`flex items-center gap-4 ${isDark ? "text-dark-text-secondary" : "text-gray-700"}`}>
                                <MapPin size={20} />
                                <span className="text-sm">New Delhi, India</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-4">
                            <motion.a
                                whileHover={{ scale: 1.1, rotateZ: 5 }}
                                href="https://github.com/ArchitCodes1204"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 transition-all ${isDark
                                    ? "bg-dark-bg border-dark-border"
                                    : "bg-white border-gray-200"
                                    } border rounded-full group`}
                            >
                                <SiGithub size={24} color={isDark ? "#ffffff" : "#181717"} className="transition-colors" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1, rotateZ: -5 }}
                                href="https://linkedin.com/in/archit-mamodiya-42514a221"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 transition-all ${isDark
                                    ? "bg-dark-bg border-dark-border"
                                    : "bg-white border-gray-200"
                                    } border rounded-full group`}
                            >
                                <SiLinkedin size={24} color="#0077B5" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1, rotateZ: 5 }}
                                href="https://leetcode.com/u/ARCHIT_CP/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 transition-all ${isDark
                                    ? "bg-dark-bg border-dark-border"
                                    : "bg-white border-gray-200"
                                    } border rounded-full group`}
                            >
                                <SiLeetcode size={24} color="#FFA116" />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, rotateY: 2 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className={`p-8 ${isDark
                            ? "bg-dark-bg border-dark-border"
                            : "bg-white border-gray-200"
                            } border`}
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <form className="space-y-6">
                            <div>
                                <label className={`block text-sm font-medium mb-2 ${isDark ? "text-dark-text-secondary" : "text-gray-700"}`}>Name</label>
                                <input
                                    type="text"
                                    className={`w-full px-4 py-3 focus:outline-none transition-all ${isDark
                                        ? "bg-dark-surface border-dark-border text-dark-text focus:border-dark-text"
                                        : "bg-white border-gray-200 text-black focus:border-black"
                                        } border`}
                                />
                            </div>
                            <div>
                                <label className={`block text-sm font-medium mb-2 ${isDark ? "text-dark-text-secondary" : "text-gray-700"}`}>Email</label>
                                <input
                                    type="email"
                                    className={`w-full px-4 py-3 focus:outline-none transition-all ${isDark
                                        ? "bg-dark-surface border-dark-border text-dark-text focus:border-dark-text"
                                        : "bg-white border-gray-200 text-black focus:border-black"
                                        } border`}
                                />
                            </div>
                            <div>
                                <label className={`block text-sm font-medium mb-2 ${isDark ? "text-dark-text-secondary" : "text-gray-700"}`}>Message</label>
                                <textarea
                                    rows="4"
                                    className={`w-full px-4 py-3 focus:outline-none transition-all resize-none ${isDark
                                        ? "bg-dark-surface border-dark-border text-dark-text focus:border-dark-text"
                                        : "bg-white border-gray-200 text-black focus:border-black"
                                        } border`}
                                ></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className={`w-full py-4 font-medium transition-all ${isDark
                                    ? "bg-dark-text text-dark-bg hover:bg-dark-text-secondary"
                                    : "bg-black text-white hover:bg-gray-800"
                                    }`}
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className={`mt-20 pt-8 border-t ${isDark ? "border-dark-border" : "border-gray-200"} flex flex-col items-center gap-4`}
                    >
                        <div className={`flex items-center gap-2 ${isDark ? "text-dark-text-secondary" : "text-gray-600"}`}>
                            <Mail size={16} />
                            <span className="text-sm font-medium">archit0825@gmail.com</span>
                        </div>
                        <p className={`text-sm font-medium ${isDark ? "text-dark-text-secondary" : "text-gray-600"}`}>
                            ⚡Created By Archit | © 2025 All rights reserved. ™ ⚡
                        </p>
                    </motion.div>
                </div>
        </section>
    );
}
