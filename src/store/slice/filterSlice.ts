import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import Company from "@/types/company";
import QuestionType from "@/types/questionType";

export type FilterState = {
  formValue: {
    lang: QuestionType;
    questionNum: string;
    company: Company | null;
  };
};

const initialState: FilterState = {
  formValue: {
    lang: QuestionType.JavaScript,
    questionNum: "",
    company: null,
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    createQuiz: (
      state,
      action: PayloadAction<{
        lang: QuestionType;
        questionNum: string;
        company: Company | null;
      }>
    ) => {
      state.formValue = action.payload;
    },
  },
});

export const { createQuiz } = filterSlice.actions;
export const selectFilter = (state: { filter: FilterState }) =>
  state.filter.formValue;

export default filterSlice.reducer;
