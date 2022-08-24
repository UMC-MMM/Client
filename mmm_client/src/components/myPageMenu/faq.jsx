import React from "react";
import MyPageBox from "../myPageBox";

const Faq = () => {
  return (
    <div className="myPageFaq">
      <div className="faqTitle">자주 묻는 질문</div>
      <div className="faqContainer">
        <MyPageBox
          number={1}
          content="포인트 충전 환불할 수 있나요?"
          date="2022-08-26"
        />
        <MyPageBox
          number={2}
          content="포인트 지급이 누락되었어요."
          date="2022-08-26"
        />
        <MyPageBox
          number={3}
          content="설문조사 보관 기한이 궁금해요!"
          date="2022-08-26"
        />
      </div>
    </div>
  );
};

export default Faq;
