import React from "react";

const MyPageListBox = (props) => {
  return (
    <>
      <div className="myPageListBox">
        <div className="myPageListBoxTop">
          <div className="myPageListBoxTopLeft">
            <div className="myPageListBoxTopPoint">{props.point}p</div>
            <div className="myPageListBoxTopTitle">
              <div className="myPageListBoxTopTitleT">{props.title}</div>
              <div className="myPageListBoxTopTime">약 {props.time}분 소요</div>
            </div>
          </div>
          <div className="myPageListBoxTopRight">
            <div className="myPageListBoxTopPeople">
              {props.participant}명 참여
            </div>
          </div>
        </div>

        <div className="myPageListBoxSub">
          <div className="myPageListBoxSubCond">
            <div className="myPageListBoxSubCond1">
              {props.age === 0 ? "나이 상관없음" : props.age + "대"}
            </div>
            <div className="myPageListBoxSubCond2">
              {props.gender === null ? "성별 상관없음" : props.gender}
            </div>
          </div>
          <div className="myPageListBoxSubHash">
            <div className="myPageListBoxSubHash1">
              {props.hashtag === null ? "" : "#" + props.hashtag}
            </div>
            {/* <div className="myPageListBoxSubHash2">#사용자</div>
            <div className="myPageListBoxSubHash3">#설문종류</div> */}
          </div>
        </div>

        <div className="myPageListBoxBottom">
          <div className="myPageListBoxBottomEnd">{props.date}</div>
        </div>
      </div>
    </>
  );
};

export default MyPageListBox;
