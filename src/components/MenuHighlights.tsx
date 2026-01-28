"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/Button";

const menuItems = [
    {
        id: 1,
        title: "Signature Avocado Toast",
        description: "Sourdough bread topped with mashed avocado, sunny-side up eggs, and microgreens.",
        price: "₹249",
        image: "/hero-bg.png", // Reusing hero image which depicts this
    },
    {
        id: 2,
        title: "Mediterranean Hummus",
        description: "Creamy hummus served with olive oil, paprika, and warm pita bread.",
        price: "₹199",
        image: "/menu-hummus.png",
    },
    {
        id: 3,
        title: "Herb Cheese Omelette",
        description: "Fluffy omelette folded with aged cheddar and fresh garden herbs.",
        price: "₹179",
        image: "/menu-omelette.png",
    },
];

export default function MenuHighlights() {
    return (
        <section id="menu" className="py-24 bg-black relative">
            <div className="absolute inset-0 bg-neutral-900/20" /> {/* Subtle texture/shade */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary text-lg font-medium tracking-widest uppercase mb-3"
                    >
                        Taste the Excellence
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-display font-bold text-white"
                    >
                        Our Featured Classics
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {menuItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-colors duration-500"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent opacity-60" />
                            </div>
                            <div className="p-8 relative">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <span className="text-xl font-bold text-primary">{item.price}</span>
                                </div>
                                <p className="text-gray-400 mb-6 line-clamp-2">
                                    {item.description}
                                </p>
                                <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-white justify-start group-hover:translate-x-2 transition-transform">
                                    Order Now →
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Button variant="outline" size="lg" className="border-white/20 text-white hover:border-primary hover:text-white">
                        View Full Menu
                    </Button>
                </div>
            </div>
        </section>
    );
}
