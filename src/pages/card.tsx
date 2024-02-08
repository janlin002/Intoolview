import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { useSelector } from "react-redux";

import FrontComponent from "@/components/frontComponent/frontComponent";
import BackComponent from "@/components/backComponent/backComponent";
import { selectFilter } from "@/store/slice/filterSlice";
import db from "@/db/db";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [questionList, setQuestionList] = useState<any>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filterData = useSelector(selectFilter);

  const handleClick = (e: any) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  // create random quiz
  useEffect(() => {
    const quizNums = db[filterData.lang].length;

    let quizArr = [];
    let newArr = Array.from(db[filterData.lang]);
    for (let i = 0; i < quizNums; i++) {
      if (newArr.length === 0) return;
      let randomNum = Math.floor(Math.random() * newArr.length);
      const test = newArr[randomNum];
      quizArr.push(test);
      newArr.splice(randomNum, 1);
    }

    setQuestionList(quizArr);
  }, [filterData]);

  return (
    <>
      <div className="container">
        <div className="flex flex-col gap-y-5">
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <FrontComponent
              handleClick={handleClick}
              quizData={questionList[currentIndex]}
            />

            <BackComponent
              handleClick={handleClick}
              quizData={questionList[currentIndex]}
            />
          </ReactCardFlip>
          <div className="flex justify-between">
            <button
              className="white-button"
              onClick={() => setCurrentIndex((prev) => prev - 1)}
              disabled={currentIndex === 0}
            >
              上一題
            </button>
            <button
              className="white-button"
              onClick={() => setCurrentIndex((prev) => prev + 1)}
              disabled={currentIndex === questionList.length - 1}
            >
              下一題
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
