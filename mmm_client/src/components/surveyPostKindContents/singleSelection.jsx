import React from "react";
import { BiCircle } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

const SingleSelection = () => {
  return (
    <>
      <div className="surveyPostChoose">
        <div className="surveyPostCircleAndText">
          <BiCircle color="#68c9d1" size="20" />
          <div className="surveyPostChooseText">남성</div>
        </div>
        <GrClose color="#8e8e8e" size="15" />
      </div>
      <div className="surveyPostChoose">
        <div className="surveyPostCircleAndText">
          <BiCircle color="#68c9d1" size="20" />
          <div className="surveyPostChooseText">여성</div>
        </div>
        <GrClose color="#8e8e8e" size="15" />
      </div>
      <div className="surveyPostChoosePlusBtn">선택지 추가</div>
    </>
  );
};

export default SingleSelection;
