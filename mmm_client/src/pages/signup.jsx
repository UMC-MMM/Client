import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsCheckCircleFill } from "react-icons/bs";
import { ReactComponent as Survave } from "../assets/survaveLogo.svg";
import { useNavigate } from "react-router-dom"; // 회원가입 후 로그인 페이지 이동할 때 쓰는 문법ㅃ

const Signup = () => {
  // 동의 초기값 회색색상
  const [color, setColor] = useState("#8e8e8e");
  // 개인정보 수집 동의에 대한 상태 저장 -> 초기값은 false
  const [agree, setAgree] = useState(false);
  // 개인정보 수집 동의에 대한 함수 -> 동의 시 색상 변경 & 상태 true로 변경
  const handleAgree = () => {
    color === "#8e8e8e" ? setColor("#68c9d1") : setColor("#8e8e8e");
    setAgree(!agree);
  };

  //  오류 메세지 처리
  const [errorEmailMessage, setErrorEmailMessage] = useState("");
  const [errorIdMessage, setErrorIdMessage] = useState("");
  const [errorPasswordMessage, setErrorPasswordMessage] = useState("");

  // 아이디, 패스워드, 이메일, 이름
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // 페이지 이동
  const navigate = useNavigate();

  // 아이디, 패스워드, 이메일, 이름 입력 받기!
  const handleIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const handleSubmitSignIn = async () => {
    // 에러 메시지 초기화
    setErrorEmailMessage("");
    setErrorIdMessage("");
    setErrorPasswordMessage("");

    const body = {
      userId,
      userPassword,
      userName,
      userEmail,
    };
    const singUpApi = await axios.post(
      `https://www.survave.com/users/join`,
      body
    );
    console.log(singUpApi.data.code);
    if (singUpApi.data.code === 1000) {
      navigate("/login");
    } else if (singUpApi.data.code === 2010) {
      setErrorIdMessage(singUpApi.data.message);
      console.log("아이디오류");
    } else if (singUpApi.data.code === 2011) {
      setErrorIdMessage(singUpApi.data.message);
      console.log("아이디오류");
    } else if (singUpApi.data.code === 2015) {
      setErrorEmailMessage(singUpApi.data.message);
      console.log("이메일오류");
    } else if (singUpApi.data.code === 2016) {
      setErrorEmailMessage(singUpApi.data.message);
      console.log("이메일오류");
    } else if (singUpApi.data.code === 2017) {
      setErrorEmailMessage(singUpApi.data.message);
      console.log("이메일오류");
    } else if (singUpApi.data.code === 2030) {
      setErrorPasswordMessage(singUpApi.data.message);
      console.log("비밀번호오류");
    }
  };

  return (
    <>
      <div className="signupTitle">
        <Survave />
      </div>
      <div className="signupAskMember">이미 서베이브 회원이신가요?</div>
      <Link to="/login" style={{ textDecoration: "none", cursor: "pointer" }}>
        <div className="signUpLoginBtn">로그인 하기</div>
      </Link>
      <div className="signupSignup">회원가입</div>
      <div className="signupBoxContainer">
        <div className="signupBoxTitle">이름</div>
        <div className="signupInputName">
          <input
            id="signupInputName"
            type="text"
            name="name"
            placeholder="실명을 입력하세요."
            onChange={handleNameChange}
          ></input>
        </div>
        <div className="signupBoxTitle">이메일</div>
        <div className="signupInputEmail">
          <input
            id="signupInputEmail"
            type="text"
            name="email"
            placeholder="이메일 주소를 입력하세요."
            onChange={handleEmailChange}
          ></input>
        </div>
        <div className="signupErrorMessage">{errorEmailMessage}</div>
        <div className="signupBoxTitle">아이디</div>
        <div className="signupInputId">
          <input
            id="signupInputId"
            type="text"
            name="id"
            placeholder="서베이브에 사용할 아이디를 입력하세요."
            onChange={handleIdChange}
          ></input>
        </div>
        <div className="signupErrorMessage">{errorIdMessage}</div>
        <div className="signupBoxTitle">비밀번호</div>
        <div className="signupInputPassword">
          <input
            id="signupInputPassword"
            type="password"
            name="password"
            placeholder="6~16자의 영문자, 숫자, 특수문자를 사용하세요."
            onChange={handlePasswordChange}
          ></input>
        </div>
        <div className="signupErrorMessage">{errorPasswordMessage}</div>
        <div className="signupAgreeContainer" onClick={handleAgree}>
          <div
            className="signupAgree"
            onClick={handleAgree}
            style={{ color: color }}
          >
            서베이브의 개인정보 수집 및 이용에 동의합니다.
          </div>
          <BsCheckCircleFill
            className="signupAgreeIcon"
            size="28px"
            color={color}
            onClick={handleAgree}
          />
        </div>
        <Link
          to="/agreement"
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <div className="signupAgreeCheck">동의서 확인하기 →</div>
        </Link>

        <div
          className="signupSubmitBtn"
          style={{ backgroundColor: `${color}` }}
        >
          <input
            id="signupSubmitBtn"
            className="signupSubmit"
            backgroundColor={color}
            type="submit"
            name="submit"
            value="회원가입 하기"
            disabled={!agree}
            onClick={handleSubmitSignIn}
          />
        </div>
        {/* <div className="loginFindIdandPassword findInSignup">
          <span>아이디 찾기</span>
          <span>|</span>
          <span>비밀번호 찾기</span>
        </div> */}
      </div>
    </>
  );
};

export default Signup;
