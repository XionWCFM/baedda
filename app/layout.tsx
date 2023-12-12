import type { Metadata } from 'next';
import './globals.css';
import Header from '@/src/components/layout/header/header';
import Footer from '@/src/components/layout/footer/Footer';

export const metadata: Metadata = {
  title: 'baedda',
  description: 'baedda',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
