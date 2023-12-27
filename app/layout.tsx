import type { Metadata } from 'next';
import './globals.css';
import '@radix-ui/themes/styles.css';
import Providers from '@/src/components/providers';
import { Box, Flex } from '@radix-ui/themes';
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
      <body className=" min-h-screen   transition-colors  duration-500">
        <Providers>
          <Flex
            direction={'column'}
            justify={'center'}
            align={'center'}
            className=" bg-slate-200 dark:bg-slate-200"
          >
            <Flex className=" max-w-[430px] w-full bg-white dark:bg-neutral-800">
              {children}
            </Flex>
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
