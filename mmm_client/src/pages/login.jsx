import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Survave } from "../assets/survaveLogo.svg";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [errorIdMessage, setErrorIdMessage] = useState("");
  const [errorPasswordMessage, setErrorPasswordMessage] = useState("");

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitClick = async () => {
    const body = {

      id,
      password,
    };

    console.log(body);
    const loginApi = await axios.post(
      `https://www.survave.com/users/login`,
      body
    );
    console.log(loginApi);

    if (loginApi.data.code === 1000) {
      localStorage.setItem("token", loginApi.data.result.jwt);
      localStorage.setItem("userIdx", loginApi.data.result.userIdx);
      navigate("/");
    } else if (loginApi.data.code === 2010) {
      setErrorIdMessage(loginApi.data.message);
    } else if (loginApi.data.code === 2030) {
      setErrorPasswordMessage(loginApi.data.message);
    } else if (loginApi.data.code === 3014) {
      setErrorPasswordMessage(loginApi.data.message);
    }

  };

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
          onChange={handleIdChange}
        />
      </div>
      <div className="loginErrorMessage">{errorIdMessage}</div>
      <div className="loginInputPassword">
        <input
          id="loginInputPassword"
          type="password"
          name="password"
          placeholder="비밀번호를 입력하세요."
          onChange={handlePasswordChange}
        />
      </div>
      <div className="loginErrorMessage">{errorPasswordMessage}</div>
      <div className="loginSubmitBtn">
        <input
          id="loginSubmitBtn"
          className="loginSubmit"
          type="submit"
          name="submit"
          value="로그인하기"
          onClick={handleSubmitClick}
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
