import React from "react";
import Navbar from "./navbar";
import { FaUserCircle } from "react-icons/fa";
import { BsCircle } from "react-icons/bs";
import { BsSquare } from "react-icons/bs";

const Join = () => {
  return (
    <>
      <Navbar />
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
        <div className="joinBox1">
          <div className="joinBox1Text">
            맥딜리버리 앱 UX UI 개선용 설문조사입니다. 맥딜리버리 앱의 사용성에
            대한 인터뷰이 또한 모집중이니 인터뷰에 응해주실 분은 마지막
            설문문항에 전화번호를 꼭 기입해주세요.
          </div>
        </div>
        <div className="joinBox2">
          <div className="joinBox2Shape">
            <div className="joinBox2Cond">필수</div>
            <div className="joinBox2Q">질문1</div>
            <div className="joinBox2A">
              <div className="joinBox2A1">
                <div className="joinBox2A1Btn">
                  <BsCircle size="20px" />
                </div>
                <div className="joinBox2A1Text">네, 사용해 본 적 있습니다.</div>
              </div>
              <div className="joinBox2A2">
                <div className="joinBox2A2Btn">
                  <BsCircle size="20px" />
                </div>
                <div className="joinBox2A2Text">
                  아니요, 사용해 본 적 없습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="joinBox3">
          <div className="joinBox3Shape">
            <div className="joinBox3Cond">필수</div>
            <div className="joinBox3Q">질문2</div>
            <div className="joinBox3A">
              <div className="joinBox3A1">
                <div className="joinBox3A1Btn">
                  <BsSquare size="20px" />
                </div>
                <div className="joinBox3A1Text">찾기가 어렵다</div>
              </div>
              <div className="joinBox3A2">
                <div className="joinBox3A2Btn">
                  <BsSquare size="20px" />
                </div>
                <div className="joinBox3A2Text">찾기가 어렵다</div>
              </div>
              <div className="joinBox3A3">
                <div className="joinBox3A3Btn">
                  <BsSquare size="20px" />
                </div>
                <div className="joinBox3A3Text">찾기가 어렵다</div>
              </div>
            </div>
          </div>
        </div>
        <div className="joinBox4">
          <div className="joinBox4Shape">
            <div className="joinBox4Cond">필수</div>
            <div className="joinBox4Q">질문3</div>
            <div className="joinBox4A">
              <div className="joinBox4A1">
                <input type="text" placeholder="내 답변" />
              </div>
            </div>
          </div>
        </div>
        <div className="joinFinal">
          <button type="submit">설문 제출하기</button>
        </div>
      </div>
    </>
  );
};

export default Join;
