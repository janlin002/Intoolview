import Company from "@/types/company";
import type { Data } from "@/types";
import QuestionType from "@/types/questionType";

export const mockData: Data = {
  questionType: QuestionType.JavaScript,
  questionContent: ["什麼是 Hoisting?"],
  answerContent: ["就那樣啊"],
  company: [Company.Google],
};
