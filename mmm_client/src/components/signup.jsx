import React from "react";
import { Link } from "react-router-dom";
import { BsCheckCircleFill } from "react-icons/bs";

const Signup = () => {
  return (
    <>
      <div className="signupTitle">Survave</div>
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
          ></input>
        </div>
        <div className="signupBoxTitle">이메일</div>
        <div className="signupInputEmail">
          <input
            id="signupInputEmail"
            type="text"
            name="email"
            placeholder="이메일 주소를 입력하세요."
          ></input>
        </div>
        <div className="signupBoxTitle">아이디</div>
        <div className="signupInputId">
          <input
            id="signupInputId"
            type="text"
            name="id"
            placeholder="서베이브에 사용할 아이디를 입력하세요."
          ></input>
        </div>
        <div className="signupBoxTitle">비밀번호</div>
        <div className="signupInputPassword">
          <input
            id="signupInputPassword"
            type="password"
            name="password"
            placeholder="6~16자의 영문자, 숫자, 특수문자를 사용하세요."
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
          ></input>
        </div>

        {/* <div className="signupAgree">
          서베이브의 개인정보 수집 및 이용에 동의합니다.
          <BsCheckCircleFill
            className="signAgreeIcon"
            size="28px"
            color="#8e8e8e"
          />
        </div> */}
        <div className="signupAgreeContainer">
          <div className="signupAgree">
            서베이브의 개인정보 수집 및 이용에 동의합니다.
          </div>
          <BsCheckCircleFill
            className="signupAgreeIcon"
            size="28px"
            color="#8e8e8e"
          />
        </div>

        <div className="signupAgreeCheck">동의서 확인하기 →</div>
        <div className="signupSubmitBtn">
          <input
            id="signupSubmitBtn"
            className="signupSubmit"
            type="submit"
            name="submit"
            value="회원가입 하기"
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
