import React from "react";

const StoryBox = (props) => {
  return (
    <div className="storyBoxContainer">
      <img className="storyBoxImg" src={props.img} alt="인기스토리 사진"></img>
      <div className="storyBoxTitle">{props.title}</div>
      <div className="storyBoxDetail">{props.detail}</div>
    </div>
  );
};

export default StoryBox;
