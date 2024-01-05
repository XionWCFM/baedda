'use client';
import { Flex, Heading } from '@radix-ui/themes';
import React from 'react';

interface indexProps {}

const Question1Page = ({}: indexProps) => {
  return (
    <Flex
      direction={'column'}
      align={'center'}
      justify={'between'}
      className=" min-h-screen min-w-full  max-h-screen pt-16 pb-12"
    >
      <Flex direction={'column'} align={'center'}>
        <Heading>안녕하세요</Heading>
      </Flex>
    </Flex>
  );
};

export default Question1Page;
