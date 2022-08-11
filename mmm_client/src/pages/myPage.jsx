import React from "react";
import Navbar from "../components/navbar";
import MyPageListContainer from "../components/myPageListContainer";
import Footer from "../components/footer";

const MyPage = () => {
  return (
    <>
      <Navbar />
      <div className="myPage">
        <div className="myPageLeft">
          <MyPageListContainer />
        </div>
        <div className="myPageRight">
          <div className="myPageRightImg"></div>
          <div className="myPageRightProfile">
            <div>
              <span>닉네임</span>
              <span>Sheon</span>
            </div>
            <div>
              <span>이름</span>
              <span>이서영</span>
            </div>
            <div>
              <span>성별</span>
              <span>여성</span>
            </div>
            <div>
              <span>나이</span>
              <span>20대</span>
            </div>
          </div>
          <button className="myPageRightChangeBnt">사용자 정보 변경</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyPage;
