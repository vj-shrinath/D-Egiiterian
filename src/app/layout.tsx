import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // Import standard Google Fonts
import "./globals.css";
import { BookingProvider } from "@/context/BookingContext";
import ReservationModal from "@/components/ReservationModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "D Egiiterian Kitchen & Cafe | Nashik's New Food Hub",
  description: "Experience the best egg dishes in Nashik at D Egiiterian Kitchen & Cafe. Fine dining with a healthy twist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <BookingProvider>
          {children}
          <ReservationModal />
        </BookingProvider>
      </body>
    </html>
  );
}
