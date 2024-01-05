'use client';
import { ASSET } from '@/src/constants/asset';
import { Box, Button, Flex, Heading, Text } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface indexProps {}

const Question1Page = ({}: indexProps) => {
  return (
    <Flex
      direction={'column'}
      align={'center'}
      justify={'between'}
      className=" min-h-screen max-h-screen pt-16 pb-12"
    >
      <Flex direction={'column'} align={'center'}>
        <Image {...ASSET.jamin1} alt="jamin" />
        <Box height={'8'} />
        <Heading>윈그제 랩시키기 vs 내가 랩하기</Heading>
        <Box height={'8'} />
      </Flex>
      <Flex direction={'column'} gap={'4'} className=" w-full px-4">
        <Link className=" w-full" href={'/question/2'}>
          <Button className=" w-full" size={'3'}>
            당연히 윈그제 랩
          </Button>
        </Link>
        <Link className=" w-full" href={'/question/2'}>
          <Button className=" w-full" variant={'outline'} size={'3'}>
            제가 랩하죠 뭐..
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Question1Page;
