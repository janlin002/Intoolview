import React from "react";

import Card from "@/components/card/card";
import { mockData } from "@/utils/mockData";
import type { Data } from "@/types";

type Props = {
  handleClick: (e: any) => void;
  quizData: Data;
};

const FrontComponent = ({ handleClick, quizData }: Props) => {
  return <Card handleClick={handleClick} data={quizData} />;
};

export default FrontComponent;
