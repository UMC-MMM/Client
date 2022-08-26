import React, { useState } from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import { VscClose } from "react-icons/vsc";
// DataPicker import
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { ko } from "date-fns/esm/locale";

const SurveyWrite2 = () => {
  const targetAge = [
    { key: 0, selectAge: "나이 상관없음" },
    { key: 1, selectAge: "10대" },
    { key: 2, selectAge: "20대" },
    { key: 3, selectAge: "30대" },
    { key: 4, selectAge: "40대" },
    { key: 5, selectAge: "50대" },
    { key: 6, selectAge: "60대 이상" },
  ];
  // key 값으로 구분

  const targetGender = [
    { key: 0, selectGender: "성별 상관없음" },
    { key: 1, selectGender: "남성" },
    { key: 2, selectGender: "여성" },
  ];

  const surveyCategory = [
    { key: 0, categoryName: "경영·경제" },
    { key: 1, categoryName: "인문·사회" },
    { key: 2, categoryName: "과학" },
    { key: 3, categoryName: "IT" },
    { key: 4, categoryName: "문화·예술" },
    { key: 5, categoryName: "건강·운동" },
    { key: 6, categoryName: "환경" },
    { key: 7, categoryName: "기타" },
  ];

  const [selectTargetAge, setSelectTargetAge] = useState("");
  const [selectTargetGender, setSelectTargetGender] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [finishDate, setFinishDate] = useState("");
  // 끝나는 날짜 선언

  const handleFinishDate = (date) => {
    setFinishDate(date);
  };

  // 질문 작성자가 input 창에 입력하는 해시 태그를 저장하는 상태 변수
  const [surveyHashTagInput, setSurveyHashtagInput] = useState("");
  // 질문 작성자가 입력하는 해시 태그들을 저장하는 리스트 상태 변수
  const [surveyHashTagList, setSurveyHashtagList] = useState([]);
  const [nextHashTagId, setNextHashTagId] = useState(0);

  const handleTargetAge = (age) => {
    setSelectTargetAge(age);
  };

  const handleTargetGender = (gender) => {
    setSelectTargetGender(gender);
  };

  const handleSurveyCategory = (category) => {
    setSelectCategory(category);
  };

  // input값에 문자 입력할 때 마다 실행 되는 이벤트 함수
  const onChangeSurveyHashTag = (e) => {
    setSurveyHashtagInput(e.target.value);
  };

  // X 클릭 시 해시태그 삭제 함수
  const deleteHashTag = (id) => {
    const hashTag_lists = surveyHashTagList.filter((item) => item.id !== id);
    setSurveyHashtagList(hashTag_lists);
  };

  // 제출 시 (버튼 클릭 시) 발생하는 이벤트 함수
  const onSubmitSurveyHashTag = (e) => {
    e.preventDefault(); // 새로고침 방지
    const hashTag_lists = surveyHashTagList.concat({
      id: nextHashTagId,
      hashTag: surveyHashTagInput,
    });
    setNextHashTagId(nextHashTagId + 1);

    setSurveyHashtagList(hashTag_lists);
    setSurveyHashtagInput("");
    // input태그 안에 있는 문자 삭제
  };

  return (
    <>
      <Navbar />
      <div className="surveyWrite2">
        <div className="surveyWrite2-Title-container">
          <div className="surveyWrite2-Title">반려동물 소비 실태조사</div>
          <div className="surveyWrite2-edit">
            <Link
              to="/surveyWrite"
              style={{
                textDecoration: "none",
                cursor: "pointer",
                color: "#68c9d1",
              }}
            >
              설문 편집하기
            </Link>
          </div>
        </div>
        <div className="surveyWrite2-time">
          서베이브가 계산한 설문 소요 시간 5분
        </div>
        <div className="surveyWrite2-point">
          설문조사를 게시하기 위해 30P가 필요합니다.
        </div>
        <div className="surveyWrite2-gray-container">
          <div className="surveyWrite2-gray-Title-container">
            <div className="surveyWrite2-gray-Title">쿠폰 사용</div>
            <div className="surveyWrite2-gray-Detail">
              사용하실 쿠폰을 쿠폰함에서 선택해주세요.
            </div>
          </div>
          <div className="surveyWrite2-gray-content-container">
            <div className="surveyWrite2-red-tag">쿠폰 선택하기</div>
          </div>
        </div>
        <div className="surveyWrite2-gray-container">
          <div className="surveyWrite2-gray-Title-container">
            <div className="surveyWrite2-gray-Title">설문조사 기한</div>
            <div className="surveyWrite2-gray-Detail">
              설문조사 응답을 받을 기간을 설정해주세요.
            </div>
          </div>
          <div className="surveyWrite2-gray-content-container">
            {/* <div className="surveyWrite2-finish-letter">
              게시일로부터&nbsp;&nbsp;
            </div> */}
            <DatePicker
              className="surveyWrite2-red-tag surveyWrite2-datepicker"
              // locale={ko}
              dateFormat="yyyy년 MM월 dd일"
              selected={finishDate}
              minDate={new Date()}
              closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
              placeholderText="설문조사 기한"
              onChange={(date) => handleFinishDate(date)}
              // maxDate = {addMonths(new Date(),5)} 최대 기간은 안정함
            />
            {/* <div className="surveyWrite2-finish-letter">&nbsp;&nbsp;까지</div> */}
          </div>
        </div>
        <div className="surveyWrite2-gray-container">
          <div className="surveyWrite2-gray-Title-container">
            <div className="surveyWrite2-gray-Title">해시태그 작성</div>
            <div className="surveyWrite2-gray-Detail">
              어떤 설문조사인지 파악하기 쉽게 해시태그를 작성해주세요.
            </div>
          </div>
          <div className="surveyWrite2-gray-content-container">
            <form
              className="surveyWrite2-hashtag-form-container"
              onSubmit={onSubmitSurveyHashTag}
            >
              <input
                className="surveyWrite2-hashtag-input"
                type="text"
                name="surveyHashTag"
                placeholder="해시태그를 입력하세요. (n자~n자 입력 가능)"
                value={surveyHashTagInput}
                onChange={onChangeSurveyHashTag}
              ></input>
              <button className="surveyWrite2-hashtag-input-btn" type="submit">
                완료
              </button>
            </form>
            <div className="surveyWrite2-hashTags-container">
              {surveyHashTagList.map((hashTag) => {
                return (
                  <div key={hashTag.id} className="surveyWrite2-hashTag">
                    <div className="surveyWrite2-hashTag-content">
                      #&nbsp;{hashTag.hashTag}
                    </div>
                    <VscClose
                      className="surveyWrite2-hashTag-content hashTag-delete"
                      size="20px"
                      onClick={() => deleteHashTag(hashTag.id)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="surveyWrite2-gray-container">
          <div className="surveyWrite2-gray-Title-container">
            <div className="surveyWrite2-gray-Title">설문조사 대상 선택</div>
            <div className="surveyWrite2-gray-Detail">
              설문조사 대상자의 조건을 클릭해주세요.
            </div>
          </div>
          <div className="surveyWrite2-gray-content-container">
            <div className="surveyListSelectBoxBigTagContainer">
              <div className="surveyListTargetAge">
                {targetAge.map((age) => (
                  <span
                    className={
                      selectTargetAge === age.key
                        ? "surveyListTargetTag surveyListTargetTagClicked"
                        : "surveyListTargetTag surveyWrite2-lightGrayTag"
                    }
                    onClick={() => handleTargetAge(age.key)}
                  >
                    {age.selectAge}
                  </span>
                ))}
              </div>
              <div className="surveyListTargetGender">
                {targetGender.map((gender) => (
                  <span
                    className={
                      selectTargetGender === gender.key
                        ? "surveyListTargetTag surveyListTargetTagClicked"
                        : "surveyListTargetTag surveyWrite2-lightGrayTag"
                    }
                    onClick={() => handleTargetGender(gender.key)}
                  >
                    {gender.selectGender}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="surveyWrite2-gray-container">
          <div className="surveyWrite2-gray-Title-container">
            <div className="surveyWrite2-gray-Title">
              설문조사 카테고리 선택
            </div>
            <div className="surveyWrite2-gray-Detail">
              작성하신 설문조사가 해당하는 카테고리를 선택해주세요.
            </div>
          </div>
          <div className="surveyWrite2-gray-content-container">
            <div className="surveyListSelectBoxBigTagContainer">
              <div className="surveyListTargetAge">
                {surveyCategory.map((category) => (
                  <span
                    className={
                      selectCategory === category.key
                        ? "surveyListTargetTag surveyListTargetTagClicked"
                        : "surveyListTargetTag surveyWrite2-lightGrayTag"
                    }
                    onClick={() => handleSurveyCategory(category.key)}
                  >
                    {category.categoryName}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="surveyWrite2-point-deduct">50P 차감하고</div>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <div className="surveyWrite2-finish-btn">설문게시완료</div>
        </Link>
      </div>
    </>
  );
};

export default SurveyWrite2;
