import React from "react";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const ResultDescriptiveForm = () => {
  const descriptiveForm = {
    number: 4,
    essential: false,
    title: "서술형 질문",
  };

  const token = localStorage.getItem("token");
  const location = useLocation();
  const surveyIdx = location.state.surveyIdx;
  const [resultAnswer, setResultAnswer] = useState([]);

  axios
    .get(`https://www.survave.com/users/mysurveys/${surveyIdx}`, {
      headers: { "X-ACCESS-TOKEN": token },
    })
    .then(function (response) {
      setResultAnswer(
        response.data.result.questionResultList.answerResultList.answer
      );
    })
    .catch(function (error) {
      // console.log(error);
      // 되긴 되는데 에러
    });

  return (
    <>
      <div className="resultSingle">
        <div className="resultSingleTop">
          <div className="resultSingleTopItem1">
            응답 {descriptiveForm.number}개
          </div>
          <div className="resultSingleTopItem2">서술형</div>
        </div>
        <div className="resultSingleQ">
          <div
            className={
              descriptiveForm.essential === true
                ? "resultSingleQItem1"
                : "resultSingleQItem1-2"
            }
          >
            {descriptiveForm.essential === true ? "필수" : "선택"}
          </div>
          <div className="resultSingleQItem2">{descriptiveForm.title}</div>
        </div>
        <div className="resultSingleA">
          {/* resultAnswer.map((answer) => {
                return (
          <div className="resultSingleADescrip"></div>);
        }) */}
        </div>
      </div>
    </>
  );
};

export default ResultDescriptiveForm;
