import React from "react";
import { useState } from "react";
import Navbar from "../components/navbar";
import SurveyQustionBox from "../components/surveyQustionBox";

const SurveyWrite = () => {
  const [surveyQustionBoxs, setSurveyQustionBoxs] = useState([
    { key: 0 },
    { key: 1 },
  ]);

  const handlesurveyPostPlusQuestionsBtn = () => {
    const newSurveyQustionBoxs = [...surveyQustionBoxs, { key: Date.now() }];
    setSurveyQustionBoxs(newSurveyQustionBoxs);
  };

  const handleSurveyPostDelete = (survey) => {
    const newSurveyQustionBoxs = surveyQustionBoxs.filter(
      (item) => item.key !== survey.key
    );
    setSurveyQustionBoxs(newSurveyQustionBoxs);
  };

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
      {surveyQustionBoxs.map((surveyQustionBox) => {
        return (
          <SurveyQustionBox
            handleSurveyPostDelete={handleSurveyPostDelete}
            surveyQustionBox={surveyQustionBox}
          />
        );
      })}
      <div
        className="surveyPostPlusQuestionsBtn"
        onClick={handlesurveyPostPlusQuestionsBtn}
      >
        +질문추가
      </div>
      <div className="surveyPostCompleteBtn">설문작성완료</div>
    </>
  );
};

export default SurveyWrite;
