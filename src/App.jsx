import React from 'react';
import Hero from './components/Hero.jsx';
import FeaturedProducts from './components/FeaturedProducts.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-['IBM_Plex_Sans']">
      <Hero />
      <FeaturedProducts />
      <About />
      <Footer />
    </div>
  );
}

export default App;
