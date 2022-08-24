import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Survave } from "../assets/survaveLogo.svg";

const Login = () => {
  return (
    <>
      <div className="loginTitle logo">
        <Link to="/">
          <Survave />
        </Link>
      </div>
      <div className="loginLogin">로그인</div>
      <div className="loginInputId">
        <input
          id="loginInputId"
          type="text"
          name="id"
          placeholder="아이디를 입력하세요."
        />
      </div>
      <div className="loginInputPassword">
        <input
          id="loginInputPassword"
          type="password"
          name="password"
          placeholder="비밀번호를 입력하세요."
        />
      </div>
      <div className="loginSubmitBtn">
        <input
          id="loginSubmitBtn"
          className="loginSubmit"
          type="submit"
          name="submit"
          value="로그인하기"
        />
      </div>
      {/* <div className="loginFindIdandPassword">
        <span>아이디 찾기</span>
        <span>|</span>
        <span>비밀번호 찾기</span>
      </div> */}
      <div className="loginAskMember">아직 서베이브 회원이 아니신가요?</div>
      <Link
        to="/signup"
        style={{
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        <div className="loginSignUpBtn">회원가입 하기</div>
      </Link>
    </>
  );
};

export default Login;
