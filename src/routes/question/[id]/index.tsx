'use client';
import LayoutWrapper from '@/src/components/ui/layout-wrapper';
import QuestionComponent from '@/src/components/ui/question-component';
import TwoButtonQuestion from '@/src/components/ui/two-button-question';
import React from 'react';

interface indexProps {}

const Question1Page = ({}: indexProps) => {
  return (
    <LayoutWrapper>
      <QuestionComponent />
      <TwoButtonQuestion />
    </LayoutWrapper>
  );
};

export default Question1Page;
