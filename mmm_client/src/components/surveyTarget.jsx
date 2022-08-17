import React from "react";
import { useState } from "react";

import SurveyTargetBoxSmall from "../components/surveyTarget/surveyTargetBoxSmall";
import SurveyTargetBoxBig from "../components/surveyTarget/surveyTargetBoxBig";

const SurveyTarget = () => {
  const [surveyTargetBox, setSurveyTargetBox] = useState(0);

  const handleSurveyTarget = () => {
    if (surveyTargetBox === 0) {
      setSurveyTargetBox(1);
    } else if (surveyTargetBox === 1) {
      setSurveyTargetBox(0);
    }
  };
  const surveyTargetObj = {
    0: <SurveyTargetBoxSmall handleSurveyTarget={handleSurveyTarget} />,
    1: <SurveyTargetBoxBig handleSurveyTarget={handleSurveyTarget} />,
  };

  return <div>{surveyTargetObj[surveyTargetBox]}</div>;
};
export default SurveyTarget;
