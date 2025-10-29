import React from 'react';
import { Shield, Mic, Brain, EyeOff, Zap, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: EyeOff,
    title: 'Stealth Visibility',
    desc: 'Phantom rendering keeps the app visible to you, invisible to screen recording and screenshots.'
  },
  {
    icon: Mic,
    title: 'Live AI Transcription',
    desc: 'Real-time speech-to-text captures every word and turns it into structured context.'
  },
  {
    icon: Brain,
    title: 'Intent Detection',
    desc: 'Understands the “why” behind questions and suggests concise, targeted answers.'
  },
  {
    icon: Zap,
    title: 'Hands‑Free Assistance',
    desc: 'Automated prompts and quick replies so you never break eye contact or flow.'
  },
  {
    icon: Shield,
    title: 'Privacy‑First',
    desc: 'Local presence with fine‑grained controls over what’s processed and how.'
  },
  {
    icon: MessageSquare,
    title: 'Realtime Copilot',
    desc: 'Chat naturally with your AI while it stays off the recording—just for you.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(124,58,237,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Built for high‑stakes conversations</h2>
          <p className="mt-3 text-white/70">Interviews, negotiations, demos—get crisp answers and guidance without anyone seeing your tools.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/[0.07]">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-tr from-violet-600/30 to-sky-500/30 text-violet-200">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.2),transparent_60%)] opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
