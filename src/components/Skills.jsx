import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
    SiReact, SiNodedotjs, SiJavascript, SiTypescript, SiNextdotjs,
    SiMongodb, SiPostgresql, SiMysql, SiPython, SiCplusplus,
    SiHtml5, SiCss3, SiTailwindcss, SiFigma, SiAmazonaws
} from "react-icons/si";
import { FaPencilRuler } from "react-icons/fa";

const skills = [
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "Bootstrap", icon: SiReact, color: "#7952B3" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "AWS", icon: SiAmazonaws, color: "#FF9900" },
    { name: "UI/UX Design", icon: FaPencilRuler, color: "#FF61F6" },
];

export default function Skills() {
    const { isDark } = useTheme();

    return (
        <section id="skills" className={`py-32 ${isDark ? "bg-dark-bg" : "bg-white"} ${isDark ? "border-dark-border" : "border-gray-200"} border-b overflow-hidden`}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? "text-dark-text" : "text-black"}`}>
                        My Skills
                    </h2>
                    <p className={`text-base max-w-3xl mx-auto ${isDark ? "text-dark-text-secondary" : "text-gray-600"}`}>
                        My skills include a deep dive into several remarkable technologies that I've worked with.
                    </p>
                </motion.div>

                {/* Horizontal Scrolling Icons */}
                <div className="relative">
                    {/* Gradient Overlays */}
                    <div className={`absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${isDark
                            ? "bg-gradient-to-r from-dark-bg to-transparent"
                            : "bg-gradient-to-r from-white to-transparent"
                        }`}></div>
                    <div className={`absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${isDark
                            ? "bg-gradient-to-l from-dark-bg to-transparent"
                            : "bg-gradient-to-l from-white to-transparent"
                        }`}></div>

                    {/* Scrolling Container */}
                    <div className="flex overflow-hidden">
                        <motion.div
                            animate={{
                                x: [0, -1920],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 30,
                                    ease: "linear",
                                },
                            }}
                            className="flex gap-8 py-8"
                        >
                            {/* Render skills twice for seamless loop */}
                            {[...skills, ...skills, ...skills].map((skill, index) => (
                                <motion.div
                                    key={`${skill.name}-${index}`}
                                    whileHover={{
                                        scale: 1.2,
                                        y: -10,
                                        transition: { type: "spring", stiffness: 400 }
                                    }}
                                    className="flex-shrink-0 w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer"
                                    style={{
                                        boxShadow: `0 4px 20px ${skill.color}20`
                                    }}
                                >
                                    <skill.icon
                                        className="text-5xl"
                                        style={{ color: skill.color }}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Skill Names (Optional - can be shown on hover) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-12 flex flex-wrap justify-center gap-3"
                >
                    {skills.map((skill) => (
                        <span
                            key={skill.name}
                            className={`text-xs px-3 py-1 rounded-full ${isDark
                                    ? "bg-dark-surface text-dark-text-secondary"
                                    : "bg-gray-100 text-gray-600"
                                }`}
                        >
                            {skill.name}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
