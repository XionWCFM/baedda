import { Question } from '@/src/model/question';
import { Flex, Heading } from '@radix-ui/themes';
import Image from 'next/image';
import { Box } from '@radix-ui/themes';
import React from 'react';

interface QuestionProps {
  question: Question['question'];
}

const QuestionComponent = ({ question }: QuestionProps) => {
  return (
    <Flex direction={'column'} align={'center'}>
      <Image className=" w-[430px] h-[430px]" {...question.img} alt="jamin" />
      <Box height={'8'} />
      <Heading className=" px-4 text-center whitespace-pre-wrap">
        {question.title}
      </Heading>
      <Box height={'8'} />
    </Flex>
  );
};

export default QuestionComponent;
