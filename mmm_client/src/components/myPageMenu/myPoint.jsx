import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const MyPoint = () => {
  return (
    <div>
      <div className="myPoint">
        <div className="myPointTitle">현재 포인트</div>
        <div className="myPointContent">
          <div className="myPointContPoint">100 P</div>
          <button className="myPointContPlusBtn">포인트 충전하기</button>
          <button className="myPointContShopBtn">포인트 샵</button>
        </div>
      </div>

      <div className="myPointUsage">
        <div className="myPointUsageTitle">포인트 이용 내역</div>
        <div className="myPointUsageContent">
          <div className="myPointUsagePlus">
            <div className="myPointUsagePlusTitle">포인트 획득 내역</div>
            <div className="myPointUsagePlusDate">2022-08-08</div>
            <div className="myPointUsagePlusContent">
              <div className="myPointUsagePlusItem">
                <AiOutlinePlus size="14px" color="#68C9D1" />
                <div className="myPointUsagePlusItemPoint">5P</div>
                <div className="myPointUsagePlusItemSum1">포인트 충전</div>
                <div className="myPointUsagePlusItemCont">
                  카드결제 이용 포인트 충전
                </div>
              </div>
              <div className="myPointUsagePlusItem">
                <AiOutlinePlus size="14px" color="#68C9D1" />
                <div className="myPointUsagePlusItemPoint">5P</div>
                <div className="myPointUsagePlusItemSum2">설문 참여</div>
                <div className="myPointUsagePlusItemCont">
                  “현대 사회의 투표율에 관한 실태조사” 참여
                </div>
              </div>
              <div className="myPointUsagePlusItem">
                <AiOutlinePlus size="14px" color="#68C9D1" />
                <div className="myPointUsagePlusItemPoint">5P</div>
                <div className="myPointUsagePlusItemSum2">설문 참여</div>
                <div className="myPointUsagePlusItemCont">
                  “보이스피싱 범죄 관련 설문조사” 참여
                </div>
              </div>
            </div>
            <div className="myPointUsagePlusDate">2022-08-02</div>
            <div className="myPointUsagePlusContent">
              <div className="myPointUsagePlusItem">
                <AiOutlinePlus size="14px" color="#68C9D1" />
                <div className="myPointUsagePlusItemPoint">5P</div>
                <div className="myPointUsagePlusItemSum1">포인트 충전</div>
                <div className="myPointUsagePlusItemCont">
                  무통장 입금 이용 포인트 충전
                </div>
              </div>
            </div>
          </div>
          <div className="myPointUsageMinus">
            <div className="myPointUsageMinusTitle">포인트 소비 내역</div>
            <div>
              <div className="myPointUsageMinusDate">2022-08-08</div>
              <div className="myPointUsageMinusContent">
                <div className="myPointUsageMinusItem">
                  <AiOutlineMinus size="14px" color="#E1605C" />
                  <div className="myPointUsageMinusItemPoint">5P</div>
                  <div className="myPointUsageMinusItemSum1">설문 게시</div>
                  <div className="myPointUsageMinusItemCont">
                    “유기견 입양에 관한 실태조사” 게시
                  </div>
                </div>
                <div className="myPointUsageMinusItem">
                  <AiOutlineMinus size="14px" color="#E1605C" />
                  <div className="myPointUsageMinusItemPoint">5P</div>
                  <div className="myPointUsageMinusItemSum2">포인트 샵</div>
                  <div className="myPointUsageMinusItemCont">
                    포인트 샵 이용
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPoint;
