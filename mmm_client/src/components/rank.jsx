import React from "react";
import { FaCrown } from "react-icons/fa";
import RankBox from "./rankBox";

const Rank = ({ surveyTopThree }) => {
  // console.log(surveyTopThree);
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
        <RankBox
          rank={1}
          title={"첫번째 설문조사"}
          tag={"해시태그1"}
          age={20}
          gender={"여성"}
        />
        <RankBox
          rank={2}
          title={"두번째 설문조사"}
          tag={"해시태그1"}
          age={0}
          gender={"남성"}
        />
        <RankBox
          rank={3}
          title={"세번째 설문조사"}
          tag={"해시태그1"}
          age={30}
          gender={0}
        />
      </table>
    </>
  );
};

export default Rank;
