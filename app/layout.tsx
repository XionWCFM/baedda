import type { Metadata } from 'next';
import './globals.css';
import '@radix-ui/themes/styles.css';
import Providers from '@/src/components/providers';
import { Box, Flex } from '@radix-ui/themes';
import { MbtiContextProvider } from '@/src/context/mbti';
import { UserContextProvider } from '@/src/context/user';
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
          <MbtiContextProvider>
            <UserContextProvider>
              <Flex
                direction={'column'}
                align={'center'}
                className=" bg-slate-200 dark:bg-slate-200 min-h-screen"
              >
                <Flex className=" max-w-[430px] w-full bg-white min-h-screen dark:bg-neutral-800">
                  {children}
                </Flex>
              </Flex>
            </UserContextProvider>
          </MbtiContextProvider>
        </Providers>
      </body>
    </html>
  );
}
