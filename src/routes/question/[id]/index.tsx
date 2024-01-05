'use client';
import LayoutWrapper from '@/src/components/ui/layout-wrapper';
import QuestionComponent from '@/src/components/ui/question-component';
import TwoButtonQuestion from '@/src/components/ui/two-button-question';
import React from 'react';
import { QUESTION } from '@/src/constants/question';

interface indexProps {
  id: number;
}

const QuestionPage = ({ id }: indexProps) => {
  return (
    <LayoutWrapper>
      <QuestionComponent question={QUESTION[id]['question']} />
      <TwoButtonQuestion answer={QUESTION[id]['answer']} />
    </LayoutWrapper>
  );
};

export default QuestionPage;
