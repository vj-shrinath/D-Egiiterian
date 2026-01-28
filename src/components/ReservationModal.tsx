"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, Clock, Phone, icons } from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import { useState } from "react";
import { Button } from "./ui/Button";

export default function ReservationModal() {
    const { isBookingOpen, closeBooking } = useBooking();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // WhatsApp integration
        const message = `Hello, I would like to book a table at D Egiiterian Kitchen.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0ADate: ${formData.date}%0ATime: ${formData.time}%0AGuests: ${formData.guests}`;
        window.open(`https://wa.me/919404034141?text=${message}`, "_blank");
        closeBooking();
    };

    return (
        <AnimatePresence>
            {isBookingOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeBooking}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-[#111] border border-white/10 rounded-2xl p-8 z-[70] shadow-2xl shadow-primary/10"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-display font-bold text-white">
                                Book a <span className="text-primary">Table</span>
                            </h2>
                            <button
                                onClick={closeBooking}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Your Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 text-primary" size={18} />
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Phone Number</label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-3 text-primary" size={18} />
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="+91 99999 99999"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-3 text-primary" size={18} />
                                        <input
                                            type="date"
                                            name="date"
                                            required
                                            className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white calendar-icon-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                            value={formData.date}
                                            onChange={handleChange}
                                            style={{ colorScheme: "dark" }}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Time</label>
                                    <div className="relative">
                                        <Clock className="absolute left-3 top-3 text-primary" size={18} />
                                        <input
                                            type="time"
                                            name="time"
                                            required
                                            className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                            value={formData.time}
                                            onChange={handleChange}
                                            style={{ colorScheme: "dark" }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Guests</label>
                                <select
                                    name="guests"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors appearance-none"
                                    value={formData.guests}
                                    onChange={handleChange}
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8, "8+"].map((num) => (
                                        <option key={num} value={num} className="bg-zinc-900">
                                            {num} {num === 1 ? "Person" : "People"}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <Button type="submit" className="w-full mt-6" size="lg">
                                Confirm Request
                            </Button>
                            <p className="text-xs text-center text-gray-500 mt-2">
                                This will open WhatsApp to send your request.
                            </p>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
