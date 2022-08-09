import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Rank from "./rank";

const Main = () => {
  return (
    <>
      <Navbar />
      <Rank />
      <div>This is Main Page.</div>
      <Link to="/login" style={{ textDecoration: "none", cursor: "pointer" }}>
        <div>로그인 화면 가기</div>
      </Link>
    </>
  );
};

export default Main;
