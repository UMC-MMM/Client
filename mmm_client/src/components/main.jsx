import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import SurveyCategory from "./surveyCategory";
import PopularityStory from "./popularityStory";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="mainWrap">
        <div>This is Main Page.</div>
        <Link to="/login" style={{ textDecoration: "none", cursor: "pointer" }}>
          <div>로그인 화면 가기</div>
        </Link>
        <SurveyCategory />
        <PopularityStory />
      </div>
    </>
  );
};

export default Main;
