import React from "react";
import userProfileImg from "../../assets/userProfileImg.png";

const MyProfileView = ({ handleMyProfile, aboutUser }) => {
  return (
    <div className="myPageProfile">
      <div className="myPageRightImgBox">
        <img
          className="myPageRightImg"
          src={userProfileImg}
          alt="사용자 기본 프로필 이미지"
        ></img>
      </div>
      <div className="myPageRightProfile">
        {/* <div>
          <div className="myPageProfileTitle">닉네임</div>
          <div className="myPageProfileDetail">{aboutUser.userName}</div>
        </div> */}
        <div>
          <div className="myPageProfileTitle">이름</div>
          <div className="myPageProfileDetail">{aboutUser.userName}</div>
        </div>
        <div>
          <div className="myPageProfileTitle">성별</div>
          <div className="myPageProfileDetail">{aboutUser.userGender}</div>
        </div>
        <div>
          <div className="myPageProfileTitle">나이</div>
          <div className="myPageProfileDetail">{aboutUser.userAge}</div>
        </div>
        <div className="myPageProfileIDEmailPW">
          <div>
            <div className="myPageProfileTitle">아이디</div>
            <div className="myPageProfileDetail">{aboutUser.userEmail}</div>
          </div>
          <div>
            <div className="myPageProfileTitle">이메일</div>
            <div className="myPageProfileDetail">{aboutUser.userEmail}</div>
          </div>
          {/* <div>
            <div className="myPageProfileTitle">비밀번호</div>
            <div className="myPageProfileDetail">{aboutUser.userGender}</div>
          </div> */}
        </div>
      </div>
      <button className="myPageRightChangeBnt" onClick={handleMyProfile}>
        사용자 정보 변경
      </button>
    </div>
  );
};

export default MyProfileView;
