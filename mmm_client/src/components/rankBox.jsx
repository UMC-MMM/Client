import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

const RankBox = (props) => {
  return (
    <div className="rankBox1">
      <div className="rankBox1Left">{props.rank}</div>
      <div className="rankBoxRight">
        <div className="rankName">{props.title}</div>
        <div className="rankHashtags">
          {props.tag}
          {/* {props.tag.map((tag) => {
            return <div className="rankHashtag1">#{tag}</div>;
          })} */}
        </div>
        <div className="rankCond">
          <div className="rankCond1">
            {props.age === 0 ? "나이 상관없음" : props.age + "대"}
          </div>
          <div className="rankCond2">
            {props.gender === 0 ? "성별 상관없음" : props.gender}
          </div>
        </div>
        <button className="rankBtn">
          <BsFillPlayFill color="#68C9D1" size="30px" />
        </button>
      </div>
    </div>
  );
};

export default RankBox;
