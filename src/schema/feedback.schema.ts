import * as z from 'zod';
import { userSchema } from './user.schema';

export const feedbackSchema = z.object({
  time: z.string(),
  writer: z.union([userSchema, z.string()]),
  reciver: userSchema,
});

export type FeedbackSchemaType = z.infer<typeof feedbackSchema>;
