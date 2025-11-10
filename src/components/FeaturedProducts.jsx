import React from 'react';
import { Disc3, Music2, PlayCircle } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Neon Nights LP',
    artist: 'The Retrogrades',
    price: 28,
    color: 'from-orange-500/20 to-orange-400/10',
    icon: Disc3,
  },
  {
    id: 2,
    title: 'Analog Dreams',
    artist: 'VHS & Chill',
    price: 32,
    color: 'from-emerald-500/20 to-emerald-400/10',
    icon: Music2,
  },
  {
    id: 3,
    title: 'Pixelwave Vol. 1',
    artist: 'Arcade Avenue',
    price: 24,
    color: 'from-purple-500/20 to-purple-400/10',
    icon: PlayCircle,
  },
];

const FeaturedProducts = () => {
  return (
    <section id="featured" className="relative py-20 bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Featured Vinyl</h2>
            <p className="text-neutral-400 mt-1">Handpicked pressings with a retro-tech vibe.</p>
          </div>
          <a href="#" className="text-orange-400 hover:text-orange-300 font-medium">View all</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.id} className="group rounded-xl border border-neutral-800 bg-gradient-to-br from-transparent to-transparent hover:from-neutral-900/60 hover:to-neutral-900/20 transition-colors p-5">
                <div className={`aspect-square w-full rounded-lg bg-gradient-to-br ${p.color} border border-neutral-800 flex items-center justify-center mb-4`}> 
                  <Icon className="w-16 h-16 text-neutral-200 group-hover:scale-105 transition-transform" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{p.title}</h3>
                    <p className="text-sm text-neutral-400">{p.artist}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-orange-400 font-semibold">${p.price}</p>
                    <button className="mt-1 text-xs border border-neutral-700 hover:border-neutral-500 px-3 py-1.5 rounded-md">Add</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
