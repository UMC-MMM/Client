import React from "react";
import Navbar from "../components/navbar";
// import { Link } from "react-router-dom";
import CategoryListContainer from "../components/categoryListContainer";
import { IoIosArrowDown } from "react-icons/io";

const SurveyList = () => {
  return (
    <>
      <Navbar />
      <div className="surveyList">
        <div className="surveyListLeft">
          <CategoryListContainer />
        </div>
        <div className="surveyListRight">
          <div className="surveyListRightTop">
            <div className="surveyListSelectBox">
              <div className="surveyListSelectBoxTitle">설문조사 대상 선택</div>
              <IoIosArrowDown size="30px" color="#8E8E8E" />
              {/* <div className="surveySelectBoxDown">설문조사 대상 선택</div> */}
            </div>
            <button className="surveyWriteBnt">설문 작성하기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SurveyList;
