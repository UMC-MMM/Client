import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaUserCircle } from "react-icons/fa";
import ResultSingleSelection from "../components/surveyResultKindContents/result-singleSelection";
import ResultMultipleSelection from "../components/surveyResultKindContents/result-multipleSelection";
import ResultDescriptiveForm from "../components/surveyResultKindContents/result-descriptiveForm";

const SurveyResult = () => {
  const AboutResult = {
    number: 10,
    point: 10,
    title: "설문조사 제목",
    writer: "게시자 이름",
    time: 5,
    age: "나이 상관없음",
    gender: "성별 상관없음",
    tag: ["앱종류", "사용자", "설문종류"],
    expiryDate: "2022. 8. 26.",
    // 디데이 아직 미완성
    detail:
      "맥딜리버리 앱 UX UI 개선용 설문조사입니다. 맥딜리버리 앱의 사용성에 대한 인터뷰 또한 모집중이니 인터뷰에 응해주실 분은 마지막 설문문항에 전화번호를 꼭 기입해주세요.",
  };

  return (
    <>
      <Navbar />
      <div className="join">
        <div className="resultTop">
          <div className="resultTopItem1">응답</div>
          <div className="resultTopItem2">{AboutResult.number}개</div>
        </div>

        <div className="joinTop">
          <div className="joinTopPoint">{AboutResult.point}p</div>
          <div className="joinTopProfile">
            <div>
              <FaUserCircle size="44px" />
            </div>
            <div className="joinTopProfileName">{AboutResult.writer}</div>
          </div>
        </div>
        <div className="joinTitle">
          <div className="joinTitleT">{AboutResult.title}</div>
          <div className="joinTitleTime">약 {AboutResult.time}분 소요</div>
        </div>
        <div className="joinSub">
          <div className="joinSubCond">
            <div className="joinSubCond1">{AboutResult.age}</div>
            <div className="joinSubCond1">{AboutResult.gender}</div>
          </div>
          <div className="joinSubHash">
            {AboutResult.tag.map((tag) => {
              return <div className="joinSubHash1">#{tag}</div>;
            })}
          </div>
          <div className="joinSubEnd">D-10</div>
        </div>
        <div className="joinBox1">
          <div className="joinBox1Text">{AboutResult.detail}</div>
        </div>
        <ResultSingleSelection />
        <ResultMultipleSelection />
        <ResultDescriptiveForm />
      </div>
      <Footer />
    </>
  );
};

export default SurveyResult;
