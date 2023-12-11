import * as z from 'zod';

export const feedbackSchema = z.object({
  time: z.string(),
});

export type FeedbackSchemaType = z.infer<typeof feedbackSchema>;
