import React from "react";
import { FaCrown } from "react-icons/fa";

import RankBox from "./rankBox";

const Rank = () => {
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
          title="설문조사 제목"
          tag={["앱종류", "사용자", "설문종류"]}
          age="나이 상관없음"
          gender="성별 상관없음"
        />
        <RankBox
          rank={2}
          title="설문조사 제목"
          tag={["앱종류", "사용자", "설문종류"]}
          age="나이 상관없음"
          gender="성별 상관없음"
        />
        <RankBox
          rank={3}
          title="설문조사 제목"
          tag={["앱종류", "사용자", "설문종류"]}
          age="나이 상관없음"
          gender="성별 상관없음"
        />
      </table>
    </>
  );
};

export default Rank;
