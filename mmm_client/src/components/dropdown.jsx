import React from "react";
import { useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";

function Dropdown({ surveyKind }) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("단일선택형");
  surveyKind(selected);
  const options = ["단일선택형", "다중선택형", "서술형"];
  return (
    <div className="dropdown">
      <div className="dropdownBtn" onClick={() => setIsActive(!isActive)}>
        <div className="dropdownBtnIcon">
          <BsCaretDownFill color="#c1c1c1" size="12" />
        </div>
        <div className="dropdownBtnText">{selected}</div>
      </div>
      {isActive && (
        <div className="dropdownContent">
          {options.map((option) => (
            <div
              className="dropdownItem"
              onClick={() => {
                setSelected(option);
                setIsActive(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
