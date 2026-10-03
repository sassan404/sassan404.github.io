import type { Metadata } from "next";
import "./globals.css";
import SectionNav from "./section-nav";

export const metadata: Metadata = {
  title: "Hasan Ismail | Software Developer",
  description:
    "Portfolio of Hasan Ismail, full stack software developer working with Next.js, TypeScript, Java and Scala.",
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
                <h1 className="brand-title">Hasan Ismail</h1>
                <p className="brand-tagline">Full Stack Developer · Beirut, Lebanon</p>
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
