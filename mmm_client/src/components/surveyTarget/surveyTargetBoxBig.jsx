import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const SurveyTargetBoxSmall = ({ handleSurveyTarget }) => {
  const targetAge = [
    "나이 상관없음",
    "10대",
    "20대",
    "30대",
    "40대",
    "50대",
    "60대 이상",
  ];
  const targetGender = ["성별 상관없음", "남성", "여성"];

  return (
    <div className="surveyListSelectBoxBig">
      <div className="surveyListSelectBoxBigTop">
        <div className="surveyListSelectBoxTitleAndDetail">
          <div className="surveyListSelectBoxTitle">설문조사 대상 선택</div>
          <div className="surveyListSelectBoxDetail">
            클릭하신 조건의 참가자가 참여할 수 있는 설문만 보여드립니다.
          </div>
        </div>
        <IoIosArrowUp
          size="20px"
          color="#8E8E8E"
          className="surveyListSelectBoxArrowUp"
          onClick={handleSurveyTarget}
        />
      </div>
      <div className="surveyListSelectBoxBigTagContainer">
        <div className="surveyListTargetAge">
          {targetAge.map((age) => (
            <span className="surveyListTargetTag">{age}</span>
          ))}
        </div>
        <div className="surveyListTargetGender">
          {targetGender.map((gender) => (
            <span className="surveyListTargetTag">{gender}</span>
          ))}
        </div>
        <button className="surveyListTargetBnt">적용</button>
      </div>
    </div>
  );
};

export default SurveyTargetBoxSmall;
