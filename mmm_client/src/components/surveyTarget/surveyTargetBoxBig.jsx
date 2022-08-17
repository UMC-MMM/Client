import React from "react";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const SurveyTargetBoxSmall = ({ handleSurveyTarget }) => {
  const targetAge = [
    { key: 0, selectAge: "나이 상관없음" },
    { key: 1, selectAge: "10대" },
    { key: 2, selectAge: "20대" },
    { key: 3, selectAge: "30대" },
    { key: 4, selectAge: "40대" },
    { key: 5, selectAge: "50대" },
    { key: 6, selectAge: "60대 이상" },
  ];
  // key 값으로 구분

  const targetGender = [
    { key: 0, selectGender: "성별 상관없음" },
    { key: 1, selectGender: "남성" },
    { key: 2, selectGender: "여성" },
  ];

  const [selectTargetAge, setSelectTargetAge] = useState(0);
  const [selectTargetGender, setSelectTargetGender] = useState(0);

  const handleTargetAge = (age) => {
    setSelectTargetAge(age);
    // console.log(age);
  };

  const handleTargetGender = (gender) => {
    setSelectTargetGender(gender);
    // console.log(gender);
  };

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
        <button className="surveyListTargetBnt">적용</button>
      </div>
    </div>
  );
};

export default SurveyTargetBoxSmall;
