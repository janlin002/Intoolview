import { z } from "zod";

const CreateResponse = z.object({
  questionType: z.string(),
  questionContent: z.string(),
  answerContent: z.string(),
  company: z.string().optional(),
});
const CreatePayload = z.object({
  questionType: z.string(),
  questionContent: z.string(),
  answerContent: z.string(),
  company: z.string().optional(),
});

export type CreateQuestionTypeResponse = z.infer<typeof CreateResponse>;
export type CreateQuestionTypePayload = z.infer<typeof CreatePayload>;
