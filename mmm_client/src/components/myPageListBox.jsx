import React from "react";

const MyPageListBox = () => {
  return (
    <>
      <div className="myPageListBox">
        <div className="myPageListBoxTop">
          <div className="myPageListBoxTopLeft">
            <div className="myPageListBoxTopPoint">10p</div>
            <div className="myPageListBoxTopTitle">
              <div className="myPageListBoxTopTitleT">설문조사 제목</div>
              <div className="myPageListBoxTopTime">약 5분 소요</div>
            </div>
          </div>
          <div className="myPageListBoxTopRight">
            <div className="myPageListBoxTopPeople">30명 참여</div>
          </div>
        </div>

        <div className="myPageListBoxSub">
          <div className="myPageListBoxSubCond">
            <div className="myPageListBoxSubCond1">나이 상관없음</div>
            <div className="myPageListBoxSubCond2">성별 상관없음</div>
          </div>
          <div className="myPageListBoxSubHash">
            <div className="myPageListBoxSubHash1">#앱종류</div>
            <div className="myPageListBoxSubHash2">#사용자</div>
            <div className="myPageListBoxSubHash3">#설문종류</div>
          </div>
        </div>

        <div className="myPageListBoxBottom">
          <div className="myPageListBoxBottomEnd">D-10</div>
        </div>
      </div>
    </>
  );
};

export default MyPageListBox;
