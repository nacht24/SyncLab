const services = [
  {
    title: "Web Systems",
    tag: "Development",
    desc: "Membangun ekosistem web yang skalabel dan responsif menggunakan Next.js untuk performa maksimal."
  },
  {
    title: "Mobile Apps",
    tag: "Mobile Dev",
    desc: "Pengembangan aplikasi iOS dan Android dengan satu basis kode yang efisien dan performa native."
  },
  {
    title: "UI/UX Lab",
    tag: "Design & Research",
    desc: "Transformasi ide bisnis menjadi antarmuka intuitif melalui riset pengguna dan desain high-fidelity."
  },
  {
    title: "Experience Optimization",
    tag: "Audit & Analysis",
    desc: "Membedah dan mengoptimalkan setiap titik interaksi pengguna untuk meningkatkan konversi dan kepuasan."
  },
  {
    title: "Sync Integration",
    tag: "System Logic",
    desc: "Sinkronisasi antar platform dan integrasi API untuk memastikan alur data bisnis berjalan tanpa hambatan."
  },
  {
    title: "Stability Support",
    tag: "Maintenance",
    desc: "Mastikan sistem Anda tetap aman, mutakhir, dan berjalan stabil 24/7 dengan dukungan teknis berkelanjutan."
  }
];

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto py-24 px-6">
      {/* Header Section */}
      <div className="text-center mb-20">
        <span className="text-sync-emerald text-xs font-bold uppercase tracking-[0.3em] bg-sync-emerald/10 px-4 py-2 rounded-full">
          Lab Expertise
        </span>
        <h2 className="text-5xl font-black mt-6 text-slate-50">
          Precision <span className="text-sync-teal">Services.</span>
        </h2>
        <p className="mt-4 text-slate-400 max-w-xl mx-auto italic">
          "Kami menyinkronkan kompleksitas teknologi dengan perilaku pengguna, meracik ekosistem digital yang presisi, skalabel, dan intuitif."
        </p>
      </div>

      {/* Grid Services Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="group p-10 bg-deep-surface rounded-2xl border border-slate-800/50 hover:border-sync-teal/50 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 text-sync-teal group-hover:opacity-20 transition-opacity">
              <span className="text-6xl font-black">0{index + 1}</span>
            </div>
            
            <div className="text-xs font-bold text-sync-emerald mb-4 uppercase tracking-widest">
              {service.tag}
            </div>
            <h3 className="text-2xl font-bold text-slate-50 mb-4 group-hover:text-sync-teal transition-colors">
              {service.title}
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm relative z-10">
              {service.desc}
            </p>
            
            <div className="mt-8 h-1 w-12 bg-slate-800 group-hover:w-full group-hover:bg-sync-teal transition-all duration-700"></div>
          </div>
        ))}
      </div>

      {/* Why Choose Us Section (Tambahan) */}
      <section className="mt-32 pt-20 border-t border-slate-900">
        <h2 className="text-3xl font-bold mb-16 text-center text-slate-50">
          Why Choose <span className="text-sync-teal">Sync</span><span className="text-slate-400">Lab</span>?
        </h2>
        <div className="grid md:grid-cols-3 gap-12 text-left">
          <div className="relative pl-8 border-l border-sync-teal/30">
            <h4 className="text-lg font-bold text-slate-100 mb-2">Clean & Scalable Code</h4>
            <p className="text-slate-400 text-sm leading-relaxed">Menulis kode standar industri yang rapi agar mudah dikembangkan di masa depan.</p>
          </div>
          <div className="relative pl-8 border-l border-sync-teal/30">
            <h4 className="text-lg font-bold text-slate-100 mb-2">User-Centric Design</h4>
            <p className="text-slate-400 text-sm leading-relaxed">Setiap fungsi dibangun berdasarkan riset perilaku pengguna yang nyata.</p>
          </div>
          <div className="relative pl-8 border-l border-sync-teal/30">
            <h4 className="text-lg font-bold text-slate-100 mb-2">Modern Tech Stack</h4>
            <p className="text-slate-400 text-sm leading-relaxed">Menggunakan ekosistem terbaru untuk menjamin kecepatan dan keamanan sistem.</p>
          </div>
        </div>
      </section>
    </div>
  );
}