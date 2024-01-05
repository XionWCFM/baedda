'use client';
import { ASSET } from '@/src/constants/asset';
import { useDarkmode } from '@/src/hooks/darkmode';
import { Box, Button, Flex, Heading, Text } from '@radix-ui/themes';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface RootPageProps {}

const RootPage = ({}: RootPageProps) => {
  return (
    <Flex
      direction={'column'}
      align={'center'}
      justify={'between'}
      className=" min-h-screen min-w-full  max-h-screen pt-16 pb-12"
    >
      <Flex direction={'column'} align={'center'}>
        <Heading size={'8'}>Hello Baedda people</Heading>
        <Box className=" mt-8" />
        <Text className="font-bold">
          지금 바로{' '}
          <span className="  text-blue-400 text-3xl font-bold">
            배따 테스트
          </span>
          를 시작해보세요
        </Text>
      </Flex>
      <Flex className="relative">
        <Link href={'/question/1'}>
          <Flex className="fixed top-[50%] translate-x-[-50%] translate-y-[-50%]  left-[50%]">
            <Image
              className=" animate-spin"
              {...ASSET.jamin}
              alt={ASSET.jamin.alt}
            />
          </Flex>
        </Link>

        <Box className=" animate-bounce absolute left-[40%] rounded-full px-4 py-2 bg-orange-400 text-white  font-bold ">
          끼얏호우! 당장 해야갯어!
        </Box>
      </Flex>
      <Flex className=" w-full  px-4">
        <Link className=" w-full" href={'/question/1'}>
          <Button className="  w-full h-[100px]" radius={'full'} size={'4'}>
            Get Started
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default RootPage;
