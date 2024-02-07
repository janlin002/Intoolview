import React, { useState, useEffect } from "react";

import Company from "@/types/company";
import QuestionType from "@/types/questionType";
import db from "@/db/db";

const Filter = () => {
  const [companyList, setCompanyList] = useState<Array<Company>>([]);

  const [selectOption, setSelectOption] = useState<{
    lang: QuestionType;
    questionNum: string;
    company: Company | null;
  }>({
    lang: QuestionType.JavaScript,
    questionNum: "",
    company: null,
  });

  // dynamic create company list
  useEffect(() => {
    const companyList = db[selectOption.lang].flatMap(
      (item) => item.company
    ) as Array<Company>;
    setCompanyList(companyList);
  }, [selectOption.lang, setCompanyList]);

  return (
    <div className="container">
      <div className="flex flex-col  gap-y-3 border border-white w-[500px] rounded-2xl h-auto p-10">
        <p className="text-white">請選擇想測驗的測驗內容*</p>
        <div className="flex gap-x-2.5">
          <div className="w-[500px]">
            <select
              id="countries"
              onChange={(e) => {
                setSelectOption((prev) => ({
                  ...prev,
                  lang: e.target?.value as QuestionType,
                }));
              }}
              value={selectOption.lang}
            >
              <option selected disabled>
                請選擇一個測驗內容
              </option>
              {Object.keys(db).map((lang) => (
                <option value={lang} key={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="text-white">請選擇想測驗的題數*</p>
        <p className="text-white text-xs">
          目前題庫最多 {db[selectOption.lang].length} 題
        </p>
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="請輸入題數"
          required
          onChange={(e) => {
            const num =
              db[selectOption.lang].length < Number(e.target?.value)
                ? db[selectOption.lang].length
                : e.target?.value;

            setSelectOption((prev) => ({
              ...prev,
              questionNum: String(num),
            }));
          }}
          value={selectOption.questionNum}
        />

        <p className="text-white">請選擇想測驗的公司</p>
        <select id="countries" disabled={companyList.length === 0}>
          <option selected>請選擇一家公司</option>
          {companyList?.map((company) => (
            <option
              value={company}
              key={company}
              onChange={(e: any) => {
                setSelectOption((prev) => ({
                  ...prev,
                  company: e.target?.value,
                }));
              }}
            >
              {company}
            </option>
          ))}
        </select>

        <button type="button" className="white-button ml-auto">
          開始測驗
        </button>
      </div>
    </div>
  );
};

export default Filter;
