import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import MyProfile from "../components/myPageMenu/myProfile";
import MyCoupon from "../components/myPageMenu/myCoupon";
import MyPoint from "../components/myPageMenu/myPoint";
import MySurvey from "../components/myPageMenu/mySurvey";
import Notice from "../components/myPageMenu/notice";
import Faq from "../components/myPageMenu/faq";

import BlueCircle from "../assets/semicircle-b.png";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();

  const [myPageMenu, setMyPageMenu] = useState(0);

  const myPageMenuArr = [
    { name: "내 프로필" },
    { name: "내 설문조사" },
    { name: "포인트" },
    { name: "쿠폰" },
    { name: "공지사항" },
    { name: "자주 묻는 질문" },
  ];

  const myPageMenuObj = {
    0: <MyProfile />,
    1: <MySurvey />,
    2: <MyPoint />,
    3: <MyCoupon />,
    4: <Notice />,
    5: <Faq />,
  };

  const handleMyPageMenu = (index) => {
    setMyPageMenu(index);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userIdx");
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <div className="myPage">
        <div className="myPageLeft">
          <div className="myPageListContainer">
            <div className="myPageListContainerTop">
              <div className="myPageListContainerTitle">마이페이지</div>
              {myPageMenuArr.map((menu, index) => {
                return (
                  <div className="myPageListItemsContainer">
                    <img
                      className={
                        myPageMenu === index
                          ? "myPageListItemCircle myPageListCircleClicked"
                          : "myPageListItemCircle"
                      }
                      src={BlueCircle}
                      alt="선택한 메뉴"
                    ></img>
                    <div
                      className={
                        myPageMenu === index
                          ? "myPageListItems myPageListClicked"
                          : "myPageListItems"
                      }
                      onClick={() => handleMyPageMenu(index)}
                    >
                      {menu.name}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="myPageListContainerBottom" onClick={handleLogout}>
              <button className="myPageLogoutBnt">로그아웃</button>
            </div>
          </div>
        </div>
        <div className="myPageRight">{myPageMenuObj[myPageMenu]}</div>
      </div>
      <Footer />
    </>
  );
};

export default MyPage;
