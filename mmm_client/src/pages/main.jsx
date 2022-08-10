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
        </div>
      </div>
    </>
  );
};

export default Main;
