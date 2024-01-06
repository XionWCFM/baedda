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
  answer: {
    pageIndex: string;
    button: [
      {
        id: string;
        content: string;
        type: IE | NS | TF | PJ;
        href: string;
      },
      {
        id: string;
        content: string;
        type: IE | NS | TF | PJ;
        href: string;
      },
    ];
  };
};
