import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

const SurveyList = () => {
  return (
    <>
      <Navbar />
      <div className="surveyList">
        설문조사 목록 페이지 입니다.
        <Link to="/surveyJoin">설문조사 참여 페이지로 이동</Link>
      </div>
    </>
  );
};

export default SurveyList;
