'use client';
import { Theme } from '@radix-ui/themes';
import React from 'react';

interface ProvidersProps extends React.PropsWithChildren {}

const Providers = ({ children }: ProvidersProps) => {
  return <Theme>{children}</Theme>;
};

export default Providers;
