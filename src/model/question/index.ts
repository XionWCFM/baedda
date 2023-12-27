import { IE, NS, PJ, TF } from '../mbti';

export type Question = {
  question: string;
  answer: [
    {
      id: string;
      content: string;
      type: IE | NS | TF | PJ;
    },
    {
      id: string;
      content: string;
      type: IE | NS | TF | PJ;
    },
  ];
};
