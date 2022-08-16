import React from "react";
import MyPageCoupon from "../myPageCoupon";

const MyCoupon = () => {
  return (
    <div>
      <div className="myCouponTitle">
        <div className="myCouponTitleT">보유한 쿠폰</div>
        <div className="myCouponNum">5개</div>
      </div>
      <div className="myCouponItem">
        <MyPageCoupon />
        <MyPageCoupon />
        <MyPageCoupon />
        <MyPageCoupon />
        <MyPageCoupon />
      </div>
    </div>
  );
};

export default MyCoupon;
