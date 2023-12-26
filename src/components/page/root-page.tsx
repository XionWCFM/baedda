'use client';
import { useDarkmode } from '@/src/hooks/darkmode';
import { Box, Button, Flex, Text } from '@radix-ui/themes';
import React from 'react';

interface RootPageProps {}

const RootPage = ({}: RootPageProps) => {
  const [_, darkToggle] = useDarkmode();
  return (
    <Flex direction={'column'} className=" px-4">
      <Flex>
        <Button onClick={() => darkToggle()}>다크모드</Button>
      </Flex>
      <Text>안녕하세요</Text>
      <Box height={'8'} />
    </Flex>
  );
};

export default RootPage;
