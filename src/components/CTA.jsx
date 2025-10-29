import React from 'react';

const CTA = () => {
  return (
    <section id="waitlist" className="relative bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h3 className="text-3xl font-semibold tracking-tight">Be the first to go invisible</h3>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Join the early access list for PhantomDesk AI. We’ll notify you when invites roll out.
        </p>

        <form
          className="mx-auto mt-8 flex w-full max-w-xl flex-col items-center gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const input = form.querySelector('input');
            if (input) {
              alert(`Thanks! We\'ll keep you posted at ${input.value}.`);
              input.value = '';
            }
          }}
        >
          <input
            type="email"
            required
            placeholder="your@email.com"
            className="h-12 w-full flex-1 rounded-lg border border-white/10 bg-white/5 px-4 text-sm text-white placeholder-white/40 outline-none transition focus:border-white/20 focus:bg-white/10"
          />
          <button
            type="submit"
            className="h-12 rounded-lg bg-white px-5 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Join waitlist
          </button>
        </form>

        <p className="mt-4 text-xs text-white/50">No spam. You can unsubscribe anytime.</p>
      </div>
    </section>
  );
};

export default CTA;
