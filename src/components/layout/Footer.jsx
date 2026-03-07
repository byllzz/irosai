import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-zinc-500 py-16 px-6 border-t border-zinc-900 min-h-screen w-full flex flex-col justify-between">
      {/* 1. Large Outlined Background Text */}
      <div className=" w-full select-none pointer-events-none">
        <h1
          className="text-[16.5vw] font-bold leading-none opacity-100 uppercase tracking-tighter"
          style={{
            color: 'transparent',
            WebkitTextStroke: '1px #cccccc59', // zinc-600 color
          }}
        >
          WadaIndex
        </h1>
      </div>
      <div className="w-full max-w-[1560px] mx-auto grid grid-cols-2 md:grid-cols-2 gap-12">
        {/* Column 1: Brand & Philosophy */}
        <div className="space-y-4">
          <h2 className="font-fair text-4xl font-bold text-zinc-100 tracking-tight">Wada Index</h2>
          <p className="text-sm leading-relaxed max-w-xs">
            A digital preservation of Wada Sanzō’s 1930s color theory. Exploring the harmony between
            traditional Japanese aesthetics and modern design.
          </p>
        </div>

        {/* Column 2: Credits & Interaction */}
        <div className="flex justify-end gap-30">
          {/* Column 1: Quick Links */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-zinc-300/90 text-xl uppercase tracking-[0.1em] font-fair mb-2 font-semibold">
              Navigation
            </h3>
            <Link to="/" className="hover:text-white transition-colors text-sm">
              Dictionary
            </Link>
            <Link to="/about" className="hover:text-white transition-colors text-sm">
              About the Artist
            </Link>
            <Link to="/faqs" className="hover:text-white transition-colors text-sm">
              Common Questions
            </Link>
            <a
              href="https://github.com/your-username/wada-index"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors text-sm"
            >
              GitHub Repo
            </a>
          </div>
          {/* column 2 */}
          <div className="flex flex-col items-start md:items-end justify-between">
            <div className="text-left md:text-right">
              <h3 className="text-zinc-300/90 font-fair text-lg uppercase tracking-[0.1em] mb-2 font-semibold">
                Source Material
              </h3>
              <p className="text-sm italic font-fair">Haishoku Sōkan (1933)</p>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-8 md:mt-0 group flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-300  hover:text-zinc-400 transition-color"
            >
             Back To Top
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-[1550px] w-full mx-auto mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest">
        <p>© 2026 Developed by (Bilal Malik)</p>
        <p>Inspired by the legacy of Wada Sanzō</p>
      </div>
    </footer>
  );
}
