import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsCheckCircleFill } from "react-icons/bs";
import { ReactComponent as Survave } from "../assets/survaveLogo.svg";

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

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmitSignIn = async () => {
    const body = {
      id,
      name,
      email,
      password,
      confirmPassword,
    };
    await axios.post(`/user/join`, body);
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
        <div className="signupBoxTitle">비밀번호 확인</div>
        {/* <div className="signupBoxError">오류메세지</div> */}
        <div className="signupInputPasswordCheck">
          <input
            id="signupInputPasswordCheck"
            type="text"
            name="passwordCheck"
            placeholder="비밀번호를 한번 더 입력하세요."
            onChange={handleConfirmPasswordChange}
          ></input>
        </div>
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

        <div className="signupSubmitBtn">
          <input
            id="signupSubmitBtn"
            className="signupSubmit"
            type="submit"
            name="submit"
            value="회원가입 하기"
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
