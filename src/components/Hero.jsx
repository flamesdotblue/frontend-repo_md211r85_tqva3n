import React, { useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0, active: false });

  const handleMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursor((c) => ({ ...c, x, y }));
  };

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background gradient aura */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.25),rgba(59,130,246,0.15),rgba(251,146,60,0.12)_70%,transparent_80%)] blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 pt-20 pb-12 sm:pt-28">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-violet-300" />
          <span>Introducing PhantomDesk AI</span>
        </div>

        <h1 className="text-center text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Stealth desktop copilot that stays
          <span className="bg-gradient-to-tr from-violet-300 via-sky-300 to-amber-200 bg-clip-text text-transparent"> visible only to you</span>
        </h1>

        <p className="mt-5 max-w-2xl text-center text-base text-white/70 sm:text-lg">
          An AI desktop app that hides from screen capture while remaining visible to you.
          Whisper answers in real‑time, transcribe interviews live, and auto‑respond without touching your keyboard.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#waitlist"
            className="group rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            <span className="relative inline-flex items-center gap-2">
              Join the waitlist
              <span className="block h-1 w-1 rounded-full bg-black/60 opacity-0 transition group-hover:opacity-100" />
            </span>
          </a>
          <a
            href="#features"
            className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/10"
          >
            Explore features
          </a>
        </div>

        {/* Spline scene container with interactive glow */}
        <div
          ref={containerRef}
          onMouseMove={handleMove}
          onMouseEnter={() => setCursor((c) => ({ ...c, active: true }))}
          onMouseLeave={() => setCursor((c) => ({ ...c, active: false }))}
          className="relative mt-12 h-[460px] w-full sm:h-[560px]"
        >
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent" />
          <Spline
            scene="https://prod.spline.design/GAomjSvthYZG1LLN/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />

          {/* Hover-follow glow that never blocks interactions */}
          <motion.div
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
            animate={{
              x: cursor.x,
              y: cursor.y,
              scale: cursor.active ? 1 : 0.8,
              opacity: cursor.active ? 0.35 : 0.15,
            }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            style={{ width: 280, height: 280, filter: 'blur(40px)' }}
          >
            <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.35),rgba(56,189,248,0.18)_60%,transparent_70%)]" />
          </motion.div>

          {/* Top subtle gradient overlay to blend */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
