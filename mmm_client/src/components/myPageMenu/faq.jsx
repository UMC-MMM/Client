import React from "react";

const Faq = () => {
  return (
    <div className="myPageFaq">
      <div className="faqTitle">자주 묻는 질문</div>
      <div className="faqContainer">
        <div className="faqItem">
          <div className="faqItemNum">1</div>
          <div className="faqItemContent">포인트 충전 환불할 수 있나요?</div>
          <div className="faqItemDate">2022-08-26</div>
        </div>
        <div className="faqItem">
          <div className="faqItemNum">2</div>
          <div className="faqItemContent">포인트 지급이 누락되었어요.</div>
          <div className="faqItemDate">2022-08-26</div>
        </div>
        <div className="faqItem">
          <div className="faqItemNum">3</div>
          <div className="faqItemContent">설문조사 보관 기한이 궁금해요!</div>
          <div className="faqItemDate">2022-08-26</div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
