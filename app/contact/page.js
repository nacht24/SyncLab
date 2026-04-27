"use client";
import React from 'react';

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto py-16 md:py-24 px-4 sm:px-6 relative">
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-sync-teal/5 blur-[120px] rounded-[100%] pointer-events-none"></div>

      {/* HEADER SECTION */}
      <div className="text-center mb-12 md:mb-20 relative z-10">
        <span className="text-sync-emerald text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
          Connection Portal
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 md:mb-6 text-slate-50">
          Initiate <span className="text-sync-teal">Synchronization.</span>
        </h1>
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Siap untuk mengeksekusi ide Anda? Kirimkan parameter proyek Anda ke dalam sistem kami, dan tim lab akan merespons dengan cetak biru yang tepat.
        </p>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start relative z-10">
        
        {/* KOLOM KIRI: LAB INFO */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {/* Info Card 1: Koordinat & Lokasi */}
          <div className="p-6 sm:p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl relative overflow-hidden group hover:border-sync-teal/30 transition-colors">
            <div className="absolute top-0 left-0 w-1 h-full bg-sync-teal/20 group-hover:bg-sync-teal transition-colors"></div>
            <h3 className="text-slate-500 text-xs font-mono mb-2 uppercase tracking-widest">Lab_Location</h3>
            <p className="text-xl font-bold text-slate-100 mb-4">Serang Sector, Banten</p>
            <div className="font-mono text-xs text-sync-emerald/70 flex flex-col gap-1">
              <span>LAT: 6.1104° S</span>
              <span>LON: 106.1420° E</span>
              <span className="text-slate-500 mt-2">STATUS: <span className="text-sync-teal">ONLINE & READY</span></span>
            </div>
          </div>

          {/* Info Card 2: Direct Comms */}
          <div className="p-6 sm:p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl relative overflow-hidden group hover:border-sync-emerald/30 transition-colors">
            <div className="absolute top-0 left-0 w-1 h-full bg-sync-emerald/20 group-hover:bg-sync-emerald transition-colors"></div>
            <h3 className="text-slate-500 text-xs font-mono mb-2 uppercase tracking-widest">Direct_Comms</h3>
            <div className="space-y-4 mt-4">
              <a href="mailto:hello@synclab.id" className="flex items-center gap-4 text-slate-300 hover:text-sync-teal transition-colors group/link">
                <div className="w-10 h-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center group-hover/link:border-sync-teal/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <span className="font-medium">hello@synclab.id</span>
              </a>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <span className="font-medium">+62 812-SYNC-CODE</span>
              </div>
            </div>
          </div>
        </div>

        {/* KOLOM KANAN: TRANSMISSION FORM */}
        <div className="lg:col-span-3 bg-[#020617] rounded-3xl border border-slate-800/70 p-6 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden group/form">
          {/* Dekorasi Terminal Form */}
          <div className="absolute top-0 right-8 px-4 py-1 bg-sync-teal/10 rounded-b-lg border-x border-b border-sync-teal/20 flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full bg-sync-teal animate-pulse"></div>
            <span className="text-[10px] font-mono text-sync-teal tracking-widest uppercase">Encrypted_Channel</span>
          </div>

          <form className="space-y-6 mt-4">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Input: Name */}
              <div className="space-y-2">
                <label className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">Client_ID [Name]</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-5 py-4 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sync-teal focus:ring-1 focus:ring-sync-teal transition-all"
                />
              </div>
              {/* Input: Email */}
              <div className="space-y-2">
                <label className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">Return_Address [Email]</label>
                <input 
                  type="email" 
                  placeholder="john@company.com"
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-5 py-4 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sync-teal focus:ring-1 focus:ring-sync-teal transition-all"
                />
              </div>
            </div>

            {/* Input: Subject */}
            <div className="space-y-2">
              <label className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">Project_Variable [Subject]</label>
              <input 
                type="text" 
                placeholder="Web Revamp / UI/UX Design"
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-5 py-4 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sync-teal focus:ring-1 focus:ring-sync-teal transition-all"
              />
            </div>

            {/* Input: Message */}
            <div className="space-y-2">
              <label className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">Data_Payload [Message]</label>
              <textarea 
                rows="5"
                placeholder="Deskripsikan kompleksitas ide Anda di sini..."
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-5 py-4 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sync-teal focus:ring-1 focus:ring-sync-teal transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="button"
              className="w-full bg-gradient-to-r from-sync-teal to-sync-emerald text-slate-950 font-black text-sm uppercase tracking-widest py-4 rounded-xl hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] hover:scale-[1.02] transition-all duration-300 flex justify-center items-center gap-3"
            >
              <span>Transmit Data</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}