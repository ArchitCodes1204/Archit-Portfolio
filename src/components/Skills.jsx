import { motion } from "framer-motion";

const skills = [
    "React", "Node.js", "JavaScript", "TypeScript", "Next.js",
    "MongoDB", "PostgreSQL", "MySQL", "Python", "C++",
    "HTML/CSS", "Tailwind CSS", "Figma", "AWS", "UI/UX Design"
];

export default function Skills() {
    return (
        <section id="skills" className="py-32 bg-white minimal-border-bottom">
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
                        Skills
                    </h2>
                    <div className="w-16 h-[2px] bg-black"></div>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="p-6 minimal-border bg-gray-50 text-center transition-all hover:bg-white hover:shadow-sm"
                        >
                            <p className="text-sm font-medium text-gray-700">{skill}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
