'use client';
import LayoutWrapper from '@/src/components/ui/layout-wrapper';
import QuestionComponent from '@/src/components/ui/question-component';
import TwoButtonQuestion from '@/src/components/ui/two-button-question';
import React from 'react';
import { QUESTION } from '@/src/constants/question';
import { useResponseContext } from '@/src/context/response';
import { useRouter } from 'next/navigation';

interface indexProps {
  id: number;
}

const QuestionPage = ({ id }: indexProps) => {
  const value = useResponseContext();
  const router = useRouter();
  React.useEffect(() => {
    if (Object.keys(value).length === 0 && id !== 0) {
      router.replace('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, value]);
  return (
    <LayoutWrapper>
      <QuestionComponent question={QUESTION[id]?.['question']} />
      <TwoButtonQuestion answer={QUESTION[id]?.['answer']} />
    </LayoutWrapper>
  );
};

export default QuestionPage;
