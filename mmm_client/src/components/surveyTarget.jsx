import React from "react";
import { useState } from "react";

import SurveyTargetBoxSmall from "../components/surveyTarget/surveyTargetBoxSmall";
import SurveyTargetBoxBig from "../components/surveyTarget/surveyTargetBoxBig";

const SurveyTarget = () => {
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

  const [surveyTargetBox, setSurveyTargetBox] = useState(0);
  const [selectTargetAge, setSelectTargetAge] = useState(0);
  const [selectTargetGender, setSelectTargetGender] = useState(0);
  const [userSelectTarget, setuserSelectTarget] = useState("");

  const handleTargetAge = (age) => {
    setSelectTargetAge(age);
  };

  const handleTargetGender = (gender) => {
    setSelectTargetGender(gender);
  };

  const handleSurveyTarget = () => {
    if (surveyTargetBox === 0) {
      setSurveyTargetBox(1);
    } else if (surveyTargetBox === 1) {
      setSurveyTargetBox(0);
    }
  };

  const handleSelectTarget = () => {
    setuserSelectTarget(
      targetAge[Object.keys(targetAge)[selectTargetAge]].selectAge +
        " , " +
        targetGender[Object.keys(targetGender)[selectTargetGender]].selectGender
    );
    setSurveyTargetBox(0);
    // 적용 선택 시 다시 작은 박스로 돌아가게
  };

  const surveyTargetObj = {
    0: (
      <SurveyTargetBoxSmall
        handleSurveyTarget={handleSurveyTarget}
        userSelectTarget={userSelectTarget}
      />
    ),
    1: (
      <SurveyTargetBoxBig
        handleSurveyTarget={handleSurveyTarget}
        targetAge={targetAge}
        targetGender={targetGender}
        handleTargetAge={handleTargetAge}
        handleTargetGender={handleTargetGender}
        selectTargetAge={selectTargetAge}
        selectTargetGender={selectTargetGender}
        handleSelectTarget={handleSelectTarget}
      />
    ),
  };

  return <div>{surveyTargetObj[surveyTargetBox]}</div>;
};
export default SurveyTarget;
