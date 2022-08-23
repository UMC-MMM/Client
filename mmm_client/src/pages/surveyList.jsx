import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import { useState } from "react";
import Footer from "../components/footer";
import RedCircle from "../assets/semicircle-r.png";
import SurveyListBox from "../components/surveyListBox";
import axios from "axios";

import SurveyTargetBoxSmall from "../components/surveyTarget/surveyTargetBoxSmall";
import SurveyTargetBoxBig from "../components/surveyTarget/surveyTargetBoxBig";

const SurveyList = () => {
  const targetAge = [
    { key: 0, selectAge: "나이 상관없음" },
    { key: 1, selectAge: "10대" },
    { key: 2, selectAge: "20대" },
    { key: 3, selectAge: "30대" },
    { key: 4, selectAge: "40대" },
    { key: 5, selectAge: "50대" },
    { key: 6, selectAge: "60대 이상" },
  ];
  // key 값으로 구분

  const targetGender = [
    { key: 0, selectGender: "성별 상관없음" },
    { key: 1, selectGender: "남성" },
    { key: 2, selectGender: "여성" },
  ];

  const [surveyTargetBox, setSurveyTargetBox] = useState(0);
  const [selectTargetAge, setSelectTargetAge] = useState(0);
  const [selectTargetGender, setSelectTargetGender] = useState(0);
  const [userSelectTarget, setuserSelectTarget] = useState("");

  const handleTargetAge = (age) => {
    setSelectTargetAge(age);
  };

  const handleTargetGender = (gender) => {
    setSelectTargetGender(gender);
  };

  const handleSurveyTarget = () => {
    if (surveyTargetBox === 0) {
      setSurveyTargetBox(1);
    } else if (surveyTargetBox === 1) {
      setSurveyTargetBox(0);
    }
  };

  const handleSelectTarget = () => {
    setuserSelectTarget(
      targetAge[Object.keys(targetAge)[selectTargetAge]].selectAge +
        " , " +
        targetGender[Object.keys(targetGender)[selectTargetGender]].selectGender
    );
    setSurveyTargetBox(0);
    // 적용 선택 시 다시 작은 박스로 돌아가게
  };

  const surveyTargetObj = {
    0: (
      <SurveyTargetBoxSmall
        handleSurveyTarget={handleSurveyTarget}
        userSelectTarget={userSelectTarget}
      />
    ),
    1: (
      <SurveyTargetBoxBig
        handleSurveyTarget={handleSurveyTarget}
        targetAge={targetAge}
        targetGender={targetGender}
        handleTargetAge={handleTargetAge}
        handleTargetGender={handleTargetGender}
        selectTargetAge={selectTargetAge}
        selectTargetGender={selectTargetGender}
        handleSelectTarget={handleSelectTarget}
      />
    ),
  };

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
      // 되긴 되는데 에러
    });

  const onClickSurveyList = (surveyidx) => {
    axios
      .get(`https://www.survave.com/survey/${surveyidx}`)
      .then(function (resoponse) {
        console.log(resoponse);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
            {surveyTargetObj[surveyTargetBox]}
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
                    writer={survey.userName}
                    age={survey.preferAge}
                    gender={survey.preferGender}
                    hashtag={survey.hashtag}
                    date={survey.deadlineAt}
                    onClickSurveyList={onClickSurveyList(survey.surveyIdx)}
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
                      writer={survey.userName}
                      age={survey.preferAge}
                      gender={survey.preferGender}
                      hashtag={survey.hashtag}
                      date={survey.deadlineAt}
                      onClickSurveyList={onClickSurveyList(survey.surveyIdx)}
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
