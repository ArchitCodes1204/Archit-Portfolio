import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function About() {
    const { isDark } = useTheme();

    return (
        <section id="about" className={`py-32 ${isDark ? "bg-dark-surface" : "bg-gray-50"} ${isDark ? "border-dark-border" : "border-gray-200"} border-b`}>
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
                        About
                    </h2>
                    <div className={`w-16 h-[2px] ${isDark ? "bg-dark-text" : "bg-black"}`}></div>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <p className={`text-base leading-relaxed ${isDark ? "text-dark-text-secondary" : "text-gray-700"}`}>
                            I am a full-stack developer with a passion for creating beautiful, functional, and user-centered digital experiences.
                            With expertise in React and Node.js, I bridge the gap between design and engineering.
                        </p>
                        <p className={`text-base leading-relaxed ${isDark ? "text-dark-text-secondary" : "text-gray-700"}`}>
                            My journey started with simple static pages and evolved into building complex web applications.
                            I thrive on solving challenging problems and optimizing performance.
                        </p>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-2 gap-8"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05, rotateY: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className={`text-center p-8 ${isDark ? "bg-dark-bg border-dark-border" : "bg-white border-gray-200"} border`}
                        >
                            <h3 className={`text-5xl font-bold mb-2 ${isDark ? "text-dark-text" : "text-black"}`}>3+</h3>
                            <p className={`text-sm text-caps ${isDark ? "text-dark-text-secondary" : "text-gray-500"}`}>Years Experience</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05, rotateY: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className={`text-center p-8 ${isDark ? "bg-dark-bg border-dark-border" : "bg-white border-gray-200"} border`}
                        >
                            <h3 className={`text-5xl font-bold mb-2 ${isDark ? "text-dark-text" : "text-black"}`}>20+</h3>
                            <p className={`text-sm text-caps ${isDark ? "text-dark-text-secondary" : "text-gray-500"}`}>Projects</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
