import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
    { name: "Works", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { isDark, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrolled(scrollTop > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? (isDark ? "bg-dark-bg/95 backdrop-blur-sm shadow-sm" : "bg-white/95 backdrop-blur-sm shadow-sm") : (isDark ? "bg-dark-bg" : "bg-white")}`}>
            <div className={`w-full ${isDark ? "border-dark-border" : "border-gray-200"} border-b`}>
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <a
                        href="/"
                        className={`font-bold text-lg tracking-tight hover:opacity-70 transition-opacity ${isDark ? "text-dark-text" : "text-black"}`}
                        onClick={() => setActive("")}
                    >
                        ARCHIT MAMODIYA
                    </a>

                    {/* Desktop Menu */}
                    <ul className="list-none hidden md:flex flex-row gap-10 items-center">
                        {navLinks.map((link) => (
                            <li
                                key={link.name}
                                className="relative"
                            >
                                <a
                                    href={link.href}
                                    className={`text-sm font-medium tracking-wide transition-colors ${active === link.name
                                            ? (isDark ? "text-dark-text" : "text-black")
                                            : (isDark ? "text-dark-text-secondary hover:text-dark-text" : "text-gray-500 hover:text-black")
                                        }`}
                                    onClick={() => setActive(link.name)}
                                >
                                    {link.name}
                                </a>
                                {active === link.name && (
                                    <motion.div
                                        layoutId="underline"
                                        className={`absolute -bottom-1 left-0 right-0 h-[1px] ${isDark ? "bg-dark-text" : "bg-black"}`}
                                    />
                                )}
                            </li>
                        ))}

                        {/* Theme Toggle */}
                        <li>
                            <button
                                onClick={toggleTheme}
                                className={`p-2 rounded-full transition-all ${isDark
                                        ? "hover:bg-dark-surface"
                                        : "hover:bg-gray-100"
                                    }`}
                                aria-label="Toggle theme"
                            >
                                {isDark ? (
                                    <Sun size={20} className="text-dark-text" />
                                ) : (
                                    <Moon size={20} className="text-black" />
                                )}
                            </button>
                        </li>

                        {/* Copyright Marker */}
                        <li className={`text-xs font-medium ${isDark ? "text-dark-text-secondary" : "text-gray-400"}`}>
                            @2026
                        </li>
                    </ul>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center gap-3">
                        {/* Mobile Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full transition-all ${isDark
                                    ? "hover:bg-dark-surface"
                                    : "hover:bg-gray-100"
                                }`}
                            aria-label="Toggle theme"
                        >
                            {isDark ? (
                                <Sun size={18} className="text-dark-text" />
                            ) : (
                                <Moon size={18} className="text-black" />
                            )}
                        </button>

                        {toggle ? (
                            <X className={`w-6 h-6 cursor-pointer ${isDark ? "text-dark-text" : "text-black"}`} onClick={() => setToggle(!toggle)} />
                        ) : (
                            <Menu className={`w-6 h-6 cursor-pointer ${isDark ? "text-dark-text" : "text-black"}`} onClick={() => setToggle(!toggle)} />
                        )}

                        <AnimatePresence>
                            {toggle && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className={`absolute top-full left-0 right-0 shadow-lg ${isDark
                                            ? "bg-dark-bg border-dark-border"
                                            : "bg-white border-gray-200"
                                        } border-b`}
                                >
                                    <ul className="flex flex-col py-4 px-6 gap-4">
                                        {navLinks.map((link) => (
                                            <li key={link.name}>
                                                <a
                                                    href={link.href}
                                                    className={`text-sm font-medium tracking-wide block py-2 ${active === link.name
                                                            ? (isDark ? "text-dark-text" : "text-black")
                                                            : (isDark ? "text-dark-text-secondary" : "text-gray-500")
                                                        }`}
                                                    onClick={() => {
                                                        setToggle(!toggle);
                                                        setActive(link.name);
                                                    }}
                                                >
                                                    {link.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </nav>
    );
}
