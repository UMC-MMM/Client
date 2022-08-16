import React from "react";
import Navbar from "../components/navbar";
import { useState } from "react";
import Footer from "../components/footer";
import SurveyTargetBoxSmall from "../components/surveyTarget/surveyTargetBoxSmall";
import SurveyTargetBoxBig from "../components/surveyTarget/surveyTargetBoxBig";
import SurveyListBox from "../components/surveyListBox";

const SurveyList = () => {
  const [surveyList, setSurveyList] = useState(0);
  const [surveyTargetBox, setSurveyTargetBox] = useState(0);

  const surveyListArr = [
    { name: "전체" },
    { name: "경영·경제" },
    { name: "인문·사회" },
    { name: "과학" },
    { name: "IT" },
    { name: "문화·예술" },
    { name: "건강·운동" },
    { name: "환경" },
    { name: "반려동물" },
    { name: "기타" },
  ];

  const handleSurveyList = (index) => {
    setSurveyList(index);
  };

  const handleSurveyTarget = () => {
    if (surveyTargetBox === 0) {
      setSurveyTargetBox(1);
    } else if (surveyTargetBox === 1) {
      setSurveyTargetBox(0);
    }
  };

  const surveyTargetObj = {
    0: <SurveyTargetBoxSmall handleSurveyTarget={handleSurveyTarget} />,
    1: <SurveyTargetBoxBig handleSurveyTarget={handleSurveyTarget} />,
  };

  return (
    <>
      <Navbar />
      <div className="surveyList">
        <div className="surveyListLeft">
          <div className="categoryListContainer">
            <div className="categoryListContainerTitle">설문조사 카테고리</div>
            {surveyListArr.map((menu, index) => {
              return (
                <div
                  className={
                    surveyList === index
                      ? "categoryListItems categoryListItemClicked"
                      : "categoryListItems"
                  }
                  onClick={() => handleSurveyList(index)}
                >
                  {menu.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="surveyListRight">
          <div className="surveyListRightTop">
            {surveyTargetObj[surveyTargetBox]}
            <button className="surveyWriteBnt">설문 작성하기</button>
          </div>
          <div className="surveyListLineFirst"></div>
          <SurveyListBox />
          <div className="surveyListLine"></div>
          <SurveyListBox />
          <div className="surveyListLine"></div>
          <SurveyListBox />
          <div className="surveyListLine"></div>
          <SurveyListBox />
          <div className="surveyListLine"></div>
          <SurveyListBox />
          <div className="surveyListLine"></div>
          <SurveyListBox />
          <div className="surveyListLine"></div>
          <SurveyListBox />
          <div className="surveyListLine"></div>
          <SurveyListBox />
          <div className="surveyListLine"></div>
          <SurveyListBox />
          <div className="surveyListLine"></div>
          <SurveyListBox />
          <div className="surveyListLine"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SurveyList;
