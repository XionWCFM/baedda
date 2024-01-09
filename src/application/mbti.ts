import { MbtiUnion } from '../model/mbti';

export const convertAnswerToMbti = (mbtiObject: {
  [key: string]: MbtiUnion;
}) => {
  const mbtiArray = Object.values(mbtiObject);
  let result = [0, 0, 0, 0];
  mbtiArray.forEach((item) => {
    switch (item) {
      case 'I':
        result[0] += 1;
      case 'E':
        result[0] -= 1;
      case 'N':
        result[1] += 1;
      case 'S':
        result[1] -= 1;
      case 'T':
        result[2] += 1;
      case 'F':
        result[2] -= 1;
      case 'P':
        result[3] += 1;
      case 'J':
        result[3] -= 1;
    }
  });
};
