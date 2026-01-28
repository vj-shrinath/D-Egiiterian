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
  metadataBase: new URL('https://d-egiiterian.vercel.app'),
  title: "D Egiiterian Kitchen & Cafe | Best Cafe in Nashik",
  description: "Rated top among Nashik's best cafes. D Egiiterian serves premium egg dishes, healthy breakfasts, and gourmet meals on Gangapur Road. Experience fine dining in Nashik.",
  keywords: ["Nashik cafes", "Best cafe in Nashik", "Top restaurants Nashik", "Healthy food Nashik", "Egg dishes", "Gangapur Road restaurants", "D Egiiterian", "Food hub Nashik", "Breakfast places in Nashik"],
  authors: [{ name: "D Egiiterian Kitchen" }],
  creator: "D Egiiterian Kitchen",
  publisher: "D Egiiterian Kitchen",
  openGraph: {
    title: "D Egiiterian Kitchen & Cafe | Nashik's Premium Food Hub",
    description: "Experience the art of egg-centric fine dining. A perfect blend of health, taste, and aesthetics in the heart of Nashik.",
    url: "https://d-egiiterian.vercel.app",
    siteName: "D Egiiterian Kitchen & Cafe",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "D Egiiterian Kitchen & Cafe Hero Image",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "D Egiiterian Kitchen & Cafe | Best Cafe in Nashik",
    description: "Healthy, delicious, and premium. Visit Nashik's new favorite food destination.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: 'https://d-egiiterian.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "D Egiiterian Kitchen & Cafe",
    "image": "https://d-egiiterian.vercel.app/og-image.jpg",
    "@id": "https://d-egiiterian.vercel.app",
    "url": "https://d-egiiterian.vercel.app",
    "telephone": "+919404034141",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No.01, Plot No.01, Avira Avenue, West Wind Meadows, Gangapur Road",
      "addressLocality": "Nashik",
      "postalCode": "422013",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 20.003611,
      "longitude": 73.750833
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "23:00"
      }
    ],
    "servesCuisine": ["Healthy", "Egg-centric", "Cafe"],
    "priceRange": "₹₹",
    "sameAs": [
      "https://www.instagram.com/d_egiiterian", // Assuming handle
      "https://www.facebook.com/d_egiiterian"
    ]
  };

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BookingProvider>
          {children}
          <ReservationModal />
        </BookingProvider>
      </body>
    </html>
  );
}
