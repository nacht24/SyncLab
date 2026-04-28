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
    <div className="w-full min-h-screen bg-[#020617] flex justify-center items-start pt-32 pb-20 px-6 overflow-x-hidden text-slate-50">
      <div className="w-full max-w-4xl flex flex-col">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-10 hover:text-sync-teal transition-all self-start"
        >
          ← BACK_TO_PERSONNEL
        </Link>

        <div className="w-full bg-slate-900/30 backdrop-blur-xl border border-slate-800/60 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-sync-teal/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-14">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex gap-2">
                <span className="text-[9px] font-mono font-bold text-sync-teal border border-sync-teal/30 px-3 py-1 rounded-md bg-sync-teal/5 uppercase">
                  LVL: {member.level}
                </span>
                <span className="text-[9px] font-mono text-slate-500 border border-slate-800 px-3 py-1 rounded-md uppercase">
                  {member.status}
                </span>
              </div>
              <div className="text-[9px] font-mono text-sync-emerald uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-sync-emerald rounded-full animate-pulse"></span>
                SYSTEM_ONLINE
              </div>
            </div>

            <div className="space-y-6 text-left">
              <span className="text-sync-emerald text-[10px] font-mono font-bold uppercase tracking-[0.4em] block opacity-80">
                PERSONNEL_FILE / ID_{String(member.id).padStart(3, "0")}
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-none">
                {member.name}
              </h1>
              <p className="text-sync-teal text-xl font-mono font-semibold">
                {member.role}
              </p>
            </div>

            <div className="border-t border-slate-800/50" />

            <div className="space-y-4 text-left">
              <span className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.3em] block">
                BIO_PROFILE
              </span>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
                {member.bio}
              </p>
            </div>

            <div className="space-y-6 text-left">
              <span className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.3em] block">
                CORE_SKILLS
              </span>
              <div className="flex flex-wrap gap-3">
                {member.skills?.map((skill) => (
                  <span
                    key={skill}
                    className="bg-slate-950/80 border border-slate-800 text-slate-400 text-[11px] font-mono px-5 py-2.5 rounded-xl hover:border-sync-teal transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-10 border-t border-slate-800/50 text-left">
              <span className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.3em] mb-6 block">
                OTHER_PERSONNEL
              </span>
              <div className="flex flex-wrap gap-4">
                {teamData
                  .filter((m) => String(m.id) !== String(member.id))
                  .map((m) => (
                    <Link
                      key={m.id}
                      href={`/team/${m.id}`}
                      className="text-[10px] font-mono text-slate-500 hover:text-sync-teal tracking-widest uppercase border border-slate-800 hover:border-sync-teal/40 px-5 py-3 rounded-xl transition-all bg-slate-950/30"
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