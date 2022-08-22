import React, { useState } from "react";
import Navbar from "../components/navbar";
import SingleSelection from "../components/surveyPostKindContents/singleSelection";
import MultipleSelection from "../components/surveyPostKindContents/multipleSelection";
import DescriptiveForm from "../components/surveyPostKindContents/descriptiveForm";
import Dropdown from "../components/dropdown";

const SurveyWrite = () => {
  const [surveyNumber, setSurveyNumber] = useState();

  const handleSurveyPostPlusQustion = () => {};

  const surveyKind = (x) => {
    if (x === "단일선택형") {
      setSurveyNumber(0);
    } else if (x === "다중선택형") {
      setSurveyNumber(1);
    } else if (x === "서술형") {
      setSurveyNumber(2);
    }
  };

  const surveyListsObj = {
    0: <SingleSelection />,
    1: <MultipleSelection />,
    2: <DescriptiveForm />,
  };

  const surveyBoxs = [{ key: 0 }, { key: 1 }];

  return (
    <>
      <Navbar />
      <div className="surveyPostTitleBox">
        <div className="surveyPostTitleInput">
          <input
            id="surveyPostTitleInputId"
            type="text"
            name="id"
            placeholder="설문조사의 제목을 입력하세요."
          />
        </div>
        <div className="surveyPostDescriptionInput">
          <input
            id="surveyPostDescriptionInputId"
            type="text"
            name="id"
            placeholder="설문조사의 설명을 입력하세요."
          />
        </div>
      </div>
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
            <div className="surveyPostDelete">삭제</div>
          </div>
        </div>
        <div className="surveyPostkindContent">
          {surveyListsObj[surveyNumber]}
        </div>
      </div>
      <div
        className="surveyPostPlusQuestionsBtn"
        onClick={handleSurveyPostPlusQustion}
      >
        +질문추가
      </div>
      <div className="surveyPostCompleteBtn">설문작성완료</div>
    </>
  );
};

export default SurveyWrite;
