import React from "react";

import Card from "@/components/card/card";
import { mockData } from "@/utils/mockData";

type Props = {
  handleClick: (e: any) => void;
};

const FrontComponent = ({ handleClick }: Props) => {
  return <Card handleClick={handleClick} data={mockData} />;
};

export default FrontComponent;
