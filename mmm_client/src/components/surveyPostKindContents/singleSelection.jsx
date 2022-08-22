import React, { useState } from "react";
import { BsCircle } from "react-icons/bs";

const SingleSelection = () => {
  const singleSelection = {
    essential: true,
    title: "단일선택형 질문",
    selections: [{ key: 0 }, { key: 1 }],
  };

  return (
    <div className="joinBoxy">
      <div className="joinBox2Shape">
        <div className="joinBox2A">
          {singleSelection.selections.map(() => {
            return (
              <label>
                <div className="joinBox2A1">
                  <div className="joinBox2A1Btn" id="circleBtn1">
                    <BsCircle size="20px" />
                  </div>
                  <div clssName="joinBox2A1Text">
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

export default SingleSelection;
