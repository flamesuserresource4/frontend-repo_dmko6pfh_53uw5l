import React from 'react';
import { Sparkles, BadgeHelp, Vinyl } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-neutral-950">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold">Our Vibe</h2>
          <p className="text-neutral-300 mt-3">
            We’re Blockbuster Records — a retro-futuristic hub for vinyl lovers. Think grey-black benches, orange desk lamps, and green neon monitors — that’s the energy we bring to every record we source.
          </p>
          <ul className="mt-6 space-y-3 text-neutral-300">
            <li className="flex items-start gap-3"><Sparkles className="w-5 h-5 text-orange-400 mt-1" /> Curated selection of new pressings and rare finds.</li>
            <li className="flex items-start gap-3"><BadgeHelp className="w-5 h-5 text-emerald-400 mt-1" /> Friendly guidance to help you build your perfect setup.</li>
            <li className="flex items-start gap-3"><Vinyl className="w-5 h-5 text-orange-400 mt-1" /> Accessories and gear to complete your analog station.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
          <div className="aspect-video rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-800 flex items-center justify-center">
            <Vinyl className="w-16 h-16 text-orange-400" />
          </div>
          <p className="text-neutral-400 text-sm mt-4">
            Open daily. Drop by for a listen, a chat, and a good dose of nostalgia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
