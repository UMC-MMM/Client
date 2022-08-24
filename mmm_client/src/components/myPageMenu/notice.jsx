import React from "react";
import MyPageBox from "../myPageBox";

const Notice = () => {
  return (
    <div className="myPageNotice">
      <div className="noticeTitle">공지사항</div>
      <div className="noticeContainer">
        <MyPageBox number={1} content="v 0.0.0 출시 완료!" date="2022-09-01" />
      </div>
    </div>
  );
};

export default Notice;
