import React from "react";

const Faq = () => {
  return (
    <div className="myPageFaq">
      <div className="faqTitle">자주 묻는 질문</div>
      <div className="faqContainer">
        <div className="faqItem">
          <div className="faqItemNum">1</div>
          <div className="faqItemContent">v 0.0.0 출시 완료!</div>
          <div className="faqItemDate">2022-09-01</div>
        </div>
        <div className="faqItem">
          <div className="faqItemNum">2</div>
          <div className="faqItemContent">v 0.0.0 출시 완료!</div>
          <div className="faqItemDate">2022-09-01</div>
        </div>
        <div className="faqItem">
          <div className="faqItemNum">3</div>
          <div className="faqItemContent">v 0.0.0 출시 완료!</div>
          <div className="faqItemDate">2022-09-01</div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
