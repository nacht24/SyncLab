import Link from "next/link";

export default function Home() {
  return (
    /* Parent Wrapper Utama */
    <div className="flex flex-col">
      
      {/* SECTION 1: HERO (Tetap Center) */}
      <section className="flex flex-col items-center justify-center min-h-[85vh] px-6 text-center">
        <span className="px-4 py-1 rounded-full border border-sync-emerald/30 text-sync-emerald text-xs font-bold uppercase tracking-widest mb-6 bg-sync-emerald/5">
          Precision Systems
        </span>

        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-tight text-slate-50">
          High-Performance <br/> Digital <span className="text-sync-teal">Solutions.</span>
        </h1>
        
        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-12 italic">
          "A digital innovation hub that synchronizes complex business ideas into seamless, high-performance software and high-fidelity design."
        </p>

        <div className="flex gap-4">
          <Link 
            href="/contact" 
            className="bg-sync-teal text-slate-950 px-8 py-3.5 rounded-lg font-bold text-lg transition-all hover:opacity-90 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] inline-block text-center"
          >
            Get Started
          </Link>

          <Link 
            href="/about" 
            className="border border-slate-700 text-slate-50 px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-slate-800/50 transition-all inline-block text-center"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* SECTION 2: LAB STACK (Section Baru) */}
      <section className="py-24 bg-slate-950/50 border-y border-slate-900 w-full">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500 mb-10">Our Laboratory Stack</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 hover:opacity-100 transition-opacity duration-500">
            <span className="text-xl font-bold text-slate-300">Next.js 16</span>
            <span className="text-xl font-bold text-slate-300">Tailwind v4</span>
            <span className="text-xl font-bold text-slate-300">Figma</span>
            <span className="text-xl font-bold text-slate-300">Node.js</span>
            <span className="text-xl font-bold text-slate-300">PostgreSQL</span>
          </div>
        </div>
      </section>

    </div>
  );
}