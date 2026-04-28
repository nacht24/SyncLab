import { notFound } from "next/navigation";
import Link from "next/link";
import teamData from "@/data/team.json";

export async function generateStaticParams() {
  return teamData.map((member) => ({
    id: String(member.id),
  }));
}

async function getMember(id) {
  const member = teamData.find((m) => String(m.id) === String(id));
  return member || null;
}

export default async function TeamMemberPage({ params }) {
  const { id } = await params;
  const member = await getMember(id);

  if (!member) notFound();

  return (
    <div className="w-full min-h-screen bg-[#020617] text-slate-50 flex flex-col items-center pt-32 pb-20 px-6 overflow-x-hidden">
      {/* Container Wrapper - Menyesuaikan lebar standar halaman lainnya */}
      <div className="w-full max-w-6xl flex flex-col">
        
        {/* Breadcrumb / Back Button */}
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-10 hover:text-sync-teal transition-all self-start"
        >
          ← BACK_TO_PERSONNEL
        </Link>

        {/* Card Utama - Menggunakan padding yang seimbang agar tidak "mencekik" konten */}
        <div className="w-full bg-slate-900/20 backdrop-blur-xl border border-slate-800/40 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-sync-teal/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-12">
            
            {/* Status & Level Header */}
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex gap-2">
                <span className="text-[10px] font-mono font-bold text-sync-teal border border-sync-teal/20 px-3 py-1 rounded bg-sync-teal/5 uppercase">
                  LVL: {member.level}
                </span>
                <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-3 py-1 rounded uppercase">
                  {member.status}
                </span>
              </div>
              <div className="text-[10px] font-mono text-sync-emerald uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-sync-emerald rounded-full animate-pulse"></span>
                SYSTEM_ONLINE
              </div>
            </div>

            {/* Name & Role Section */}
            <div className="space-y-4">
              <span className="text-sync-emerald text-[11px] font-mono font-bold uppercase tracking-[0.5em] block opacity-60">
                PERSONNEL_FILE / ID_{String(member.id).padStart(3, "0")}
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
                {member.name}
              </h1>
              <p className="text-sync-teal text-xl md:text-2xl font-mono font-semibold">
                {member.role}
              </p>
            </div>

            <div className="border-t border-slate-800/30" />

            {/* Bio & Skills Grid - Membuat komposisi lebih proporsional */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-8 space-y-4">
                <span className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.3em] block">
                  BIO_PROFILE
                </span>
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-light">
                  {member.bio}
                </p>
              </div>

              <div className="md:col-span-4 space-y-6">
                <span className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.3em] block">
                  CORE_SKILLS
                </span>
                <div className="flex flex-wrap gap-2">
                  {member.skills?.map((skill) => (
                    <span
                      key={skill}
                      className="bg-slate-950/40 border border-slate-800 text-slate-400 text-[10px] font-mono px-4 py-2 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Footer */}
            <div className="pt-10 border-t border-slate-800/30">
              <span className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.3em] mb-8 block">
                OTHER_LAB_PERSONNEL
              </span>
              <div className="flex flex-wrap gap-4">
                {teamData
                  .filter((m) => String(m.id) !== String(member.id))
                  .map((m) => (
                    <Link
                      key={m.id}
                      href={`/team/${m.id}`}
                      className="text-[11px] font-mono text-slate-500 hover:text-sync-teal tracking-widest uppercase border border-slate-800/50 hover:border-sync-teal/30 px-6 py-4 rounded-xl transition-all bg-slate-950/20"
                    >
                      {m.name.split(" ")[0]} →
                    </Link>
                  ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}