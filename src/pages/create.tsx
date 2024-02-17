import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Toaster } from "react-hot-toast";

import toastText from "@/components/toast/toast";

const initialValues = {
  questionType: "",
  questionContent: "",
  answerContent: "",
  company: "",
};

const Create = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      questionType: Yup.string().required("請選擇新增的類型"),
      questionContent: Yup.string().required("請輸入問題"),
      answerContent: Yup.string().required("請輸入答案"),
      company: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log(values, "value");
    },
  });

  const handleCreateQuiz = () => {
    // formik.handleSubmit();
    toastText();
  };

  return (
    <div className="container">
      <div className="flex flex-col  gap-y-3 border border-white w-[500px] rounded-2xl h-auto p-10">
        <p className="text-white">請選擇新增的類型*</p>
        <input
          type="text"
          id="questionType"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="請輸入想新增的類型"
          required
          onChange={formik.handleChange}
          //   onChange={(e) => console.log(e.target.value)}
          value={formik.values.questionType}
        />
        <p className="text-white">請輸入問題*</p>
        <input
          type="text"
          id="questionContent"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="請輸入問題"
          required
          onChange={formik.handleChange}
          value={formik.values.questionContent}
        />
        <p className="text-white">請輸入答案*</p>
        <input
          type="text"
          id="answerContent"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="請輸入答案"
          required
          onChange={formik.handleChange}
          value={formik.values.answerContent}
        />
        <p className="text-white">請輸入測驗的公司</p>
        <input
          type="text"
          id="company"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="請輸入測驗的公司"
          onChange={formik.handleChange}
          value={formik.values.company}
        />
        <button
          type="button"
          className="white-button ml-auto "
          onClick={handleCreateQuiz}
          //   disabled={selectOption.questionNum === ""}
        >
          確認送出
        </button>
        <Toaster position="top-right" />
      </div>
    </div>
  );
};

export default Create;
