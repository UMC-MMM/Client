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

const SurveyCategory = () => {
  return (
    <div className="surveyCategory">
      <div className="surveyCategoryTitle">설문조사 카테고리</div>
      <div className="surveyCategoryContainer">
        <CategoryButton
          title="경영·경제"
          icon={<FaCommentDollar size="40px" />}
        />
        <CategoryButton title="인문·사회" icon={<AiFillRead size="40px" />} />
        <CategoryButton title="과학" icon={<AiFillExperiment size="40px" />} />
        <CategoryButton title="IT" icon={<GrTechnology size="40px" />} />
        <CategoryButton title="문화·예술" icon={<FaPaintBrush size="40px" />} />
        <CategoryButton
          title="건강·운동"
          icon={<MdOutlineSportsVolleyball size="40px" />}
        />
        <CategoryButton title="환경" icon={<FaEnvira size="40px" />} />
        <CategoryButton title="반려동물" icon={<FaDog size="40px" />} />
        <CategoryButton title="기타" icon={<CgInbox size="40px" />} />
      </div>
    </div>
  );
};

export default SurveyCategory;
