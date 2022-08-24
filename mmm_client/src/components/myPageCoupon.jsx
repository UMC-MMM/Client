import React from "react";

const MyPageCoupon = (props) => {
  return (
    <div className="myPageCoupon">
      <div className="myPageCouponTitle">{props.title}</div>
      <div className="myPageCouponDate">2022. 06. 10 ~ 2022.09. 20</div>
      <div className="myPageCouponContent">{props.content}</div>
    </div>
  );
};

export default MyPageCoupon;
