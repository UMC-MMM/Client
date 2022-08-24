import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";

import { ReactComponent as Survave } from "../assets/survaveLogo.svg";

const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLoginOrMypage = () => {
    if (token) {
      navigate("/mypage");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbarContainer">
          <div className="navbarLeftContainer">
            <div className="logo navbarLogo">
              <Link to="/">
                <Survave />
              </Link>
            </div>
            <ul className="navbarMenu">
              <li className="navbarMenuItem">
                <Link
                  to="/surveyList"
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#282828",
                  }}
                >
                  설문조사
                </Link>
              </li>
              <li className="navbarMenuItem">
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#282828",
                  }}
                >
                  서베이브 스토리
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbarRightContainer">
            <form className="navbarSearch">
              <div className="navbarSearchBox">
                <input type="text" placeholder="검색어를 입력하세요." />
                <button type="submit">
                  <BiSearch color="#68C9D1" size="30px" />
                </button>
              </div>
            </form>
            <ul className="navbarIcons">
              <li className="navbarBellIcon">
                <span>
                  <BsBellFill color="#C2C2C2" size="35px" />
                </span>
              </li>
              <li className="navbarMypageIcon" onClick={handleLoginOrMypage}>
                {token === null ? (
                  <span>
                    <FaUserPlus color="#C2C2C2" size="35px" />
                  </span>
                ) : (
                  <span>
                    <FaUserCircle color="#C2C2C2" size="35px" />
                  </span>
                )}
                {/* <span>
                  <FaUserCircle color="#C2C2C2" size="35px" />
                </span> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
