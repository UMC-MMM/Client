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
          <div className="myPageRightImgBox">
            <div className="myPageRightImg"></div>
          </div>
          <div className="myPageRightProfile">
            <div>
              <div className="myPageProfileTitle">닉네임</div>
              <div className="myPageProfileDetail">Sheon</div>
            </div>
            <div>
              <div className="myPageProfileTitle">이름</div>
              <div className="myPageProfileDetail">이서영</div>
            </div>
            <div>
              <div className="myPageProfileTitle">성별</div>
              <div className="myPageProfileDetail">여성</div>
            </div>
            <div>
              <div className="myPageProfileTitle">나이</div>
              <div className="myPageProfileDetail">20대</div>
            </div>
            <div className="myPageProfileIDEmailPW">
              <div>
                <div className="myPageProfileTitle">아이디</div>
                <div className="myPageProfileDetail">abcdefg123</div>
              </div>
              <div>
                <div className="myPageProfileTitle">이메일</div>
                <div className="myPageProfileDetail">abcdefg@gmail.com</div>
              </div>
              <div>
                <div className="myPageProfileTitle">비밀번호</div>
                <div className="myPageProfileDetail">abcdefg1234.</div>
              </div>
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
