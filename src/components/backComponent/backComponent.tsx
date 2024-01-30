import React from "react";

import Card from "@/components/card/card";
import { mockData } from "@/utils/mockData";

type Props = {
  handleClick: (e: any) => void;
};

const BackComponent = ({ handleClick }: Props) => {
  return <Card handleClick={handleClick} data={mockData} isFront={false} />;
};

export default BackComponent;
