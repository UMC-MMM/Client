import React from "react";
import Navbar from "./navbar";
import Rank from "./rank";
import SurveyCategory from "./surveyCategory";
import PopularityStory from "./popularityStory";

const Main = () => {
  return (
    <>
      <Navbar />
      <Rank />

      <div className="mainWrap">
        <SurveyCategory />
        <PopularityStory />
      </div>
    </>
  );
};

export default Main;
