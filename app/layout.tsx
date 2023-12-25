import type { Metadata } from 'next';
import './globals.css';
import '@radix-ui/themes/styles.css';
import Providers from '@/src/components/provider/Providers';
export const metadata: Metadata = {
  title: 'baedda',
  description: 'baedda',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
