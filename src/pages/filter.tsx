import React, { useState, useEffect } from "react";

import { langList } from "@/utils/varients";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [files, setFiles] = useState([]);

  const options = ["Option 1", "Option 2", "Option 3"];
  const [selectOption, setSelectOption] = useState({
    lang: "JavaScript",
    questionNum: "5",
    company: "",
  });

  useEffect(() => {}, []);

  return (
    <div className="container">
      <div className="flex flex-col  gap-y-3 border border-white w-[500px] rounded-2xl h-auto p-10">
        <p className="text-white">請選擇想測驗的測驗內容*</p>
        <div className="flex gap-x-2.5">
          <div className="w-[500px]">
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option selected disabled>
                請選擇一個測驗內容
              </option>
              {langList.map((lang) => (
                <option
                  value={lang}
                  key={lang}
                  onChange={(e: any) => {
                    setSelectOption((prev) => ({
                      ...prev,
                      lang: e.target?.value,
                    }));
                  }}
                >
                  {lang}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="text-white">請選擇想測驗的題數*</p>
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="請輸入題數"
          required
          onChange={(e) =>
            setSelectOption((prev) => ({
              ...prev,
              questionNum: e.target?.value,
            }))
          }
        />

        <p className="text-white">請選擇想測驗的公司</p>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option selected>請選擇一家公司</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>

        <button
          type="button"
          className="text-gray-800 bg-white hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-[100px] ml-auto"
        >
          開始測驗
        </button>
      </div>
    </div>
  );
};

export default Filter;
