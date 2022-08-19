import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const SurveyTargetBoxBig = ({
  handleSurveyTarget,
  targetAge,
  targetGender,
  handleTargetGender,
  handleTargetAge,
  selectTargetAge,
  selectTargetGender,
  handleSelectTarget,
}) => {
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
            <span
              className={
                selectTargetAge === age.key
                  ? "surveyListTargetTag surveyListTargetTagClicked"
                  : "surveyListTargetTag"
              }
              onClick={() => handleTargetAge(age.key)}
            >
              {age.selectAge}
            </span>
          ))}
        </div>
        <div className="surveyListTargetGender">
          {targetGender.map((gender) => (
            <span
              className={
                selectTargetGender === gender.key
                  ? "surveyListTargetTag surveyListTargetTagClicked"
                  : "surveyListTargetTag"
              }
              onClick={() => handleTargetGender(gender.key)}
            >
              {gender.selectGender}
            </span>
          ))}
        </div>
        <button className="surveyListTargetBnt" onClick={handleSelectTarget}>
          적용
        </button>
      </div>
    </div>
  );
};

export default SurveyTargetBoxBig;
