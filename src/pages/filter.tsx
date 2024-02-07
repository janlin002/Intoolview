import React, { useState } from "react";

const Filter = () => {
  const [selectOption, setSelectOption] = useState({
    lang: "JavaScript",
    questionNum: 5,
  });

  return (
    <div className="container">
      <div className="flex flex-col  gap-y-3 border border-white w-[500px] rounded-sm h-auto p-10">
        <p className="text-white">請選擇想測驗的程式語言</p>
        <select
          name=""
          id=""
          className="w-[100%]"
          onChange={(e) => console.log(e.target.value, "value")}
        >
          <option value="JavaScript">JavaScript</option>
          <option value="React">React</option>
        </select>

        <p className="text-white">請選擇想測驗的題數</p>
        <input type="text" />

        <button className="ml-auto">開始測驗</button>
      </div>
    </div>
  );
};

export default Filter;
