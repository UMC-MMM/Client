import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

const RankBox = () => {
  const AboutRank = {
    rank: 1,
    title: "설문조사 제목",
    tag: ["앱종류", "사용자", "설문종류"],
    age: "나이 상관없음",
    gender: "성별 상관없음",
  };

  return (
    <div className="rankBox1">
      <div className="rankBox1Left">{AboutRank.rank}</div>
      <div className="rankBoxRight">
        <div className="rankName">{AboutRank.title}</div>
        <div className="rankHashtags">
          {AboutRank.tag.map((tag) => {
            return <div className="rankHashtag1">#{tag}</div>;
          })}
        </div>
        <div className="rankCond">
          <div className="rankCond1">{AboutRank.age}</div>
          <div className="rankCond2">{AboutRank.gender}</div>
        </div>
        <button className="rankBtn">
          <BsFillPlayFill color="#68C9D1" size="30px" />
        </button>
      </div>
    </div>
  );
};

export default RankBox;
