export const ENV_OBJECT = {
  firebaseApiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY ?? '',
  firebaseAuthDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? '',
  firebaseProjectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? '',
  firebaseStorageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? '',
  firebaseMessagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? '',
  firebaseAppId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? '',
  firebaseMeasurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ?? '',
  kakaoRestApi: process.env.NEXT_PUBLIC_KAKAO_REST_API ?? '',
  kakaoJavascript: process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT ?? '',
  kakaoClientAppId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_APP_ID ?? '',
  kakaoClientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET ?? '',
  nextAuthUrl: process.env.NEXT_AUTH_URL ?? '',
  nextAuthSecret: process.env.NEXTAUTH_SECRET ?? '',
} as const;
