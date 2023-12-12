import * as z from 'zod';

export const userSchema = z.object({
  docId: z.string(),
  userId: z.string(),
  userGender: z.enum(['man', 'woman', 'non-binary']),
  userNickName: z.string(),
  password: z.string(),
  userAllias: z.array(z.string()),
});

export type UserSchemaType = z.infer<typeof userSchema>;
