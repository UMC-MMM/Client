import React from "react";
import { useState } from "react";
import Navbar from "../components/navbar";
import SurveyQustionBox from "../components/surveyQustionBox";
<<<<<<< HEAD
=======

>>>>>>> d8f57a5f352a7596dde86395d2fa77d78b1db74a
import { Link } from "react-router-dom";

const SurveyWrite = () => {
  const [surveyIntroduction, setSurveyIntroduction] = useState("");
  const [surveyTitle, setSurveyTitle] = useState("");

  const surveyBody = {
    surveyIntroduction,
    surveyTitle,
  };

  const handleSurveyTitle = (e) => {
    setSurveyTitle(e.target.value);
  };

  const handleSurveyIntroduction = (e) => {
    setSurveyIntroduction(e.target.value);
<<<<<<< HEAD
=======

>>>>>>> d8f57a5f352a7596dde86395d2fa77d78b1db74a
  };

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
            onChange={handleSurveyTitle}
          />
        </div>
        <div className="surveyPostDescriptionInput">
          <input
            id="surveyPostDescriptionInputId"
            type="text"
            name="id"
            placeholder="설문조사의 설명을 입력하세요."
            onChange={handleSurveyIntroduction}
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
      <Link
        to="/surveyWrite2"
        surveyBody={surveyBody}
        style={{
          textDecoration: "none",
          cursor: "pointer",
          color: "#282828",
        }}
      >
        <div className="surveyPostCompleteBtn">설문작성완료</div>
      </Link>
    </>
  );
};

export default SurveyWrite;
