"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import Image from "next/image";
import { useBooking } from "@/context/BookingContext";

export default function Hero() {
    const { openBooking } = useBooking();
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 select-none">
                <Image
                    src="/hero-bg.png"
                    alt="Egiiterian Kitchen Hero"
                    fill
                    priority
                    className="object-cover"
                    quality={100}
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-xl md:text-3xl font-light tracking-[0.2em] uppercase mb-4 text-gray-300">
                        Nashik's New Food Hub
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 text-white drop-shadow-lg leading-tight">
                        D Egiiterian <br />
                        <span className="text-primary italic">Kitchen & Cafe</span>
                    </h1>
                    <p className="max-w-xl mx-auto text-gray-300 text-lg md:text-xl mb-10 font-light leading-relaxed">
                        Experience the art of egg-centric fine dining. A perfect blend of health, taste, and premium aesthetics.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Button size="lg" className="px-10 py-6 text-lg">
                            View Menu
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="px-10 py-6 text-lg border-white text-white hover:text-black"
                            onClick={openBooking}
                        >
                            Book a Table
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white/50 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
