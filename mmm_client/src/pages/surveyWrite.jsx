import React, { useState } from "react";
import Navbar from "../components/navbar";
import SingleSelection from "../components/surveyPostKindContents/singleSelection";
import MultipleSelection from "../components/surveyPostKindContents/multipleSelection";
import DescriptiveForm from "../components/surveyPostKindContents/descriptiveForm";
import { Link } from "react-router-dom";

const SurveyWrite = () => {
  const [surveyNumber, setSurveyNumber] = useState(0);

  const surveyLists = [];

  const surveyListsObj = {
    0: <SingleSelection />,
    1: <MultipleSelection />,
    2: <DescriptiveForm />,
  };

  const handleSurveyNumber = (index) => {
    setSurveyNumber(index);
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
            <div className="surveyPostChooseSurveyKind"></div>
            <div className="surveyPostDelete">삭제</div>
          </div>
        </div>
        <div className="surveyPostkindContent">
          {surveyListsObj[surveyNumber]}
        </div>
      </div>
      <div className="surveyPostPlusQuestionsBtn">+질문추가</div>
      <div className="surveyPostCompleteBtn">
        <Link
          to="/surveyWrite2"
          style={{
            textDecoration: "none",
            cursor: "pointer",
            color: "#fefefe",
          }}
        >
          설문작성완료
        </Link>
      </div>
    </>
  );
};

export default SurveyWrite;
