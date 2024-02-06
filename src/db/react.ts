import Tag from "@/types/tag";
import Company from "@/types/company";
import type { Data } from "@/types";
import QuestionType from "@/types/questionType";

const ReactData = [
  {
    questionType: QuestionType.JavaScript,
    questionContent: [
      "我是內容1",
      ["https://avatars.githubusercontent.com/u/10256257?v=4"],
      "我是內容",
    ],
    answerContent: [
      "我是內容",
      ["https://static.pexels.com/photos/59523/pexels-photo-59523.jpeg"],
      "我是內容",
    ],
    tag: [Tag.JavaScript],
    company: Company.Google,
  },
];

export default ReactData;
