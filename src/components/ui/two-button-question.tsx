import { Question } from '@/src/model/question';
import { Flex, Button } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';

interface TwoButtonQuestionProps {
  answer: Question['answer'];
}

const TwoButtonQuestion = ({ answer }: TwoButtonQuestionProps) => {
  return (
    <Flex direction={'column'} gap={'4'} className=" w-full px-4">
      {answer.button.map((item, idx) => (
        <Link key={item.id} className=" w-full" href={item.href}>
          <Button
            className=" w-full"
            variant={idx === 0 ? 'solid' : 'outline'}
            size={'3'}
          >
            {item.content}
          </Button>
        </Link>
      ))}
    </Flex>
  );
};

export default TwoButtonQuestion;
