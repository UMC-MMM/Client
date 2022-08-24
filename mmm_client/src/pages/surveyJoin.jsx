import React from "react";
import Navbar from "../components/navbar";
import { FaUserCircle } from "react-icons/fa";
import Footer from "../components/footer";
import axios from "axios";

// import JoinSingleSelection from "../components/surveyJoinKindContents/join-singleSelection";
import JoinMultiSelection from "../components/surveyJoinKindContents/join-multiSelection";
import JoinDescriptiveForm from "../components/surveyJoinKindContents/join-descriptiveForm";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const SurveyJoin = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  const surveyIdx = location.state.surveyIdx;

  // 설문조사 전체 내용을 담을 변수
  const [surveyContent, setSurveyContent] = useState([]);
  // 설문조사 질문들만 담을 변수
  const [surveyQuestions, setSurveyQuestions] = useState([]);

  axios
    .get(`https://www.survave.com/survey/${surveyIdx}`, {
      headers: { "X-ACCESS-TOKEN": token },
    })
    .then(function (survey) {
      setSurveyContent(survey.data.result.getSurveyRes);
      setSurveyQuestions(survey.data.result.surveyQuestionRes);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <>
      <Navbar />
      <div className="join">
        <div className="joinTop">
          <div className="joinTopPoint">{surveyContent.surveyPointValue}p</div>
          <div className="joinTopProfile">
            <div>
              <FaUserCircle size="44px" />
            </div>
            <div className="joinTopProfileName">{surveyContent.userName}</div>
          </div>
        </div>
        <div className="joinTitle">
          <div className="joinTitleT">{surveyContent.surveyTitle}</div>
          <div className="joinTitleTime">
            약 {surveyContent.surveyTime}분 소요
          </div>
        </div>
        <div className="joinSub">
          <div className="joinSubCond">
            <div className="joinSubCond1">{surveyContent.preferAge}대</div>
            <div className="joinSubCond1">{surveyContent.preferGender}</div>
          </div>
          <div className="joinSubHash">
            <div className="joinSubHash1">#{surveyContent.hashtag}</div>
          </div>
          <div className="joinSubEnd">{surveyContent.deadlineAt}</div>
        </div>
        <div className="joinBox1">
          <div className="joinBox1Text">설문조사 내용</div>
        </div>
        {surveyQuestions.map((question) => {
          if (question.questionType === "Essay") {
            return <JoinDescriptiveForm title={question.questionContent} />;
          } else if (question.questionType === "Checkbox") {
            return (
              <JoinMultiSelection
                title={question.questionContent}
                options={question.options}
              />
            );
          } else {
            return null;
            // return (
            //   <JoinSingleSelection
            //     title={question.questionContent}
            //     options={question.options}
            //   />
            // );
          }
        })}

        <div className="joinFinal">
          <button type="submit">설문 제출하기</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SurveyJoin;
