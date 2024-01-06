'use client';
import { useResponseDispatchContext } from '@/src/context/response';
import { Question } from '@/src/model/question';
import { Flex, Button } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';

interface TwoButtonQuestionProps {
  answer: Question['answer'];
}

const TwoButtonQuestion = ({ answer }: TwoButtonQuestionProps) => {
  const dispatch = useResponseDispatchContext();
  const onClick = (item: Question['answer']['button'][number]) =>
    dispatch((prev) => ({
      ...prev,
      [answer.pageIndex]: item.type,
    }));

  return (
    <Flex direction={'column'} gap={'4'} className=" w-full px-4">
      {answer.button.map((item, idx) => (
        <Link key={item.id} className=" w-full" href={item.href}>
          <Button
            className=" w-full"
            variant={idx === 0 ? 'solid' : 'outline'}
            size={'3'}
            onClick={() => onClick(item)}
          >
            {item.content}
          </Button>
        </Link>
      ))}
    </Flex>
  );
};

export default TwoButtonQuestion;
