import React from "react";

const CategoryButton = (props) => {
  return (
    <div className="categoryButtonContainer">
      <div className="categoryButtonIcon">{props.icon}</div>
      <div className="categoryButtonName">{props.title}</div>
    </div>
  );
};

export default CategoryButton;
