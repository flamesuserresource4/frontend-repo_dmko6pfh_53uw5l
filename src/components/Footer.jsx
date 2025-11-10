import React from 'react';
import { Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded border border-neutral-700 grid place-items-center">
              <span className="text-orange-400 font-black text-sm">BB</span>
            </div>
            <p className="text-sm text-neutral-400">Blockbuster Records © {new Date().getFullYear()}</p>
          </div>
          <div className="flex items-center gap-4 text-neutral-300">
            <a aria-label="Instagram" href="#" className="hover:text-orange-400"><Instagram className="w-5 h-5" /></a>
            <a aria-label="Twitter" href="#" className="hover:text-orange-400"><Twitter className="w-5 h-5" /></a>
            <a aria-label="Email" href="#" className="hover:text-orange-400"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
