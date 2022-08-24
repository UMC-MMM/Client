import React from "react";
import { FaCrown } from "react-icons/fa";
import RankBox from "./rankBox";

const Rank = ({ surveyTopThree }) => {
  return (
    <>
      <div className="rank">
        <div className="rankContainer">
          <span className="rankIcon">
            <FaCrown color="#E1605C" size="30px" />
          </span>
          <span className="rankTitle">설문조사 랭킹</span>
          <span className="rankSubTitle">참여자 순 · 매일 자정 초기화</span>
        </div>
      </div>
      <table className="rankBox">
        {surveyTopThree.map((survey, index) => {
          return (
            <RankBox
              rank={index + 1}
              title={survey.surveyTitle}
              tag={survey.hashtag}
              age={survey.preferAge}
              gender={survey.preferGender}
              idx={survey.surveyIdx}
            />
          );
        })}
      </table>
    </>
  );
};

export default Rank;
