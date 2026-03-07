import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkStyle = ({ isActive }) =>
    `font-fair tracking-widest transition-colors  ${
      isActive ? 'text-white border-b border-white' : 'text-zinc-300/90'
    }`;

  return (
    <nav className="h-22 flex flex-row items-center justify-between pl-1 pr-7 py-4 bg-transparent max-w-330 w-full mx-auto">
      {/* logo */}
      <NavLink
        to="/"
        className="font-fair text-[1.65rem] tracking-tight text-zinc-300/90 hover:text-white"
      >
        Dictionary
      </NavLink>

      {/* navigation links */}
      <div className="flex gap-8">
        <NavLink
          to="/about"
          className={linkStyle}
        >
          ABOUT
        </NavLink>
      </div>
    </nav>
  );
}
