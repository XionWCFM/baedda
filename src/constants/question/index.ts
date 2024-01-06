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
        href: '/question/1',
      },
      {
        id: 'naega',
        type: 'E',
        content: '내가 랩하죠 뭐..',
        href: '/question/1',
      },
    ],
  },
  {
    question: {
      title: '나는 가라아게와 치킨의 차이점을 알고있다.',
      img: ASSET.jamin1,
    },
    answer: [
      {
        id: 'karaage',
        type: 'N',
        content: '가라아게는 치킨이 아니죠',
        href: '/question/2',
      },
      {
        id: 'chicken',
        type: 'S',
        content: '그걸 왜 고민함?',
        href: '/question/2',
      },
    ],
  },
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
        href: '/question/3',
      },
      {
        id: 'naega',
        type: 'E',
        content: '내가 랩하죠 뭐..',
        href: '/question/3',
      },
    ],
  },
];
