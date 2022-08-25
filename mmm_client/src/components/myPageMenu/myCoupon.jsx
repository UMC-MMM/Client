import React from "react";
import MyPageCoupon from "../myPageCoupon";

const MyCoupon = () => {
  return (
    <div>
      <div className="myCouponTitle">
        <div className="myCouponTitleT">보유한 쿠폰</div>
        <div className="myCouponNum">3개</div>
      </div>
      <div className="myCouponItem">
        <MyPageCoupon
          title="설문조사 등록 1회권"
          content="설문조사를 1회 무료로 등록할 수 있는 쿠폰입니다."
        />
        <MyPageCoupon
          title="설문조사 등록 할인권 (50%)"
          content="설문조사 등록 시, 50%할인된 포인트로 등록할 수 있는 쿠폰입니다."
        />
        <MyPageCoupon
          title="설문조사 등록 할인권 (30%)"
          content="설문조사 등록 시, 30%할인된 포인트로 등록할 수 있는 쿠폰입니다."
        />
      </div>
    </div>
  );
};

export default MyCoupon;
