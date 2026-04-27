import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "SyncLab | Precision Software House",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main>{children}</main>

        <footer className="py-8 md:py-12 border-t border-slate-900 mt-12 md:mt-20 text-center px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            © 2026 SyncLab. All Rights Reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}