import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

const Hero = () => {
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
            className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Join the waitlist
          </a>
          <a
            href="#features"
            className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Explore features
          </a>
        </div>

        {/* Spline scene container */}
        <div className="relative mt-12 h-[420px] w-full sm:h-[520px]">
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent" />
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* top subtle gradient overlay to blend */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
