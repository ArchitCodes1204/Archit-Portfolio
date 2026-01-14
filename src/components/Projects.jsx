import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const projectsByYear = {
    "2026": [
        {
            id: 1,
            title: "E-Commerce Dashboard",
            description: "A comprehensive analytics dashboard for online retailers featuring real-time data visualization.",
            tech: ["React", "D3.js", "Firebase", "Tailwind"],
            link: "#",
            github: "#",
        },
        {
            id: 2,
            title: "AI Chat Application",
            description: "Real-time chat interface powered by large language models with markdown support.",
            tech: ["Next.js", "OpenAI API", "Tailwind"],
            link: "#",
            github: "#",
        },
    ],
    "2025": [
        {
            id: 3,
            title: "Crypto Portfolio Tracker",
            description: "Track cryptocurrency prices and portfolio value differences in real-time.",
            tech: ["Vue.js", "WebSockets", "Chart.js"],
            link: "#",
            github: "#",
        },
    ],
};

export default function Projects() {
    const { isDark } = useTheme();

    return (
        <section id="projects" className={`py-32 ${isDark ? "bg-dark-surface" : "bg-gray-50"} ${isDark ? "border-dark-border" : "border-gray-200"} border-b`}>
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
                        Works
                    </h2>
                    <div className={`w-16 h-[2px] ${isDark ? "bg-dark-text" : "bg-black"}`}></div>
                </motion.div>

                {/* Projects by Year */}
                <div className="space-y-16">
                    {Object.entries(projectsByYear).map(([year, projects]) => (
                        <motion.div
                            key={year}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Year Header */}
                            <div className="flex items-center gap-4 mb-8">
                                <h3 className={`text-2xl font-bold text-caps ${isDark ? "text-dark-text" : "text-black"}`}>{year}</h3>
                                <span className={`text-sm text-caps ${isDark ? "text-dark-text-secondary" : "text-gray-400"}`}>
                                    {projects.length} {projects.length === 1 ? "Project" : "Projects"}
                                </span>
                            </div>

                            {/* Project List */}
                            <div className="space-y-6">
                                {projects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        whileHover={{
                                            scale: 1.02,
                                            rotateY: 2,
                                            transition: { type: "spring", stiffness: 300 }
                                        }}
                                        className={`group p-8 transition-all ${isDark
                                                ? "bg-dark-bg border-dark-border hover:shadow-2xl"
                                                : "bg-white border-gray-200 hover:shadow-md"
                                            } border`}
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                                            {/* Project Info */}
                                            <div className="flex-1">
                                                <h4 className={`text-xl font-bold mb-2 group-hover:underline ${isDark ? "text-dark-text" : "text-black"}`}>
                                                    {project.title}
                                                </h4>
                                                <p className={`text-sm mb-4 leading-relaxed ${isDark ? "text-dark-text-secondary" : "text-gray-600"}`}>
                                                    {project.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tech.map((t) => (
                                                        <span key={t} className={`text-xs px-3 py-1 ${isDark
                                                                ? "bg-dark-surface border-dark-border text-dark-text-secondary"
                                                                : "bg-gray-50 border-gray-200 text-gray-700"
                                                            } border`}>
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Links */}
                                            <div className="flex gap-3">
                                                <motion.a
                                                    whileHover={{ scale: 1.1, rotateZ: 5 }}
                                                    href={project.link}
                                                    className={`p-2 transition-all ${isDark
                                                            ? "bg-dark-surface border-dark-border hover:bg-dark-text hover:text-dark-bg"
                                                            : "bg-white border-gray-200 hover:bg-black hover:text-white"
                                                        } border`}
                                                    aria-label="View project"
                                                >
                                                    <ExternalLink size={18} />
                                                </motion.a>
                                                <motion.a
                                                    whileHover={{ scale: 1.1, rotateZ: -5 }}
                                                    href={project.github}
                                                    className={`p-2 transition-all ${isDark
                                                            ? "bg-dark-surface border-dark-border hover:bg-dark-text hover:text-dark-bg"
                                                            : "bg-white border-gray-200 hover:bg-black hover:text-white"
                                                        } border`}
                                                    aria-label="View source code"
                                                >
                                                    <Github size={18} />
                                                </motion.a>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
