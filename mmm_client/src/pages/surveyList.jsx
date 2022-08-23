import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import { useState } from "react";
import Footer from "../components/footer";
import RedCircle from "../assets/semicircle-r.png";
import SurveyListBox from "../components/surveyListBox";
import SurveyTarget from "../components/surveyTarget";
import axios from "axios";

const SurveyList = () => {
  // 어떤 카테고리에 해당하는 설문을 볼것인가요..
  const [surveyList, setSurveyList] = useState(0);

  // 받아온 설문조사목록에 대한 데이터를 저장할
  const [surveyBox, setSurveyBox] = useState([]);

  // surveyCategoryIdx 와 key값 연결
  const surveyListArr = [
    { key: 0, name: "전체" },
    { key: 2, name: "경영·경제" },
    { key: 1, name: "인문·사회" },
    { key: 3, name: "과학" },
    { key: 4, name: "IT" },
    { key: 5, name: "문화·예술" },
    { key: 6, name: "건강·운동" },
    { key: 7, name: "환경" },
    { key: 8, name: "반려동물" },
    { key: 9, name: "기타" },
  ];

  const handleSurveyList = (index) => {
    setSurveyList(index);
  };

  axios
    .get("https://www.survave.com/survey")
    .then(function (response) {
      setSurveyBox(response.data.result);
    })
    .catch(function (error) {
      console.log(error);
      // 되긴 되는데 에러도 출력나는 것 같음
    });

  return (
    <>
      <Navbar />
      <div className="surveyList">
        <div className="surveyListLeft">
          <div className="categoryListContainer">
            <div className="categoryListContainerTitle">설문조사 카테고리</div>
            {surveyListArr.map((menu) => {
              return (
                <div className="categoryListItemsContainer">
                  <img
                    className={
                      surveyList === menu.key
                        ? "categoryListItemCircle categoryListItemCircleClicked"
                        : "categoryListItemCircle"
                    }
                    src={RedCircle}
                    alt="선택한 메뉴"
                  ></img>
                  <div
                    className={
                      surveyList === menu.key
                        ? "categoryListItems categoryListItemClicked"
                        : "categoryListItems"
                    }
                    onClick={() => handleSurveyList(menu.key)}
                  >
                    {menu.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="surveyListRight">
          <div className="surveyListRightTop">
            <SurveyTarget />
            <button className="surveyWriteBnt">
              <Link
                to="/surveyWrite"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#ffffff",
                }}
              >
                설문 작성하기
              </Link>
            </button>
          </div>
          <div className="surveyListLineFirst"></div>
          {surveyList === 0 // 전체 선택하면
            ? // 그냥 다 출력
              surveyBox.map((survey) => {
                return (
                  <SurveyListBox
                    key={survey.surveyIdx}
                    title={survey.surveyTitle}
                    point={survey.surveyPointValue}
                    time={survey.surveyTime}
                    writer={survey.userIdx}
                    age={survey.preferAge}
                    gender={survey.preferGender}
                    hashtag={survey.hashtag}
                    date={survey.deadlineAt}
                  />
                );
              })
            : surveyBox
                .filter((survey) => survey.surveyCategoryIdx === surveyList)
                .map((survey) => {
                  return (
                    <SurveyListBox
                      key={survey.surveyIdx}
                      title={survey.surveyTitle}
                      point={survey.surveyPointValue}
                      time={survey.surveyTime}
                      writer={survey.userIdx}
                      age={survey.preferAge}
                      gender={survey.preferGender}
                      hashtag={survey.hashtag}
                      date={survey.deadlineAt}
                    />
                  );
                })}
          <div className="surveyListLine"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SurveyList;
