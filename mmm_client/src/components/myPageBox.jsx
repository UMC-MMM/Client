import React from "react";

const MyPageBox = (props) => {
  return (
    <div className="noticeItem">
      <div className="noticeItemNum">{props.number}</div>
      <div className="noticeItemContent">{props.content}</div>
      <div className="noticeItemDate">{props.date}</div>
    </div>
  );
};

export default MyPageBox;
