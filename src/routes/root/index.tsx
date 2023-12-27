'use client';
import { useDarkmode } from '@/src/hooks/darkmode';
import { Box, Button, Flex, Heading, Text } from '@radix-ui/themes';
import React from 'react';

interface RootPageProps {}

const RootPage = ({}: RootPageProps) => {
  return (
    <Flex
      direction={'column'}
      align={'center'}
      className="px-4 min-h-screen pt-40"
    >
      <Heading>Hello Baedda people</Heading>
      
    </Flex>
  );
};

export default RootPage;
