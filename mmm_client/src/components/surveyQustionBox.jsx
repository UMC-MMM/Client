import React, { useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";
import SingleSelection from "../components/surveyPostKindContents/singleSelection";
import MultipleSelection from "../components/surveyPostKindContents/multipleSelection";
import DescriptiveForm from "../components/surveyPostKindContents/descriptiveForm";

const SurveyQustionBox = ({ surveyQustionBox, handleSurveyPostDelete }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("단일선택형");
  const [questionType, setQuestionType] = useState("");

  const options = ["단일선택형", "다중선택형", "서술형"];

  const [questionContent, setQuestionContent] = useState("");
  const [questionOption, setQuestionOption] = useState({});

  const handleHi = () => {
    const body = {
      questionType,
      questionContent,
      questionOption,
    };
    console.log(body);
  };

  const handlesurveyPostQuestionContent = (e) => {
    console.log(e.target.value);
  };

  const showData = (data) => {
    setQuestionOption(data);
  };

  const surveyListsObj = {
    단일선택형: <SingleSelection showData={showData} />,
    다중선택형: <MultipleSelection />,
    서술형: <DescriptiveForm />,
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
              onchange={handlesurveyPostQuestionContent}
            />
          </div>
          <div onClick={handleHi}>하이</div>
          <div className="surveyPostChooseSurveyKindAndDelete">
            <div className="dropdown">
              <div
                className="dropdownBtn"
                onClick={() => setIsActive(!isActive)}
              >
                <div className="dropdownBtnIcon">
                  <BsCaretDownFill color="#c1c1c1" size="12" />
                </div>
                <div className="dropdownBtnText">{selected}</div>
              </div>
              {isActive && (
                <div className="dropdownContent">
                  {options.map((option) => (
                    <div
                      className="dropdownItem"
                      onClick={() => {
                        setSelected(option);
                        setIsActive(false);
                        if (option === "단일선택형") {
                          setQuestionType("Checkbox");
                        } else if (option === "다중선택형") {
                          setQuestionType("Checkbox");
                        } else if (option === "서술형") {
                          setQuestionType("Essay");
                        }
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div
              className="surveyPostDelete"
              onClick={() => handleSurveyPostDelete(surveyQustionBox)}
            >
              삭제
            </div>
          </div>
        </div>
        <div className="surveyPostkindContent">{surveyListsObj[selected]}</div>
      </div>
    </>
  );
};

export default SurveyQustionBox;
