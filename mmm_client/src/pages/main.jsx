import React from "react";
import Navbar from "../components/navbar";
import Rank from "../components/rank";
import SurveyCategory from "../components/surveyCategory";
import PopularityStory from "../components/popularityStory";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="mainWrap">
        <Rank />
        <SurveyCategory />
        <PopularityStory />
      </div>
    </>
  );
};

export default Main;
