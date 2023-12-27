'use client';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';
import React from 'react';

interface ProvidersProps extends React.PropsWithChildren {}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="system">
      <Theme accentColor={'red'}>{children}</Theme>
    </ThemeProvider>
  );
};

export default Providers;
