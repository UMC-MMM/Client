import React from "react";

const StoryBox = (props) => {
  return (
    <div className="storyBoxContainer">
      <div className="storyBoxImg"></div>
      <div className="storyBoxTitle">{props.title}</div>
      <div className="storyBoxDetail">{props.detail}</div>
    </div>
  );
};

export default StoryBox;
