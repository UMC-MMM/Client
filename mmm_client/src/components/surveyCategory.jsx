import React from "react";
import CategoryButton from "./categoryButton";

const SurveyCategory = () => {
  return (
    <div className="surveyCategory">
      <div className="surveyCategoryTitle">설문조사 카테고리</div>
      <div className="surveyCategoryContainer">
        <CategoryButton />
        <CategoryButton />
        <CategoryButton />
        <CategoryButton />
        <CategoryButton />
        <CategoryButton />
        <CategoryButton />
        <CategoryButton />
        <CategoryButton />
      </div>
    </div>
  );
};

export default SurveyCategory;
