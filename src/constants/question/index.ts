import { Question } from '@/src/model/question';
import { ASSET } from '../asset';

export const QUESTION: Question[] = [
  {
    question: {
      title: '윈그제 랩 시키기 \n vs \n 내가 랩하기',
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
      img: ASSET.jamin2,
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
        content: '그걸 왜 알고있음?',
        href: '/question/2',
      },
    ],
  },
  {
    question: {
      title: '나는 무처럼 사기를 잘당한다. \n vs \n 무와 달리 사기를 안당한다',
      img: ASSET.jamin3,
    },
    answer: [
      {
        id: 'sagi',
        type: 'F',
        content: '아무래도.. 네..',
        href: '/question/3',
      },
      {
        id: 'nosagi',
        type: 'T',
        content: '사람이 어떻게 그렇게 사기를 당함?',
        href: '/question/3',
      },
    ],
  },
  {
    question: {
      title: '나는 배따방 인원의 닉네임을 \n 10개 이상 외울 수 있다',
      img: ASSET.jamin1,
    },
    answer: [
      {
        id: 'sagi',
        type: 'J',
        content: '당연히 가능',
        href: '/question/4',
      },
      {
        id: 'nosagi',
        type: 'P',
        content: '몰루겠는대용',
        href: '/question/4',
      },
    ],
  },
];
