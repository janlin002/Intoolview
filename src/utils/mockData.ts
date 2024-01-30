import Tag from "@/types/tag";
import Company from "@/types/company";
import type { Data } from "@/types";

export const mockData: Data = [
  {
    questionTitle: "什麼是 Hoisting",
    questionContent: ["我是內容", ["http://..."], "我是內容"],
    answerContent: ["我是內容", ["http://..."], "我是內容"],
    tag: [Tag.JavaScript],
    company: Company.Google,
  },
];
