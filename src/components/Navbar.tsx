"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import Link from "next/link";
import { useBooking } from "@/context/BookingContext";
import Image from "next/image";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { openBooking } = useBooking();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Menu", href: "#menu" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4"
                    : "bg-transparent py-6"
                    }`}
            >
                <div className="container mx-auto px-6 h-full flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-12 h-12 group-hover:scale-110 transition-transform">
                            <Image
                                src="/logo.png"
                                alt="D Egiiterian Logo"
                                fill
                                className="object-contain" // changed to contain to show full egg
                            />
                        </div>
                        <span className="text-xl md:text-2xl font-display font-bold text-white tracking-wide">
                            Egiiterian <span className="text-primary">Kitchen</span>
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-300 hover:text-primary transition-colors capitalize tracking-wider"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button size="sm" onClick={openBooking}>Book a Table</Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white hover:text-primary transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-x-0 top-[70px] z-40 bg-black/95 border-b border-white/10 overflow-hidden md:hidden"
                    >
                        <div className="p-6 flex flex-col gap-6 items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-gray-300 hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    openBooking();
                                }}
                                className="w-full max-w-xs"
                            >
                                Book a Table
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
