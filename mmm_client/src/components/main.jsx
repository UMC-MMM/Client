import React from "react";
import Navbar from "./navbar";
import Rank from "./rank";
import SurveyCategory from "./surveyCategory";

const Main = () => {
  return (
    <>
      <Navbar />
      <Rank />

      <div className="mainWrap">
        <SurveyCategory />
      </div>
    </>
  );
};

export default Main;
