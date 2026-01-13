import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

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
    return (
        <section id="projects" className="py-32 bg-gray-50 minimal-border-bottom">
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
                        Works
                    </h2>
                    <div className="w-16 h-[2px] bg-black"></div>
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
                                <h3 className="text-2xl font-bold text-black text-caps">{year}</h3>
                                <span className="text-sm text-gray-400 text-caps">
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
                                        className="group p-8 minimal-border bg-white hover:shadow-md transition-all"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                                            {/* Project Info */}
                                            <div className="flex-1">
                                                <h4 className="text-xl font-bold text-black mb-2 group-hover:underline">
                                                    {project.title}
                                                </h4>
                                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                                    {project.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tech.map((t) => (
                                                        <span key={t} className="text-xs px-3 py-1 minimal-border bg-gray-50 text-gray-700">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Links */}
                                            <div className="flex gap-3">
                                                <a
                                                    href={project.link}
                                                    className="p-2 minimal-border bg-white hover:bg-black hover:text-white transition-all"
                                                    aria-label="View project"
                                                >
                                                    <ExternalLink size={18} />
                                                </a>
                                                <a
                                                    href={project.github}
                                                    className="p-2 minimal-border bg-white hover:bg-black hover:text-white transition-all"
                                                    aria-label="View source code"
                                                >
                                                    <Github size={18} />
                                                </a>
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
