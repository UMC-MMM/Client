import React, { useState } from "react";
import Navbar from "../components/navbar";
import SingleSelection from "../components/surveyPostKindContents/singleSelection";
import MultipleSelection from "../components/surveyPostKindContents/multipleSelection";
import DescriptiveForm from "../components/surveyPostKindContents/descriptiveForm";

const SurveyWrite = () => {
  const [surveyList, setSurveyList] = useState("단일선택형");
  const [surveyNumber, setSurveyNumber] = useState(0);

  const onSurveyListChange = (e) => {
    const { value } = e.target;
    setSurveyList(value);
  };

  const handleSurveyNumber = () => {
    setSurveyNumber();
  };

  const surveyLists = [
    { id: "0", value: "단일선택형" },
    { id: "1", value: "다중선택형" },
    { id: "2", value: "서술형" },
  ];

  const surveyListsObj = {
    0: <SingleSelection />,
    1: <MultipleSelection />,
    2: <DescriptiveForm />,
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
            <div className="surveyPostChooseSurveyKind">
              <select
                className="surveyPostChooseSurveyKindSelect"
                value={surveyList}
                onChange={onSurveyListChange}
              >
                {surveyLists.map((surveyList) => (
                  <option
                    value={surveyList.id}
                    onChange={() => handleSurveyNumber(surveyList.id)}
                  >
                    {surveyList.value}
                  </option>
                ))}
              </select>
            </div>
            <div className="surveyPostDelete">삭제</div>
          </div>
        </div>
        <div className="surveyPostkindContent">
          {surveyListsObj[surveyNumber]}
        </div>
      </div>
      <div className="surveyPostPlusQuestionsBtn">+질문추가</div>
      <div className="surveyPostCompleteBtn">설문작성완료</div>
    </>
  );
};

export default SurveyWrite;
