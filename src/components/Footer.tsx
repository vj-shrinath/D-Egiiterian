"use client";

import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black pt-20 pb-10 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-display font-bold text-white">
                            D Egiiterian <br />
                            <span className="text-primary italic">Kitchen</span>
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Nashik's New Food Hub. Elevating the simple egg to a gourmet experience.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-all"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-white font-bold text-lg">Quick Links</h3>
                        <ul className="space-y-4">
                            {["Home", "About Us", "Our Menu", "Reservations", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h3 className="text-white font-bold text-lg">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-gray-400">
                                <MapPin className="text-primary shrink-0" />
                                <span>
                                    Shop No.01, Plot No.01, Avira Avenue,<br />
                                    West Wind Meadows, Gangapur Road,<br />
                                    Nashik-422013
                                </span>
                            </li>
                            <li className="flex gap-3 text-gray-400">
                                <Phone className="text-primary shrink-0" />
                                <span>+91 94040 34141</span>
                            </li>
                            <li className="flex gap-3 text-gray-400">
                                <Mail className="text-primary shrink-0" />
                                <span>hello@degiiterian.com</span>
                            </li>
                        </ul>
                        {/* Map Embed */}
                        <div className="mt-6 w-full h-48 rounded-xl overflow-hidden border border-white/10">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.203099999999!2d73.750833!3d20.003611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb002e202511%3A0x66c84c160533036!2sAvira%20Avenue!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="space-y-6">
                        <h3 className="text-white font-bold text-lg">Opening Hours</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex justify-between">
                                <span>Mon - Fri</span>
                                <span>8:00 AM - 10:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sat - Sun</span>
                                <span>8:00 AM - 11:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} D Egiiterian Kitchen & Cafe. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
