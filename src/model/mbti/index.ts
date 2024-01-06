export type IE = 'I' | 'E';
export type NS = 'N' | 'S';
export type TF = 'T' | 'F';
export type PJ = 'P' | 'J';
export type MbtiUnion = IE | NS | TF | PJ;
export type Mbti = `${IE}${NS}${TF}${PJ}`;
