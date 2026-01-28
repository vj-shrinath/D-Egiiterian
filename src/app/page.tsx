import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuHighlights from "@/components/MenuHighlights";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <MenuHighlights />

      {/* Short About/Promo Section using the uploaded image maybe? or just text */}
      <section id="about" className="py-24 bg-zinc-900 border-y border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            {/* Using the original flyer as a 'featured' image here */}
            <Image
              src="/hero-image.png"
              alt="D Egiiterian Flyer"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Where Every Egg Tells a Story
            </h2>
            <div className="w-20 h-1 bg-primary" />
            <p className="text-gray-400 text-lg leading-relaxed">
              At D Egiiterian Kitchen & Cafe, we believe in the versatility of the egg. From classic comfort breakfasts to gourmet innovations, our menu is a tribute to healthy, protein-rich dining without compromising on flavor.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-primary font-bold text-xl mb-2">Organic</h4>
                <p className="text-gray-500">Farm fresh ingredients sourced daily.</p>
              </div>
              <div>
                <h4 className="text-primary font-bold text-xl mb-2">Artisan</h4>
                <p className="text-gray-500">Chef-curated recipes for a unique taste.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
