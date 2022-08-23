import React from "react";
import CategoryButton from "./categoryButton";
import { FaCommentDollar } from "react-icons/fa";
import { AiFillRead } from "react-icons/ai";
import { AiFillExperiment } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
import { FaPaintBrush } from "react-icons/fa";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { FaEnvira } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
import { CgInbox } from "react-icons/cg";
import { BsFillGridFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const SurveyCategory = () => {
  return (
    <div className="surveyCategory">
      <div className="surveyCategoryTitle">
        <div className="surveyCategoryTitleIcon">
          <BsFillGridFill size="30px" color="#E1605C" />
        </div>
        <div className="surveyCategoryTitleName">설문조사 카테고리</div>
      </div>
      <div className="surveyCategoryContainer">
        <Link
          to="/surveyList"
          state={{ surveyIdx: 1 }}
          style={{
            textDecoration: "none",
            cursor: "pointer",
            color: "#282828",
          }}
        >
          <CategoryButton
            title="인문·사회"
            icon={<AiFillRead size="35px" color="#282828" />}
          />
        </Link>
        <Link
          to="/surveyList"
          state={{ surveyIdx: 2 }}
          style={{
            textDecoration: "none",
            cursor: "pointer",
            color: "#282828",
          }}
        >
          <CategoryButton
            title="경영·경제"
            icon={<FaCommentDollar size="35px" color="#282828" />}
          />
        </Link>
        <Link
          to="/surveyList"
          state={{ surveyIdx: 3 }}
          style={{
            textDecoration: "none",
            cursor: "pointer",
            color: "#282828",
          }}
        >
          <CategoryButton
            title="과학"
            icon={<AiFillExperiment size="35px" color="#282828" />}
          />
        </Link>
        <Link
          to="/surveyList"
          state={{ surveyIdx: 4 }}
          style={{
            textDecoration: "none",
            cursor: "pointer",
            color: "#282828",
          }}
        >
          <CategoryButton
            title="IT"
            icon={<GrTechnology size="35px" color="#282828" />}
          />
        </Link>
        <Link
          to="/surveyList"
          state={{ surveyIdx: 5 }}
          style={{
            textDecoration: "none",
            cursor: "pointer",
            color: "#282828",
          }}
        >
          <CategoryButton
            title="문화·예술"
            icon={<FaPaintBrush size="35px" color="#282828" />}
          />
        </Link>
        <Link
          to="/surveyList"
          state={{ surveyIdx: 6 }}
          style={{
            textDecoration: "none",
            cursor: "pointer",
            color: "#282828",
          }}
        >
          <CategoryButton
            title="건강·운동"
            icon={<MdOutlineSportsVolleyball size="35px" />}
          />
        </Link>
        <Link
          to="/surveyList"
          state={{ surveyIdx: 7 }}
          style={{
            textDecoration: "none",
            cursor: "pointer",
            color: "#282828",
          }}
        >
          <CategoryButton title="환경" icon={<FaEnvira size="35px" />} />
        </Link>
        <Link
          to="/surveyList"
          state={{ surveyIdx: 8 }}
          style={{
            textDecoration: "none",
            cursor: "pointer",
            color: "#282828",
          }}
        >
          <CategoryButton title="반려동물" icon={<FaDog size="35px" />} />
        </Link>
        <Link
          to="/surveyList"
          state={{ surveyIdx: 9 }}
          style={{
            textDecoration: "none",
            cursor: "pointer",
            color: "#282828",
          }}
        >
          <CategoryButton title="기타" icon={<CgInbox size="35px" />} />
        </Link>
      </div>
    </div>
  );
};

export default SurveyCategory;
