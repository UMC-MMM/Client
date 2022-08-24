import React, { useState } from "react";
import SingleSelection from "../components/surveyPostKindContents/singleSelection";
import MultipleSelection from "../components/surveyPostKindContents/multipleSelection";
import DescriptiveForm from "../components/surveyPostKindContents/descriptiveForm";
import Dropdown from "../components/dropdown";

const SurveyQustionBox = ({ surveyQustionBox, handleSurveyPostDelete }) => {
  const [surveyNumber, setSurveyNumber] = useState();

  const surveyListsObj = {
    0: <SingleSelection />,
    1: <MultipleSelection />,
    2: <DescriptiveForm />,
  };

  const surveyKind = (x) => {
    if (x === "단일선택형") {
      setSurveyNumber(0);
    } else if (x === "다중선택형") {
      setSurveyNumber(1);
    } else if (x === "서술형") {
      setSurveyNumber(2);
    }
  };
  return (
    <>
      <div className="surveyPostTitleBox">
        <div className="surveyPostTitleinputAndChooseSurveyKindAndDelete">
          <div className="surveyPostTitleInput">
            <input
              id="surveyPostTitleInputId"
              type="text"
              name="id"
              placeholder="질문을 입력하세요."
            />
          </div>
          <div className="surveyPostChooseSurveyKindAndDelete">
            <Dropdown surveyKind={surveyKind} />
            <div
              className="surveyPostDelete"
              onClick={() => handleSurveyPostDelete(surveyQustionBox)}
            >
              삭제
            </div>
          </div>
        </div>
        <div className="surveyPostkindContent">
          {surveyListsObj[surveyNumber]}
        </div>
      </div>
    </>
  );
};

export default SurveyQustionBox;
