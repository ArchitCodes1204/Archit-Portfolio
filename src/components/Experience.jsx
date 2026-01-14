import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const experiences = [
    {
        id: 1,
        role: "Senior Full Stack Developer",
        company: "Tech Innovators Inc.",
        period: "2023 - Present",
        description: "Leading a team of developers in building scalable web applications using React and Node.js. Implemented CI/CD pipelines and optimized cloud infrastructure.",
    },
    {
        id: 2,
        role: "Frontend Developer",
        company: "Creative Studio",
        period: "2021 - 2023",
        description: "Developed interactive user interfaces for high-profile clients. Specialized in animation libraries and performance optimization.",
    },
    {
        id: 3,
        role: "Junior Web Developer",
        company: "StartUp Hub",
        period: "2020 - 2021",
        description: "Collaborated with designers to translate wireframes into responsive code. Maintained legacy codebases and fixed bugs.",
    },
];

export default function Experience() {
    const { isDark } = useTheme();

    return (
        <section id="experience" className={`py-32 ${isDark ? "bg-dark-bg" : "bg-white"} ${isDark ? "border-dark-border" : "border-gray-200"} border-b`}>
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
                        Experience
                    </h2>
                    <div className={`w-16 h-[2px] ${isDark ? "bg-dark-text" : "bg-black"}`}></div>
                </motion.div>

                <div className={`relative border-l-2 ml-3 space-y-12 ${isDark ? "border-dark-border" : "border-gray-200"}`}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ x: 10, transition: { type: "spring", stiffness: 300 } }}
                            className="relative pl-8"
                        >
                            {/* Dot on line */}
                            <motion.div
                                whileHover={{ scale: 1.5, rotate: 180 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full ${isDark ? "bg-dark-text" : "bg-black"}`}
                            />

                            <div className="pb-8">
                                <span className={`text-xs text-caps mb-2 block ${isDark ? "text-dark-text-secondary" : "text-gray-500"}`}>{exp.period}</span>
                                <h3 className={`text-xl font-bold mb-1 ${isDark ? "text-dark-text" : "text-black"}`}>{exp.role}</h3>
                                <p className={`mb-3 font-medium ${isDark ? "text-dark-text-secondary" : "text-gray-600"}`}>{exp.company}</p>
                                <p className={`leading-relaxed text-sm ${isDark ? "text-dark-text-secondary" : "text-gray-700"}`}>{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
