import type { Metadata } from 'next';
import './globals.css';
import Header from '@/src/components/layout/header/header';
import Footer from '@/src/components/layout/footer/footer';
import SessionProvider from '@/src/components/provider/session-provider';
import { getServerSession } from 'next-auth';

export const metadata: Metadata = {
  title: 'baedda',
  description: 'baedda',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className=" flex flex-col">
        <Header />
        <SessionProvider session={session}>
          <main className="">{children}</main>
        </SessionProvider>
        <Footer />
      </body>
    </html>
  );
}
