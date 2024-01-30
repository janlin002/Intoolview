import Tag from "./tag";
import Company from "./company";
import QuestionType from "./questionType";

export type Data = {
  questionType: QuestionType;
  questionContent: Array<string | Array<string>>;
  answerContent: Array<string | Array<string>>;
  tag?: Array<Tag>;
  company?: Company | null;
};
