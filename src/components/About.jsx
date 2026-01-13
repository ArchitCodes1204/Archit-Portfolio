import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-32 bg-gray-50 minimal-border-bottom">
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
                        About
                    </h2>
                    <div className="w-16 h-[2px] bg-black"></div>
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
                        <p className="text-gray-700 text-base leading-relaxed">
                            I am a full-stack developer with a passion for creating beautiful, functional, and user-centered digital experiences.
                            With expertise in React and Node.js, I bridge the gap between design and engineering.
                        </p>
                        <p className="text-gray-700 text-base leading-relaxed">
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
                        <div className="text-center p-8 minimal-border bg-white">
                            <h3 className="text-5xl font-bold text-black mb-2">3+</h3>
                            <p className="text-sm text-gray-500 text-caps">Years Experience</p>
                        </div>
                        <div className="text-center p-8 minimal-border bg-white">
                            <h3 className="text-5xl font-bold text-black mb-2">20+</h3>
                            <p className="text-sm text-gray-500 text-caps">Projects</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
