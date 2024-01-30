import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import FrontComponent from "@/components/frontComponent/frontComponent";
import BackComponent from "@/components/backComponent/backComponent";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e: any) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <FrontComponent handleClick={handleClick} />

      <BackComponent handleClick={handleClick} />
    </ReactCardFlip>
  );
};

export default Card;
