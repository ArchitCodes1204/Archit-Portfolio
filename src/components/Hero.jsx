import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
    const { isDark } = useTheme();

    return (
        <section className={`relative min-h-screen flex items-center justify-center pt-20 ${isDark ? "bg-dark-bg" : "bg-white"}`}>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-16">
                    {/* Left Text Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-left lg:text-right"
                    >
                        <h1 className={`text-2xl md:text-3xl font-bold mb-4 text-caps leading-tight ${isDark ? "text-dark-text" : "text-black"}`}>
                            Archit Mamodiya
                        </h1>
                        <p className={`text-sm md:text-base text-caps leading-relaxed ${isDark ? "text-dark-text-secondary" : "text-gray-600"}`}>
                            Full Stack Developer<br />
                            From India
                        </p>
                    </motion.div>

                    {/* Central Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="flex justify-center items-center"
                    >
                        <img
                            src={isDark ? "/hero-illustration-color.png" : "/hero-illustration.png"}
                            alt="Developer illustration"
                            className="w-full max-w-md h-auto"
                        />
                    </motion.div>

                    {/* Right Text Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-left"
                    >
                        <p className={`text-sm md:text-base text-caps leading-relaxed ${isDark ? "text-dark-text-secondary" : "text-gray-600"}`}>
                            Passionate about<br />
                            creating unforgettable<br />
                            digital experiences
                        </p>
                    </motion.div>
                </div>

                {/* Bottom Tagline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-center"
                >
                    <p className={`text-xs md:text-sm font-light ${isDark ? "text-dark-text-secondary" : "text-gray-400"}`}>
                        Just an ordinary developer. From India with love.
                    </p>
                </motion.div>

                {/* Navigation Links (Optional) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="flex justify-center gap-8 mt-12"
                >
                    <a
                        href="#projects"
                        className={`text-sm font-medium transition-colors hover-underline ${isDark ? "text-dark-text-secondary hover:text-dark-text" : "text-gray-600 hover:text-black"}`}
                    >
                        View Works
                    </a>
                    <a
                        href="#contact"
                        className={`text-sm font-medium transition-colors hover-underline ${isDark ? "text-dark-text-secondary hover:text-dark-text" : "text-gray-600 hover:text-black"}`}
                    >
                        Get in Touch
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className={`text-xs tracking-widest uppercase ${isDark ? "text-dark-text-secondary" : "text-gray-400"}`}>Scroll</span>
                <div className={`w-6 h-10 border rounded-full flex justify-center p-2 ${isDark ? "border-dark-border" : "border-gray-300"}`}>
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className={`w-1 h-2 rounded-full ${isDark ? "bg-dark-text" : "bg-black"}`}
                    />
                </div>
            </motion.div>
        </section>
    );
}
