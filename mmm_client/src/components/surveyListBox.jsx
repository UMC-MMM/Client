import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const SurveyListBox = (props) => {
  const getSurveyIdx = props.surveyNo;

  return (
    <>
      <Link
        to="/surveyjoin"
        state={{ surveyIdx: getSurveyIdx }}
        style={{ textDecoration: "none", cursor: "pointer", color: "#282828" }}
      >
        <div className="surveyListBox">
          <div className="boxTop">
            <div className="boxTopLeft">
              <div className="boxTopPoint">{props.point}p</div>
              <div className="boxTopTitle">
                <div className="boxTopTitleT">{props.title}</div>
                <div className="boxTopTime">약 {props.time}분 소요</div>
              </div>
            </div>
            <div className="boxTopProfile">
              <FaUserCircle size="44px" />
              <div className="boxTopProfileName">{props.writer}</div>
            </div>
          </div>

          <div className="boxSub">
            <div className="boxSubCond">
              <div className="boxSubCond1">
                {props.age === null ? "나이 상관없음" : props.age + "대"}
              </div>
              <div className="boxSubCond2">
                {props.gender === null ? "성별 상관없음" : props.gender}
              </div>
            </div>
            <div className="boxSubHash">
              <div className="boxSubHash1">
                {props.hashtag === null ? "" : "#" + props.hashtag}
              </div>
              {/* <div className="boxSubHash2">#사용자</div>
            <div className="boxSubHash3">#설문종류</div> */}
            </div>
          </div>
          <div className="boxBottom">
            <div className="boxBottomEnd">{props.date}</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SurveyListBox;
