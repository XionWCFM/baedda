import type { Metadata } from 'next';
import './globals.css';
import '@radix-ui/themes/styles.css';
import Providers from '@/src/components/providers';
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
    <html suppressHydrationWarning lang="en">
      <body className=" min-h-screen dark:bg-black-100  transition-colors  duration-500">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
