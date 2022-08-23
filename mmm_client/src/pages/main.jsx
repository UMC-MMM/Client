import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Rank from "../components/rank";
import SurveyCategory from "../components/surveyCategory";
import PopularityStory from "../components/popularityStory";
import axios from "axios";
import { useState } from "react";

const Main = () => {
  const [surveyTopThree, setSurveyTopThree] = useState();

  // 어떤 설문조사 카테고리를 선택?
  // const [surveyCategoryIdx, setSurveyCategoryIdx] = useState();

  axios
    .get("https://www.survave.com/")
    .then(function (response) {
      setSurveyTopThree([
        response.data.result.bestSurvey[0],
        response.data.result.bestSurvey[1],
        response.data.result.bestSurvey[2],
      ]);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <>
      <Navbar />
      <div className="mainWrap">
        <Rank surveyTopThree={surveyTopThree} />
        <SurveyCategory />
        <PopularityStory />
      </div>
      <Footer />
    </>
  );
};

export default Main;
