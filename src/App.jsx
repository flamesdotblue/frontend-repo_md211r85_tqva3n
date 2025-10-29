import React from 'react';
import Hero from './components/Hero';
import AsciiMarquee from './components/AsciiMarquee';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <AsciiMarquee />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
