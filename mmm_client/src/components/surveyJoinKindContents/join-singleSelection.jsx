import React, { useState } from "react";
import { BsCircle } from "react-icons/bs";
import { BsFillCheckCircleFill } from "react-icons/bs";

const JoinSingleSelection = (props) => {
  const [userSelectSingleSelection, setUserSelectSingleSelection] = useState();

  // 체크 표시 취소를 위한 상태 정의
  const [userSelect, setUserSelect] = useState();

  const handleSelectSingleSelection = (select) => {
    handleSelect(select);
  };

  const handleSelect = (select) => {
    setUserSelect(!userSelect);
    // 반대 상태로 변경해주기
    if (userSelectSingleSelection === select) {
      // 만약 이미 선택된 것 이였다면 -> 삭제해주기
      setUserSelectSingleSelection();
    } else {
      // 선택된게 아니면 -> state 변경
      setUserSelectSingleSelection(select);
    }
  };

  const singleSelection = {
    essential: true,
    title: props.title,
    selections: props.options,
  };

  return (
    <div className="joinBox2">
      <div className="joinBox2Shape">
        <div className="joinBox2Cond">
          {singleSelection.essential === true ? "필수" : ""}
        </div>
        <div className="joinBox2Q">{singleSelection.title}</div>
        <div className="joinBox2A">
          {singleSelection.selections.map((selection) => {
            return (
              <label
                onClick={() => handleSelectSingleSelection(selection.optionIdx)}
              >
                <div className="joinBox2A1">
                  <div className="joinBox2A1Btn" id="circleBtn1">
                    {userSelectSingleSelection === selection.optionIdx ? (
                      <BsFillCheckCircleFill size="20px" />
                    ) : (
                      <BsCircle size="20px" />
                    )}
                  </div>
                  <div className="joinBox2A1Text">
                    {selection.optionContent}
                  </div>
                </div>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JoinSingleSelection;
