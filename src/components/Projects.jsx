import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const projects = [
    {
        id: 1,
        title: "Expense Tracker",
        description: "A comprehensive expense tracking application that helps users manage their finances effectively. Features include transaction categorization, visual analytics, and budget monitoring with an intuitive user interface.",
        tech: ["React", "Tailwind CSS", "Chart.js", "Local Storage"],
        image: "/expense-tracker.png",
        link: "https://v0-expense-tracker-project-beta.vercel.app/",
        github: "https://github.com/ArchitCodes1204/expense-tracker.git",
    },
    {
        id: 2,
        title: "StockCrypt - Stock Management System",
        description: "A full-stack stock management platform designed for businesses to track inventory, manage stock levels, and analyze sales data. Includes user authentication, real-time updates, and comprehensive reporting features.",
        tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
        image: "/stockcrypt.png",
        link: "https://stock-crypt-theta.vercel.app/login",
        github: "https://github.com/ArchitCodes1204/StockCrypt.git",
    },
    {
        id: 3,
        title: "Todo List Application",
        description: "A clean and efficient task management application with features like task creation, completion tracking, filtering, and persistent storage. Built with a focus on simplicity and user experience.",
        tech: ["React", "Tailwind CSS", "Local Storage"],
        image: "/todo-list.png",
        link: "https://todo-list-jade-ten.vercel.app/",
        github: "https://github.com/ArchitCodes1204/todo-list.git",
    },
    {
        id: 4,
        title: "NoteBot",
        description: "An AI-powered chatbot bridging seamless interaction and smart note assistance. Built for responsiveness and engaging user experiences.",
        tech: ["React", "AI Integration", "Tailwind CSS", "Vite"],
        image: "/notebot_logo.png",
        link: "https://chat-bot-kappa-gray.vercel.app/",
        github: "https://github.com/ArchitCodes1204/ChatBot.git",
    },
];

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

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                            className={`group p-6 transition-all ${isDark
                                ? "bg-dark-bg border-dark-border hover:shadow-2xl"
                                : "bg-white border-gray-200 hover:shadow-lg"
                                } border flex flex-col h-full`}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden mb-4 -mx-6 -mt-6">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className={`absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${isDark ? "bg-dark-bg/80" : "bg-black/50"
                                    }`}></div>
                            </div>

                            {/* Project Info */}
                            <div className="flex-1">
                                <h3 className={`text-xl font-bold mb-3 group-hover:underline ${isDark ? "text-dark-text" : "text-black"}`}>
                                    {project.title}
                                </h3>
                                <p className={`text-sm mb-4 leading-relaxed ${isDark ? "text-dark-text-secondary" : "text-gray-600"}`}>
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
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
                            <div className="flex gap-3 mt-auto pt-4">
                                <motion.a
                                    whileHover={{ scale: 1.1, rotateZ: 5 }}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex-1 p-3 text-center transition-all ${isDark
                                        ? "bg-dark-surface border-dark-border hover:bg-dark-text hover:text-dark-bg"
                                        : "bg-white border-gray-200 hover:bg-black hover:text-white"
                                        } border flex items-center justify-center gap-2`}
                                    aria-label="View project"
                                >
                                    <ExternalLink size={16} />
                                    <span className="text-xs font-medium">Live Demo</span>
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.1, rotateZ: -5 }}
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 transition-all ${isDark
                                        ? "bg-dark-surface border-dark-border hover:bg-dark-text hover:text-dark-bg"
                                        : "bg-white border-gray-200 hover:bg-black hover:text-white"
                                        } border`}
                                    aria-label="View source code"
                                >
                                    <Github size={16} />
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
