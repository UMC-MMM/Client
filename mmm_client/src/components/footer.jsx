import React from "react";
import { AiFillGithub } from "react-icons/ai";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerSurvave">
          <div className="footerSurvaveEng">Survave</div>
          <div className="footerSurvaveKor"> 설문조사의 새로운 물결</div>
        </div>
        <div className="footerContact">
          <div className="footerContactTeam">
            <div className="footerContactTitle">Team</div>
            <div className="footerContactDetail">MMM of UMC</div>
          </div>
          <div className="footerContactEmail">
            <div className="footerContactTitle">Email</div>
            <div className="footerContactDetail">mmm.umc@gmail.com</div>
          </div>
        </div>
        <div className="footerSNS">
          <a
            href="https://github.com/UMC-MMM"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "#282828",
            }}
            title="GitHub"
          >
            <AiFillGithub size="36px" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
