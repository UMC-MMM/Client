import React from "react";

const Notice = () => {
  return (
    <div className="myPageNotice">
      <div className="noticeTitle">공지사항</div>
      <div className="noticeContainer">
        <div className="noticeItem">
          <div className="noticeItemNum">1</div>
          <div className="noticeItemContent">v 0.0.0 출시 완료!</div>
          <div className="noticeItemDate">2022-09-01</div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
