import React from "react";
import Navbar from "../components/navbar";
import { FaUserCircle } from "react-icons/fa";
import Footer from "../components/footer";
import axios from "axios";

import JoinSingleSelection from "../components/surveyJoinKindContents/join-singleSelection";
import JoinMultiSelection from "../components/surveyJoinKindContents/join-multiSelection";
import JoinDescriptiveForm from "../components/surveyJoinKindContents/join-descriptiveForm";
import { useState } from "react";

const SurveyJoin = ({ surveyIdx }) => {
  console.log(surveyIdx);
  // 설문조사 전체 내용을 담을 변수
  const [surveyContent, setSurveyContent] = useState([]);
  // 설문조사 질문들만 담을 변수
  const [surveyQuestions, setSurveyQuestions] = useState([]);

  axios
    .get(`https://www.survave.com/survey/${surveyIdx}`)
    .then(function (survey) {
      console.log("제발..");
      console.log(survey);
      // setSurveyContent(survey.data.result);
      // setSurveyQuestions(survey.data.result.surveyQuestionRes);
    })
    .catch(function (error) {
      console.log("실패");
      console.log(error);
    });

  return (
    <>
      <Navbar />
      <div className="join">
        <div className="joinTop">
          <div className="joinTopPoint">
            {/* {surveyContent.getSurveyRes.surveyPointValue}p */}
          </div>
          <div className="joinTopProfile">
            <div>
              <FaUserCircle size="44px" />
            </div>
            <div className="joinTopProfileName">
              {/* {surveyContent.getSurveyRes.userName} */}
            </div>
          </div>
        </div>
        <div className="joinTitle">
          <div className="joinTitleT">
            {/* {surveyContent.getSurveyRes.surveyTitle} */}
          </div>
          <div className="joinTitleTime">
            {/* 약 {surveyContent.getSurveyRes.surveyTime}분 소요 */}
          </div>
        </div>
        <div className="joinSub">
          <div className="joinSubCond">
            <div className="joinSubCond1">
              {/* {surveyContent.getSurveyRes.preferAge} */}
            </div>
            <div className="joinSubCond1">
              {/* {surveyContent.getSurveyRes.preferGender} */}
            </div>
          </div>
          <div className="joinSubHash">
            {/* {surveyContent.getSurveyRes.hashtag} */}
          </div>
          <div className="joinSubEnd">
            {/* {surveyContent.getSurveyRes.deadlineAt} */}
          </div>
        </div>
        <div className="joinBox1">
          <div className="joinBox1Text">설문조사 설명</div>
        </div>
        {surveyQuestions.map((question) => {
          return <div>{question}</div>;
        })}
        <JoinSingleSelection />
        <JoinMultiSelection />
        <JoinDescriptiveForm />
        <div className="joinFinal">
          <button type="submit">설문 제출하기</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SurveyJoin;
