"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function About() {
  const [text, setText] = useState("");
  
  const fullText = `01  import Sync from '@lab/core'
02  const lab = new Sync()
03  // Processing business logic...
04  lab.sync(ideas, tech_stack)
05  > RUNNING_OPTIMIZATION...

# System Status: Optimal
# Performance: 99.9%
# UI/UX: High-Fidelity`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length + 25) i = 0;
    }, 45);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-12 md:py-20 px-4 sm:px-6">
      {/* SECTION 1: INTRO & HERO LAB */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch mb-16 md:mb-24">
        
        {/* KOLOM KIRI (Teks) */}
        <div className="flex flex-col justify-center">
          <span className="text-sync-emerald text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            Our Identity
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 md:mb-6 leading-[1.1] text-slate-50">
            Elevating Ideas Through <span className="text-sync-teal">Synchronization.</span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Inovasi digital yang lahir dari presisi. SyncLab memadukan rekayasa perangkat lunak yang terukur dengan desain antarmuka (high-fidelity), memastikan setiap produk yang kami rilis tidak hanya fungsional, tapi juga intuitif.
          </p>
        </div>

        {/* KOLOM KANAN (Container Lab) */}
        <div className="bg-deep-surface rounded-3xl border border-slate-800/50 relative overflow-hidden group shadow-2xl flex flex-col p-4 sm:p-6 min-h-[380px] md:min-h-[480px]">
          
          {/* TERMINAL BOX */}
          <div className="bg-[#020617] rounded-2xl border border-slate-800/50 p-4 sm:p-5 font-mono text-[10px] leading-relaxed shadow-inner h-[200px] md:h-[240px] overflow-hidden relative">
            <div className="flex justify-between items-center mb-4 border-b border-slate-800/20 pb-2">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/30"></div>
                <div className="w-2 h-2 rounded-full bg-sync-teal/30"></div>
              </div>
              <span className="text-slate-600 text-[8px] tracking-widest uppercase">synclab_terminal</span>
            </div>

            <div className="text-slate-300 whitespace-pre-wrap">
              {text.split('\n').map((line, idx) => (
                <div key={idx} className="mb-0.5">
                  <span className={`
                    ${line.includes('//') || line.includes('#') ? 'text-slate-600 italic' : ''}
                    ${line.includes('import') || line.includes('const') ? 'text-sync-emerald' : ''}
                    ${line.includes('> RUNNING') ? 'text-sync-teal font-bold animate-pulse' : ''}
                  `}>
                    {line}
                  </span>
                </div>
              ))}
              <span className="inline-block w-1 h-3 bg-sync-teal animate-pulse ml-1"></span>
            </div>
          </div>

          {/* SERVICE CARDS — Desktop */}
          <div className="flex-1 relative mt-4 h-full hidden md:block">
            <div className="absolute inset-0 flex items-center justify-center -translate-y-4">
                
                {/* CARD 1: WEB DEV (Kiri) */}
                <div className="absolute w-44 p-4 bg-slate-800 border border-slate-600 rounded-xl shadow-2xl 
                -rotate-12 -translate-x-20 translate-y-4 z-10
                hover:z-50 hover:scale-110 hover:-rotate-0 hover:border-sync-teal/50 hover:translate-x-0 hover:-translate-y-4
                transition-all duration-500 cursor-pointer group/card">
                <div className="flex gap-1 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-sync-teal/50"></div>
                </div>
                <div className="font-mono text-[8px] text-slate-500 space-y-1">
                    <div className="text-sync-emerald">{"<div>"}</div>
                    <div className="pl-2 h-1 w-full bg-slate-600 rounded"></div>
                    <div className="text-sync-emerald">{"</div>"}</div>
                </div>
                    <div className="mt-4 text-[9px] font-bold text-slate-300 opacity-0 group-hover/card:opacity-100 transition-opacity">WEB_DEV</div>
                </div>

                {/* CARD 2: UI/UX (Tengah - Default Focus) */}
                <div className="absolute w-48 p-5 bg-slate-950 border border-sync-teal/30 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.7)] 
                z-20 scale-100 
                hover:z-50 hover:scale-110 hover:border-sync-teal hover:-translate-y-6
                transition-all duration-500 cursor-pointer group/card">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-sync-teal to-sync-emerald"></div>
                    <div className="h-1.5 w-12 bg-slate-800 rounded"></div>
                </div>
                <div className="space-y-1.5">
                    <div className="h-1 w-full bg-slate-800 rounded"></div>
                    <div className="h-1 w-2/3 bg-slate-800 rounded"></div>
                </div>
                <div className="mt-4 h-6 w-full bg-sync-teal text-[#020617] text-[8px] font-black flex items-center justify-center rounded-md uppercase">
                    DESIGN_LAB
                </div>
                </div>

                {/* CARD 3: ANALYTICS (Kanan) */}
                <div className="absolute w-44 p-4 bg-slate-700 border border-slate-900 rounded-xl shadow-2xl 
                rotate-12 translate-x-20 translate-y-4 z-10
                hover:z-50 hover:scale-110 hover:rotate-0 hover:border-sync-emerald/50 hover:translate-x-0 hover:-translate-y-4
                transition-all duration-500 cursor-pointer group/card">
                <div className="flex items-end gap-1 h-6 mb-4">
                    <div className="w-1.5 bg-slate-800 h-2/3 rounded-t"></div>
                    <div className="w-1.5 bg-sync-emerald h-full rounded-t"></div>
                    <div className="w-1.5 bg-slate-500 h-1/3 rounded-t"></div>
                </div>
                <div className="h-1 w-full bg-slate-900 rounded mb-1"></div>
                <div className="h-1 w-1/2 bg-slate-900 rounded"></div>
                <div className="mt-4 text-[9px] font-bold text-slate-300 text-right opacity-0 group-hover/card:opacity-100 transition-opacity">DATA_SYNC</div>
                </div>

            </div>
          </div>

          {/* Mobile: Horizontal scrollable cards */}
          <div className="flex md:hidden gap-3 mt-4 overflow-x-auto pb-2 -mx-2 px-2">
            <div className="flex-shrink-0 w-36 p-3 bg-slate-800 border border-slate-600 rounded-xl">
              <div className="flex gap-1 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-sync-teal/50"></div>
              </div>
              <div className="font-mono text-[8px] text-slate-500 space-y-1">
                <div className="text-sync-emerald">{"<div>"}</div>
                <div className="pl-2 h-1 w-full bg-slate-600 rounded"></div>
                <div className="text-sync-emerald">{"</div>"}</div>
              </div>
              <div className="mt-3 text-[9px] font-bold text-slate-300">WEB_DEV</div>
            </div>
            <div className="flex-shrink-0 w-40 p-4 bg-slate-950 border border-sync-teal/30 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-sync-teal to-sync-emerald"></div>
                <div className="h-1.5 w-10 bg-slate-800 rounded"></div>
              </div>
              <div className="space-y-1.5">
                <div className="h-1 w-full bg-slate-800 rounded"></div>
                <div className="h-1 w-2/3 bg-slate-800 rounded"></div>
              </div>
              <div className="mt-3 h-5 w-full bg-sync-teal text-[#020617] text-[8px] font-black flex items-center justify-center rounded-md uppercase">
                DESIGN_LAB
              </div>
            </div>
            <div className="flex-shrink-0 w-36 p-3 bg-slate-700 border border-slate-900 rounded-xl">
              <div className="flex items-end gap-1 h-5 mb-3">
                <div className="w-1.5 bg-slate-800 h-2/3 rounded-t"></div>
                <div className="w-1.5 bg-sync-emerald h-full rounded-t"></div>
                <div className="w-1.5 bg-slate-500 h-1/3 rounded-t"></div>
              </div>
              <div className="h-1 w-full bg-slate-900 rounded mb-1"></div>
              <div className="h-1 w-1/2 bg-slate-900 rounded"></div>
              <div className="mt-3 text-[9px] font-bold text-slate-300 text-right">DATA_SYNC</div>
            </div>
          </div>

          {/* Background Glow */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-sync-teal/5 blur-[100px] rounded-full pointer-events-none"></div>
        </div>

      </div>

      {/* SECTION 2: VALUES */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {[
          { t: "Integrated Logic", d: "Membangun sistem yang tidak hanya jalan, tapi saling terintegrasi secara real-time." },
          { t: "UX-First Approach", d: "Setiap produk dikembangkan dengan riset mendalam untuk pengalaman sempurna." },
          { t: "Cutting-Edge Tech", d: "Menggunakan stack teknologi terbaru untuk performa dan keamanan tinggi." }
        ].map((item, i) => (
          <div key={i} className="p-6 md:p-8 bg-deep-surface/40 rounded-2xl border border-slate-800/30 hover:border-sync-teal/20 transition-all">
            <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3 text-slate-100">{item.t}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
          </div>
        ))}
      </div>

      {/* SECTION 3: SYSTEM ARCHITECTS (The Team) */}
      <div className="mt-20 md:mt-32 relative">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-sync-teal text-[10px] font-mono font-bold uppercase tracking-[0.5em] mb-4 block">Personnel_Access</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-50 uppercase tracking-tighter">Core System <span className="text-sync-emerald">Architects</span></h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

          {/* BADGE 1: HAMZAH — dibungkus Link */}
          <Link href="/team/1" className="block group">
            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/60 rounded-2xl p-6 md:p-8 relative overflow-hidden hover:border-sync-teal/50 transition-all duration-500 shadow-xl h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-sync-teal/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-sync-teal/10 blur-[50px] rounded-full"></div>
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-sync-teal/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-sync-teal block font-bold">LEVEL: OMEGA</span>
                  <span className="text-[9px] font-mono text-slate-600 block">CLEARANCE_AUTH</span>
                </div>
              </div>
              <div className="space-y-1 mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-black text-slate-50 leading-tight uppercase tracking-tight">Hamzah Permata Putra</h3>
                <p className="text-sync-emerald text-xs font-mono font-medium">Lead System Architect</p>
              </div>
              <div className="pt-4 md:pt-6 border-t border-slate-800/50 flex justify-between items-end">
                <div className="space-y-1">
                  <span className="text-[8px] font-mono text-slate-600 block uppercase">Group_Assignment</span>
                  <span className="text-[11px] font-mono text-slate-300 font-bold">LEADER_KELOMPOK_5</span>
                </div>
                <span className="text-[10px] font-mono text-sync-teal opacity-0 group-hover:opacity-100 transition-opacity">VIEW →</span>
              </div>
            </div>
          </Link>

          {/* BADGE 2: ANGGARA — dibungkus Link */}
          <Link href="/team/2" className="block group">
            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/60 rounded-2xl p-6 md:p-8 relative overflow-hidden hover:border-slate-500/50 transition-all duration-500 shadow-xl h-full">
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-400 block font-bold">LEVEL: ALPHA</span>
                  <span className="text-[9px] font-mono text-slate-600 block">CORE_MEMBER</span>
                </div>
              </div>
              <div className="space-y-1 mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-black text-slate-200 leading-tight uppercase tracking-tight">Muhamad Anggara Ramadhan</h3>
                <p className="text-slate-500 text-xs font-mono font-medium">Full-Stack Engineer</p>
              </div>
              <div className="pt-4 md:pt-6 border-t border-slate-800/50 flex justify-between items-end">
                <div className="space-y-1">
                  <span className="text-[8px] font-mono text-slate-600 block uppercase">Group_Assignment</span>
                  <span className="text-[11px] font-mono text-slate-400">MEMBER_KELOMPOK_5</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">VIEW →</span>
              </div>
            </div>
          </Link>

          {/* BADGE 3: MURFID — dibungkus Link */}
          <Link href="/team/3" className="block group">
            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/60 rounded-2xl p-6 md:p-8 relative overflow-hidden hover:border-slate-500/50 transition-all duration-500 shadow-xl h-full">
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-400 block font-bold">LEVEL: ALPHA</span>
                  <span className="text-[9px] font-mono text-slate-600 block">CORE_MEMBER</span>
                </div>
              </div>
              <div className="space-y-1 mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-black text-slate-200 leading-tight uppercase tracking-tight">Murfid Muhyiddin</h3>
                <p className="text-slate-500 text-xs font-mono font-medium">UI/UX Specialist</p>
              </div>
              <div className="pt-4 md:pt-6 border-t border-slate-800/50 flex justify-between items-end">
                <div className="space-y-1">
                  <span className="text-[8px] font-mono text-slate-600 block uppercase">Group_Assignment</span>
                  <span className="text-[11px] font-mono text-slate-400">MEMBER_KELOMPOK_5</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">VIEW →</span>
              </div>
            </div>
          </Link>

        </div>
      </div>

    </div>
  );
}