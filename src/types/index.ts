import Company from "./company";
import QuestionType from "./questionType";

export type Data = {
  questionType: QuestionType;
  questionContent: Array<string | Array<string>>;
  answerContent: Array<string | Array<string>>;
  company?: Array<Company> | null;
};

export type TDB = Record<QuestionType, Array<Data>>;
