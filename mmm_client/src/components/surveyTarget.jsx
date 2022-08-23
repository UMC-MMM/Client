import React from "react";

import SurveyTargetBoxSmall from "../components/surveyTarget/surveyTargetBoxSmall";
import SurveyTargetBoxBig from "../components/surveyTarget/surveyTargetBoxBig";

// 사용 X 파일 -> 이후 삭제 필요
const SurveyTarget = ({
  targetAge,
  targetGender,
  handleTargetAge,
  handleTargetGender,
  handleSurveyTarget,
  handleSelectTarget,
  surveyTargetBox,
  selectTargetAge,
  selectTargetGender,
  userSelectTarget,
}) => {
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
