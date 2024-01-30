import Tag from "./tag";
import Company from "./company";

export type Data = Array<{
  questionTitle: string;
  questionContent: Array<string | Array<string>>;
  answerContent: Array<string | Array<string>>;
  tag?: Array<Tag>;
  company?: Company | null;
}>;
