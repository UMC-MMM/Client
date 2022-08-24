import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Rank from "../components/rank";
import SurveyCategory from "../components/surveyCategory";
import PopularityStory from "../components/popularityStory";
import axios from "axios";
import { useState } from "react";

const Main = () => {
  // 상위 설문조사 3개만 받아옴
  const [surveyTopThree, setSurveyTopThree] = useState([]);

  // 어떤 설문조사 카테고리를 선택?
  // const [surveyCategoryIdx, setSurveyCategoryIdx] = useState();

  useEffect(() => {
    axios
      .get("https://www.survave.com/")
      .then(function (response) {
        // 일단 3개로 짜름 -> 서버 수정 필요
        setSurveyTopThree(response.data.result.bestSurvey.slice(0, 3));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
