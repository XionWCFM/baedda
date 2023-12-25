import type { Metadata } from 'next';
import './globals.css';

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
      <body className=" flex flex-col">{children}</body>
    </html>
  );
}
