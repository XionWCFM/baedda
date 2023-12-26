'use client';
import { useDarkmode } from '@/src/hooks/darkmode';
import { Button, Flex, Text } from '@radix-ui/themes';
import React from 'react';

interface RootPageProps {}

const RootPage = ({}: RootPageProps) => {
  
  const [_, darkToggle] = useDarkmode();
  return (
    <Flex>
      <Text>안녕하세요</Text>
      <Button onClick={() => darkToggle()}>다크모드</Button>
    </Flex>
  );
};

export default RootPage;
