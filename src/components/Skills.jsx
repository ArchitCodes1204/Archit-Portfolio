import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const skills = [
    "React", "Node.js", "JavaScript", "TypeScript", "Next.js",
    "MongoDB", "PostgreSQL", "MySQL", "Python", "C++",
    "HTML/CSS", "Tailwind CSS", "Figma", "AWS", "UI/UX Design"
];

export default function Skills() {
    const { isDark } = useTheme();

    return (
        <section id="skills" className={`py-32 ${isDark ? "bg-dark-bg" : "bg-white"} ${isDark ? "border-dark-border" : "border-gray-200"} border-b`}>
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
                        Skills
                    </h2>
                    <div className={`w-16 h-[2px] ${isDark ? "bg-dark-text" : "bg-black"}`}></div>
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
                            whileHover={{
                                y: -8,
                                rotateX: 10,
                                scale: 1.05,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                            className={`p-6 text-center transition-all ${isDark
                                    ? "bg-dark-surface border-dark-border hover:bg-dark-bg hover:shadow-lg"
                                    : "bg-gray-50 border-gray-200 hover:bg-white hover:shadow-sm"
                                } border`}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <p className={`text-sm font-medium ${isDark ? "text-dark-text" : "text-gray-700"}`}>{skill}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
