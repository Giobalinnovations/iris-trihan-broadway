import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title:
    'Iris Broadway, Sector 85-86, Gurugram - Premier Commercial & Residential Hub',
  description:
    'Starting at ₹70 Lakhs, Trehan IRIS has developed 2.8 acres with luxury shops, eating, entertainment, and fully furnished Soho Suites. Perfectly placed with first-rate facilities, including a function space, rooftop pool, and more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
