import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const SurveyTargetBoxSmall = ({ handleSurveyTarget }) => {
  return (
    <div className="surveyListSelectBoxSmall">
      <div className="surveyListSelectBoxTitleAndDetail">
        <div className="surveyListSelectBoxTitle">설문조사 대상 선택</div>
        <div className="surveyListSelectBoxDetail">20대, 여성 선택됨</div>
      </div>
      <IoIosArrowDown
        size="20px"
        color="#8E8E8E"
        className="surveyListSelectBoxArrowDown"
        onClick={handleSurveyTarget}
      />
    </div>
  );
};

export default SurveyTargetBoxSmall;
