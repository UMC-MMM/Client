import React, { useState } from "react";
import { BsSquare } from "react-icons/bs";
import { BsFillCheckSquareFill } from "react-icons/bs";

const JoinMultiSelection = () => {
  const [squareCheck, setSquareCheck] = useState(false);

  const handleSquareCheck = () => {
    setSquareCheck(!squareCheck);
  };

  const multiSelection = {
    essential: true,
    title: "다중선택형 질문",
    selections: [
      "다중선택항목1",
      "다중선택항목2",
      "다중선택항목3",
      "다중선택4",
      "다중선택5",
    ],
  };

  return (
    <div className="joinBox3">
      <div className="joinBox3Shape">
        <div className="joinBox3Cond">
          {multiSelection.essential === true ? "필수" : ""}
        </div>
        <div className="joinBox3Q">{multiSelection.title}</div>
        <div className="joinBox3A">
          {multiSelection.selections.map((selection) => {
            return (
              <div className="joinBox3A1">
                <div className="joinBox3A1Btn" onClick={handleSquareCheck}>
                  {squareCheck ? (
                    <BsFillCheckSquareFill size="20px" />
                  ) : (
                    <BsSquare size="20px" />
                  )}
                </div>
                <div className="joinBox3A1Text">{selection}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JoinMultiSelection;
