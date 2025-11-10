import React from 'react';
import Spline from '@splinetool/react-spline';
import { Disc3, ShoppingBag, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] sm:h-[85vh] md:h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black pointer-events-none" />

      <div className="relative z-10 h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="flex items-center gap-2 text-orange-400/90 mb-3">
          <Star className="w-4 h-4" />
          <p className="uppercase tracking-[0.25em] text-xs">Retro Record Shop</p>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
          BLOCKBUSTER
          <span className="block text-orange-400">Records</span>
        </h1>
        <p className="mt-4 max-w-xl text-neutral-300">
          Spin back in time with curated vinyl, classic turntables, and limited pressings. A playful nod to the analog era with a neon-tech twist.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#featured" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold px-5 py-3 rounded-md transition-colors">
            <ShoppingBag className="w-4 h-4" /> Shop Featured
          </a>
          <a href="#about" className="inline-flex items-center gap-2 border border-neutral-700 hover:border-neutral-500 text-neutral-200 px-5 py-3 rounded-md transition-colors">
            <Disc3 className="w-4 h-4" /> Our Vibe
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
