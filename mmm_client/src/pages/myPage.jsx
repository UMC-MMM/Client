import React from "react";
import Navbar from "../components/navbar";
import MyPageListContainer from "../components/myPageListContainer";
import Footer from "../components/footer";

import MyProfile from "../components/myProfile";

const MyPage = () => {
  return (
    <>
      <Navbar />
      <div className="myPage">
        <div className="myPageLeft">
          <MyPageListContainer />
        </div>
        <div className="myPageRight">
          <MyProfile />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyPage;
