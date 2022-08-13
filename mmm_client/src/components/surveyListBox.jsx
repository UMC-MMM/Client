import React from "react";
import { FaUserCircle } from "react-icons/fa";

const SurveyListBox = () => {
  return (
    <>
      <div className="join">
        <div className="joinTop">
          <div className="joinTopPoint">10p</div>
          <div className="joinTopProfile">
            <div>
              <FaUserCircle size="44px" />
            </div>
            <div className="joinTopProfileName">게시자 이름</div>
          </div>
        </div>
        <div className="joinTitle">
          <div className="joinTitleT">설문조사 제목</div>
          <div className="joinTitleTime">약 5분 소요</div>
        </div>
        <div className="joinSub">
          <div className="joinSubCond">
            <div className="joinSubCond1">나이 상관없음</div>
            <div className="joinSubCond1">성별 상관없음</div>
          </div>
          <div className="joinSubHash">
            <div className="joinSubHash1">#앱종류</div>
            <div className="joinSubHash2">#사용자</div>
            <div className="joinSubHash3">#설문종류</div>
          </div>
          <div className="joinSubEnd">D-10</div>
        </div>
      </div>
    </>
  );
};

export default SurveyListBox;
