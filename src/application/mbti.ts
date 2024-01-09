import { Mbti, MbtiUnion } from '../model/mbti';

export const convertAnswerToMbti = (mbtiObject: {
  [key: string]: MbtiUnion;
}): Mbti => {
  const mbtiArray = Object.values(mbtiObject);
  let scoreList = [0, 0, 0, 0];
  mbtiArray.forEach((item) => {
    switch (item) {
      case 'I':
        scoreList[0] += 1;
      case 'E':
        scoreList[0] -= 1;
      case 'N':
        scoreList[1] += 1;
      case 'S':
        scoreList[1] -= 1;
      case 'T':
        scoreList[2] += 1;
      case 'F':
        scoreList[2] -= 1;
      case 'P':
        scoreList[3] += 1;
      case 'J':
        scoreList[3] -= 1;
    }
  });
  let result = '';
  scoreList[0] >= 0 ? (result += 'I') : (result += 'E');
  scoreList[1] >= 0 ? (result += 'N') : (result += 'S');
  scoreList[2] >= 0 ? (result += 'T') : (result += 'F');
  scoreList[3] >= 0 ? (result += 'P') : (result += 'J');
  return result as Mbti;
};
