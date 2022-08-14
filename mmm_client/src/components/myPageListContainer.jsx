import React from "react";

const MyPageListContainer = () => {
  return (
    <div className="myPageListContainer">
      <div className="myPageListContainerTop">
        <div className="myPageListContainerTitle">마이페이지</div>
        <div className="myPageListItems">내 프로필</div>
        <div className="myPageListItems">내 설문조사</div>
        <div className="myPageListItems">포인트</div>
        <div className="myPageListItems">쿠폰</div>
        <div className="myPageListItems">공지사항</div>
        <div className="myPageListItems">자주 묻는 질문</div>
      </div>
      <div className="myPageListContainerBottom">
        <button className="myPageLogoutBnt">로그아웃</button>
      </div>
    </div>
  );
};

export default MyPageListContainer;
