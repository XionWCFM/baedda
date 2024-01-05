import QuestionPage from '@/src/routes/question/[id]';
import React from 'react';

interface pageProps {
  params: {
    id: string;
  };
}

const page = ({ params: { id } }: pageProps) => {
  const parseId = Number(id);

  if (isNaN(parseId) || parseId > 6) {
    return null;
  }

  return <QuestionPage id={parseId} />;
};

export default page;
