import React from "react";
import { useState } from "react";
import Navbar from "../components/navbar";
import SurveyQustionBox from "../components/surveyQustionBox";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SurveyWrite = () => {
  const token = localStorage.getItem("token");
  const userIdx = localStorage.getItem("userIdx");

  const navigate = useNavigate();
  let body = {
    userIdx: { userIdx },
    surveyIntroduction: "테스트 - 설문조사 등록 소개",
    surveyTitle: "테스트 - 설문조사 등록 제목",
    surveyQuestion: [
      {
        questionType: "Essay",
        questionContent: "서술형질문내용1",
        questionOption: [],
      },
      {
        questionType: "Checkbox",
        questionContent: "체크박스 질문2",
        questionOption: [
          "체크박스 옵션1",
          "체크박스 옵션2",
          "체크박스 옵션7",
          "체크박스 옵션10",
        ],
      },
      {
        questionType: "Multiple",
        questionContent: "멀티플 질문3",
        questionOption: ["멀티플 옵션3", "멀티플 옵션4", "멀티플 옵션5"],
      },
    ],
    deadlineAt: "2022-10-01",
    preferGender: "MALE",
    preferAge: 40,
    surveyTime: 10,
    hashtag: "해시태그",
    surveyPointValue: 50,
    couponIdx: null,
  };

  const handleSurveyPostCompleteBtn = () => {
    axios
      .post("https://www.survave.com/survey", body, {
        headers: {
          "X-ACCESS-TOKEN": token,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log("오류발생");
        console.log(error);
      });
    navigate("/surveyWrite2");
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
      <div
        className="surveyPostCompleteBtn"
        onClick={handleSurveyPostCompleteBtn}
      >
        설문작성완료
      </div>
    </>
  );
};

export default SurveyWrite;
