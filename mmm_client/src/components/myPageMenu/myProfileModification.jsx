import React from "react";
import { useState } from "react";
// import { BsCheck } from "react-icons/bs";
import userProfileImg from "../../assets/userProfileImg.png";

const MyProfileModification = ({ handleMyProfile }) => {
  const userAge = [
    { key: 1, userAge: "10대" },
    { key: 2, userAge: "20대" },
    { key: 3, userAge: "30대" },
    { key: 4, userAge: "40대" },
    { key: 5, userAge: "50대" },
    { key: 6, userAge: "60대 이상" },
  ];

  const userGender = [
    { key: 1, userGender: "남성" },
    { key: 2, userGender: "여성" },
  ];

  const [selectUserAge, setSelectUserAge] = useState();
  const [selectUserGender, setSelectUserGender] = useState();

  const handleUserAge = (age) => {
    setSelectUserAge(age);
  };

  const handleUserGender = (gender) => {
    setSelectUserGender(gender);
  };
  return (
    <div className="myPageProfileModify">
      <div className="myPageRightImgBox">
        <img
          className="myPageRightImg"
          src={userProfileImg}
          alt="사용자 기본 프로필 이미지"
        ></img>
      </div>
      <div className="myPageRightProfile">
        <div>
          <div className="myPageProfileTitle">닉네임</div>
          <input
            className="myPageProfileModifyBox"
            type="text"
            id="nickName"
            name="nickName"
          ></input>
        </div>
        <div>
          <div className="myPageProfileTitle">이름</div>
          <input
            className="myPageProfileModifyBox"
            type="text"
            id="userName"
            name="userName"
          ></input>
        </div>
        <div>
          <div className="myPageProfileTitle">성별</div>
          {userGender.map((gender) => (
            <div
              className={
                selectUserGender === gender.key
                  ? "myPageProfileModifyTag myPageProfileModifyTagClicked"
                  : "myPageProfileModifyTag"
              }
              onClick={() => handleUserGender(gender.key)}
            >
              {gender.userGender}
            </div>
          ))}
        </div>
        <div>
          <div className="myPageProfileTitle">나이</div>
          {userAge.map((age) => (
            <div
              className={
                selectUserAge === age.key
                  ? "myPageProfileModifyTag myPageProfileModifyTagClicked"
                  : "myPageProfileModifyTag"
              }
              onClick={() => handleUserAge(age.key)}
            >
              {age.userAge}
            </div>
          ))}
        </div>
        <div className="myPageProfileIDEmailPW">
          <div>
            <div className="myPageProfileTitle">아이디</div>
            <input
              className="myPageProfileModifyBox"
              type="text"
              id="userId"
              name="userId"
            ></input>
          </div>
          <div>
            <div className="myPageProfileTitle">이메일</div>
            <input
              className="myPageProfileModifyBox"
              type="email"
              id="userEmail"
              name="userEmail"
            ></input>
          </div>
          <div>
            <div className="myPageProfileTitle">비밀번호</div>
            <input
              className="myPageProfileModifyBox"
              type="password"
              id="userPassword"
              name="userPassword"
            ></input>
          </div>
        </div>
      </div>
      <div className="myProfileModifyButtons">
        <button className="myProfileModifyCancle" onClick={handleMyProfile}>
          취소
        </button>
        <button className="myProfileModifyFin" onClick={handleMyProfile}>
          완료
        </button>
      </div>
    </div>
  );
};

export default MyProfileModification;
