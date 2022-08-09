import React from "react";
import { FaCrown } from "react-icons/fa";
import { BsFillPlayFill } from "react-icons/bs";

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
        <tr className="rankBox1">
          <td className="rankBox1Left">1</td>
          <td className="rankBoxRight">
            <div className="rankName">설문조사1 제목</div>
            <div className="rankHashtags">
              <div className="rankHashtag1">#앱종류</div>
              <div className="rankHashtag2">#사용자</div>
              <div className="rankHashtag3">#설문종류</div>
            </div>
            <div className="rankCond">
              <div className="rankCond1">나이 상관없음</div>
              <div className="rankCond2">성별 상관없음</div>
            </div>
            <button className="rankBtn">
              <BsFillPlayFill color="#68C9D1" size="30px" />
            </button>
          </td>
        </tr>
        <tr className="rankBox2">
          <td className="rankBox2Left">2</td>
          <td className="rankBoxRight">
            <div className="rankName">설문조사2 제목</div>
            <div className="rankHashtags">
              <div className="rankHashtag1">#앱종류</div>
              <div className="rankHashtag2">#사용자</div>
              <div className="rankHashtag3">#설문종류</div>
            </div>
            <div className="rankCond">
              <div className="rankCond1">나이 상관없음</div>
              <div className="rankCond2">성별 상관없음</div>
            </div>
            <button className="rankBtn">
              <BsFillPlayFill color="#68C9D1" size="30px" />
            </button>
          </td>
        </tr>
        <tr className="rankBox3">
          <td className="rankBox3Left">3</td>
          <td className="rankBoxRight">
            <div className="rankName">설문조사3 제목</div>
            <div className="rankHashtags">
              <div className="rankHashtag1">#앱종류</div>
              <div className="rankHashtag2">#사용자</div>
              <div className="rankHashtag3">#설문종류</div>
            </div>
            <div className="rankCond">
              <div className="rankCond1">나이 상관없음</div>
              <div className="rankCond2">성별 상관없음</div>
            </div>
            <button className="rankBtn">
              <BsFillPlayFill color="#68C9D1" size="30px" />
            </button>
          </td>
        </tr>
      </table>
    </>
  );
};

export default Rank;
