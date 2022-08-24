import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
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
      <Footer />
    </>
  );
};

export default Main;
