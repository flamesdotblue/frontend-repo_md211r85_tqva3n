import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-violet-400 via-sky-300 to-amber-200" />
          <span className="text-sm font-medium tracking-wide text-white/80">PhantomDesk AI</span>
        </div>
        <p className="text-xs text-white/50">© {new Date().getFullYear()} PhantomDesk AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
