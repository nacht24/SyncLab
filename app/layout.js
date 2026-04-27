import Link from "next/link"; // Tambahkan ini
import "./globals.css";

export const metadata = {
  title: "SyncLab | Precision Software House",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="flex justify-between items-center px-10 py-6 sticky top-0 bg-deep-bg/90 backdrop-blur-sm border-b border-slate-800/50 z-50">
          <div className="text-2xl font-bold tracking-tighter cursor-pointer">
            <Link href="/">
              <span className="text-sync-teal">Sync</span>
              Lab
            </Link>
          </div>
          
          <nav>
            <ul className="flex gap-8 text-sm font-medium tracking-wide uppercase">
              <li><Link href="/" className="hover:text-sync-teal transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-sync-teal transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-sync-teal transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-sync-teal transition-colors">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="py-12 border-t border-slate-900 mt-20 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            © 2026 SyncLab. All Rights Reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}