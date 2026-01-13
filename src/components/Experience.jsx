import { motion } from "framer-motion";

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
    return (
        <section id="experience" className="py-32 bg-white minimal-border-bottom">
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
                        Experience
                    </h2>
                    <div className="w-16 h-[2px] bg-black"></div>
                </motion.div>

                <div className="relative border-l-2 border-gray-200 ml-3 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8"
                        >
                            {/* Dot on line */}
                            <div className="absolute -left-[9px] top-2 w-4 h-4 bg-black rounded-full" />

                            <div className="pb-8">
                                <span className="text-xs text-gray-500 text-caps mb-2 block">{exp.period}</span>
                                <h3 className="text-xl font-bold text-black mb-1">{exp.role}</h3>
                                <p className="text-gray-600 mb-3 font-medium">{exp.company}</p>
                                <p className="text-gray-700 leading-relaxed text-sm">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
