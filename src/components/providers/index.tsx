'use client';
import { MbtiContextProvider } from '@/src/context/mbti';
import { ResponseProvider } from '@/src/context/response';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';
import React from 'react';

interface ProvidersProps extends React.PropsWithChildren {}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="system">
      <Theme accentColor={'red'}>
        <MbtiContextProvider>
          <ResponseProvider>{children}</ResponseProvider>
        </MbtiContextProvider>
      </Theme>
    </ThemeProvider>
  );
};

export default Providers;
