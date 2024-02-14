import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  CreateQuestionTypeResponse,
  CreateQuestionTypePayload,
} from "@/types/service";

export const questionTyoeApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://intoolview-bkd.onrender.com" }),
  endpoints: (builder) => ({
    createQuestionType: builder.mutation<
      CreateQuestionTypeResponse,
      CreateQuestionTypePayload
    >({
      query: (body) => ({
        url: "/questionType/create",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateQuestionTypeMutation } = questionTyoeApi;
