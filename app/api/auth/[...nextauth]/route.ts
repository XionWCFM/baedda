import { ENV_OBJECT } from '@/src/constants/env';
import NextAuth from 'next-auth/next';
import KakaoProvider from 'next-auth/providers/kakao';

export const authOptions = {
  providers: [
    KakaoProvider({
      clientId: ENV_OBJECT.kakaoJavascript,
      clientSecret: ENV_OBJECT.kakaoClientSecret,
    }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
