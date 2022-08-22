import React, { useState } from "react";
import { BsSquare } from "react-icons/bs";

const MultipleSelection = () => {
  const multiSelection = {
    essential: true,
    title: "다중선택형 질문",
    selections: [{ key: 0 }, { key: 1 }, { key: 2 }],
  };

  return (
    <div className="joinBoxy">
      <div className="joinBox3Shape">
        <div className="joinBox3A">
          {multiSelection.selections.map(() => {
            return (
              <label>
                <div className="joinBox3A1">
                  <div className="joinBox3A1Btn">
                    <BsSquare size="20px" />
                  </div>
                  <div className="joinBox3A1Text">
                    <input
                      id="surveyQuestionDistractor"
                      type="text"
                      name="text"
                      placeholder="선택지"
                    ></input>
                  </div>
                </div>
              </label>
            );
          })}
        </div>
      </div>
      <div className="surveyPostChoosePlusBtn">선택지 추가</div>
    </div>
  );
};

export default MultipleSelection;
