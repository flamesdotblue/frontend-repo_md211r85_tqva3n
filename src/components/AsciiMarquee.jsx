import React from 'react';
import { motion } from 'framer-motion';

const asciiRow = `▁ ▂ ▃ ▄ ▅ ▆ ▇ █ ▇ ▆ ▅ ▄ ▃ ▂ ▁  █ █ ▇ ▆ ▅ ▄ ▃ ▂ ▁  PHANTOMDESK AI  ▁ ▂ ▃ ▄ ▅ ▆ ▇ █ ▇ ▆ ▅ ▄ ▃ ▂ ▁`;

const MarqueeStrip = ({ reverse = false }) => (
  <div className="relative w-full overflow-hidden">
    <motion.div
      className="flex whitespace-nowrap text-[12px] sm:text-sm tracking-widest"
      animate={{ x: reverse ? ['0%', '-100%'] : ['-100%', '0%'] }}
      transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
    >
      <span className="mx-6 text-white/40 font-mono">{asciiRow}</span>
      <span className="mx-6 text-white/40 font-mono">{asciiRow}</span>
      <span className="mx-6 text-white/40 font-mono">{asciiRow}</span>
      <span className="mx-6 text-white/40 font-mono">{asciiRow}</span>
    </motion.div>
  </div>
);

const AsciiMarquee = () => {
  return (
    <section className="relative bg-black/95 py-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_100%,rgba(56,189,248,0.06),transparent_60%)]" />
      <div className="relative">
        <MarqueeStrip />
        <div className="my-2" />
        <MarqueeStrip reverse />
      </div>
    </section>
  );
};

export default AsciiMarquee;
