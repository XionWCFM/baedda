'use client';
import { ASSET } from '@/src/constants/asset';
import { useDarkmode } from '@/src/hooks/darkmode';
import { Box, Button, Flex, Heading, Text } from '@radix-ui/themes';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAnimate } from 'framer-motion';

interface RootPageProps {}

const RootPage = ({}: RootPageProps) => {
  return (
    <Flex
      direction={'column'}
      align={'center'}
      justify={'between'}
      className=" min-h-screen max-h-screen pt-16 pb-12"
    >
      <Flex direction={'column'} align={'center'}>
        <Heading size={'8'}>Hello Baedda people</Heading>
        <Box className=" mt-8" />
        <Text className="font-bold">지금 바로 배따 테스트를 시작해보세요</Text>
      </Flex>
      <Flex className=" relative">
        <Image
          className="animate-spin"
          {...ASSET.jamin}
          height={350}
          alt={ASSET.jamin.alt}
        />
        <Box className=" animate-bounce absolute left-[40%] rounded-full px-4 py-2 bg-red-500 text-white  font-bold ">
          끼얏호우! 당장 해야갯어!
        </Box>
      </Flex>
      <Flex className=" w-full px-4">
        <Link className=" w-full" href={'/question'}>
          <Button className=" w-full h-[100px]" radius={'full'} size={'4'}>
            Get Started
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default RootPage;
