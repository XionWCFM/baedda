import { Question } from '@/src/model/question';
import { Flex, Button } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';

interface TwoButtonQuestionProps {
  answer: Question['answer'];
}

const TwoButtonQuestion = ({}: TwoButtonQuestionProps) => {
  return (
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
  );
};

export default TwoButtonQuestion;
