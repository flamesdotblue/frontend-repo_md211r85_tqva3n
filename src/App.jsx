import React from 'react';
import Hero from './components/Hero';
import AsciiMarquee from './components/AsciiMarquee';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <AsciiMarquee />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
