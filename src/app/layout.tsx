import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tumusiime Kevin - Resume & Portfolio',
  description: 'Medical student | Research | Leadership | Healthcare Innovation',
  openGraph: {
    title: 'Tumusiime Kevin - Resume & Portfolio',
    description: 'Bachelor of Medicine and Bachelor of Surgery (MBChB) Student at Kabale University',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
