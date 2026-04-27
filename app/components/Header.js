"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="flex justify-between items-center px-6 md:px-10 py-4 md:py-6 sticky top-0 bg-deep-bg/90 backdrop-blur-sm border-b border-slate-800/50 z-50">
        <div className="text-2xl font-bold tracking-tighter cursor-pointer z-[60]">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <span className="text-sync-teal">Sync</span>
            Lab
          </Link>
        </div>
        
        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 z-[60] relative"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-slate-300 transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[4px]' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-slate-300 transition-all duration-300 ${menuOpen ? 'opacity-0 scale-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-slate-300 transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`}></span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-sm font-medium tracking-wide uppercase">
            {links.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={`transition-colors ${pathname === link.href ? 'text-sync-teal' : 'hover:text-sync-teal'}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Mobile Nav Overlay — OUTSIDE header to avoid clipping */}
      <div className={`fixed inset-0 bg-deep-bg flex flex-col items-center justify-center transition-all duration-400 md:hidden z-[55] ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-6 p-2 text-slate-400 hover:text-sync-teal transition-colors"
          aria-label="Close menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <nav>
          <ul className="flex flex-col items-center gap-7 text-base font-semibold tracking-widest uppercase">
            {links.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  onClick={() => setMenuOpen(false)} 
                  className={`block py-1 transition-colors ${pathname === link.href ? 'text-sync-teal' : 'text-slate-300 hover:text-sync-teal'}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Subtle branding at bottom of overlay */}
        <div className="absolute bottom-10 text-[10px] font-mono text-slate-700 uppercase tracking-[0.3em]">
          SyncLab © 2026
        </div>
      </div>
    </>
  );
}
