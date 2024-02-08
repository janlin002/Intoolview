import React from "react";

import Card from "@/components/card/card";
import { mockData } from "@/utils/mockData";
import type { Data } from "@/types";

type Props = {
  handleClick: (e: any) => void;
  quizData: Data;
};

const BackComponent = ({ handleClick, quizData }: Props) => {
  return <Card handleClick={handleClick} data={mockData} isFront={false} />;
};

export default BackComponent;
