import React from "react";
import { FaUserCircle } from "react-icons/fa";

const SurveyListBox = () => {
  return (
    <>
      <div className="surveyListBox">
        <div className="boxTop">
          <div className="boxTopLeft">
            <div className="boxTopPoint">10p</div>
            <div className="boxTopTitle">
              <div className="boxTopTitleT">설문조사 제목</div>
              <div className="boxTopTime">약 5분 소요</div>
            </div>
          </div>
          <div className="boxTopProfile">
            <FaUserCircle size="44px" />
            <div className="boxTopProfileName">게시자 이름</div>
          </div>
        </div>

        <div className="boxSub">
          <div className="boxSubCond">
            <div className="boxSubCond1">나이 상관없음</div>
            <div className="boxSubCond2">성별 상관없음</div>
          </div>
          <div className="boxSubHash">
            <div className="boxSubHash1">#앱종류</div>
            <div className="boxSubHash2">#사용자</div>
            <div className="boxSubHash3">#설문종류</div>
          </div>
        </div>

        <div className="boxBottom">
          <div className="boxBottomEnd">D-10</div>
        </div>
      </div>
    </>
  );
};

export default SurveyListBox;
