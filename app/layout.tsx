import type { Metadata } from "next";
import "./globals.css";
import SectionNav from "./section-nav";

export const metadata: Metadata = {
  title: "Sassan | Personal Profile",
  description:
    "A concise personal profile page that presents my experience, skills, and contact links.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="portfolio-shell">
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>

          <header className="topbar">
            <div className="topbar-inner">
              <div className="brand">
                <h1 className="brand-title">Sassan</h1>
                <p className="brand-tagline">
                  Software Engineer · Problem Solver · Lifelong Learner
                </p>
              </div>

              <SectionNav />
            </div>
          </header>
          <main className="page-content" id="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
