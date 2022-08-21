import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import SurveyCategory from "./surveyCategory";

const Main = () => {
  return (
    <>
      <Navbar />
      <div>This is Main Page.</div>
      <Link to="/login" style={{ textDecoration: "none", cursor: "pointer" }}>
        <div>로그인 화면 가기</div>
      </Link>
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
      <div className="mainWrap">
        <div>This is Main Page.</div>
        <Link to="/login" style={{ textDecoration: "none", cursor: "pointer" }}>
          <div>로그인 화면 가기</div>
        </Link>
        <SurveyCategory />
      </div>
    </>
  );
};

export default Main;
