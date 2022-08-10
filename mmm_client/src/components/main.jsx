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
    </>
  );
};

export default Main;
