import React from "react";
import Navbar from "../components/navbar";
import MyPageListContainer from "../components/myPageListContainer";
import MyPageListBox from "../components/myPageListBox";
import Footer from "../components/footer";

const MyPage2 = () => {
  return (
    <>
      <Navbar />
      <div className="myPage">
        <div className="myPageLeft">
          <MyPageListContainer />
        </div>
        {/* <div className="myPageRight"> */}
        <MyPageListBox />
        {/* </div> */}
      </div>
      <Footer />
    </>
  );
};

export default MyPage2;
