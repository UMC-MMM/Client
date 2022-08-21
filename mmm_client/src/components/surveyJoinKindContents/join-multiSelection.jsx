import React, { useState } from "react";
import { BsSquare } from "react-icons/bs";
import { BsFillCheckSquareFill } from "react-icons/bs";

const JoinMultiSelection = () => {
  const [userSelectMultiSelection, setUserSelectMultiSelection] = useState([]);

  // 체크 표시 취소를 위한 상태 정의
  const [userSelect, setUserSelect] = useState();

  const handleSelectMultiSelection = (select) => {
    handleSelect(select);
  };

  const handleSelect = (select) => {
    setUserSelect(!userSelect);
    // 반대 상태로 변경해주기
    if (userSelectMultiSelection.includes(select)) {
      // 만약 이미 선택된 것 이였다면 -> 배열에서 삭제해주기
      setUserSelectMultiSelection(
        userSelectMultiSelection.filter((item) => item !== select)
      );
      // setUsers(users.filter(user => user.id !== id));
    } else {
      // 선택된게 아니면 -> 배열에 추가해주기
      setUserSelectMultiSelection([...userSelectMultiSelection, select]);
    }
  };

  const multiSelection = {
    essential: true,
    title: "다중선택형 질문",
    selections: [
      { key: 0, selection: "다중 선택 항목1" },
      { key: 1, selection: "다중 선택 항목2" },
      { key: 2, selection: "다중 선택 항목3" },
      { key: 3, selection: "다중 선택 항목4" },
      { key: 4, selection: "다중 선택 항목5" },
    ],
  };

  return (
    <div className="joinBox3">
      <div className="joinBox3Shape">
        <div className="joinBox3Cond">
          {multiSelection.essential === true ? "필수" : ""}
        </div>
        <div className="joinBox3Q">{multiSelection.title}</div>
        <div className="joinBox3A">
          {multiSelection.selections.map((selection) => {
            return (
              <label onClick={() => handleSelectMultiSelection(selection.key)}>
                <div className="joinBox3A1">
                  <div className="joinBox3A1Btn">
                    {userSelectMultiSelection.includes(selection.key) ===
                    true ? (
                      <BsFillCheckSquareFill size="20px" />
                    ) : (
                      <BsSquare size="20px" />
                    )}
                  </div>
                  <div className="joinBox3A1Text">{selection.selection}</div>
                </div>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JoinMultiSelection;
