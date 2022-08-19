import React, { useState } from "react";
import { BsCircle } from "react-icons/bs";
import { BsFillCheckCircleFill } from "react-icons/bs";

const JoinSingleSelection = () => {
  const [userSelectSingleSelection, setUserSelectSingleSelection] = useState();

  const handleSelectSingleSelection = (select) => {
    setUserSelectSingleSelection(select);
  };

  const singleSelection = {
    essential: true,
    title: "단일선택형 질문",
    selections: [
      { key: 0, selection: "네, 사용해 본 적 있습니다." },
      { key: 1, selection: "아니요, 사용해 본 적 없습니다." },
      { key: 2, selection: "단일 선택1" },
      { key: 3, selection: "단일 선택2" },
      { key: 4, selection: "단일 선택3" },
    ],
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
              <label onClick={() => handleSelectSingleSelection(selection.key)}>
                <div className="joinBox2A1">
                  <div
                    className="joinBox2A1Btn"
                    id="circleBtn1"
                    // onClick={() => handleSelectSingleSelection()}
                  >
                    {userSelectSingleSelection === selection.key ? (
                      <BsFillCheckCircleFill size="20px" />
                    ) : (
                      <BsCircle size="20px" />
                    )}
                  </div>
                  <div className="joinBox2A1Text">{selection.selection}</div>
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
