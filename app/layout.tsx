import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sassan | Personal Profile',
  description:
    'A concise personal profile page that presents my experience, skills, and contact links.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
