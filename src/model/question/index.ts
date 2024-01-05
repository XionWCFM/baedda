import { IE, NS, PJ, TF } from '../mbti';

export type Question = {
  question: {
    title: string;
    img: {
      src: string;
      width: number;
      height: number;
      alt: string;
    };
  };
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
