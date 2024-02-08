import Company from "@/types/company";
import type { Data, TDB } from "@/types";
import QuestionType from "@/types/questionType";

const db: TDB = {
  [QuestionType.Html]: [],
  [QuestionType.Css]: [],
  [QuestionType.JavaScript]: [
    {
      questionType: QuestionType.JavaScript,
      questionContent: ["什麼是 Hoisting"],
      answerContent: ["就那樣啊"],
      company: [Company.Google, Company.Facebook],
    },
    {
      questionType: QuestionType.JavaScript,
      questionContent: ["什麼是 Event Loop"],
      answerContent: ["就那樣啊"],
      company: [Company.Google, Company.Facebook],
    },
  ],
  [QuestionType.React]: [
    {
      questionType: QuestionType.React,
      questionContent: ["什麼是 React"],
      answerContent: ["就那樣啊"],
      company: [Company.Google],
    },
  ],
};

export default db;
