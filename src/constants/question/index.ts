import { Question } from '@/src/model/question';
import { ASSET } from '../asset';

export const QUESTION: Question[] = [
  {
    question: {
      title: '윈그제 랩 시키기 vs 내가 랩하기',
      img: ASSET.jamin1,
    },
    answer: [
      {
        id: 'wingje',
        type: 'I',
        content: '당연히 윈그제 랩 시켜야죠',
        href:'question/1'
      },
      {
        id: 'naega',
        type: 'E',
        content: '내가 랩하죠 뭐..',
        href:'question/1'
      },
    ],
  },
];
