import * as z from 'zod';
import { feedbackSchema } from './feedback.schema';

export const userSchema = z.object({
  userId: z.string(),
  userGender: z.enum(['man', 'woman', 'non-binary']),
  userNickName: z.string(),
  password: z.string(),
  reciveFeedback: z.array(feedbackSchema),
  writeFeedback: z.array(feedbackSchema),
  userAllias: z.array(z.string()),
});

export type UserSchemaType = z.infer<typeof userSchema>;
