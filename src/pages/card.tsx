import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import FrontComponent from "@/components/frontComponent/frontComponent";
import BackComponent from "@/components/backComponent/backComponent";
import Button from "@/components/button/button";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e: any) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  return (
    <>
      <div className="flex justify-center mt-20">
        <div className="flex flex-col gap-y-5">
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <FrontComponent handleClick={handleClick} />

            <BackComponent handleClick={handleClick} />
          </ReactCardFlip>
          <div className="flex justify-between">
            <Button handleClick={() => {}}>上一題</Button>
            <Button handleClick={() => {}}>下一題</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
