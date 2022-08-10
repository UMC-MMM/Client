import React from "react";
import Navbar from "./navbar";
import Rank from "./rank";
import SurveyCategory from "./surveyCategory";
import PopularityStory from "./popularityStory";

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