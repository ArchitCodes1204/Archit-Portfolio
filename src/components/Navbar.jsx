import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrolled(scrollTop > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"}`}>
            <div className="w-full border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <a
                        href="/"
                        className="text-black font-bold text-lg tracking-tight hover:opacity-70 transition-opacity"
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
                                    className={`text-sm font-medium tracking-wide transition-colors ${active === link.name ? "text-black" : "text-gray-500 hover:text-black"
                                        }`}
                                    onClick={() => setActive(link.name)}
                                >
                                    {link.name}
                                </a>
                                {active === link.name && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute -bottom-1 left-0 right-0 h-[1px] bg-black"
                                    />
                                )}
                            </li>
                        ))}

                        {/* Copyright Marker */}
                        <li className="text-xs text-gray-400 font-medium">
                            @2026
                        </li>
                    </ul>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center">
                        {toggle ? (
                            <X className="w-6 h-6 text-black cursor-pointer" onClick={() => setToggle(!toggle)} />
                        ) : (
                            <Menu className="w-6 h-6 text-black cursor-pointer" onClick={() => setToggle(!toggle)} />
                        )}

                        <AnimatePresence>
                            {toggle && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg"
                                >
                                    <ul className="flex flex-col py-4 px-6 gap-4">
                                        {navLinks.map((link) => (
                                            <li key={link.name}>
                                                <a
                                                    href={link.href}
                                                    className={`text-sm font-medium tracking-wide block py-2 ${active === link.name ? "text-black" : "text-gray-500"
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
