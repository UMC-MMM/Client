import React from "react";

const ResultMultipleSelection = () => {
  const multiSelection = {
    number: 10,
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
    <>
      <div className="resultSingle">
        <div className="resultSingleTop">
          <div className="resultSingleTopItem1">
            응답 {multiSelection.number}개
          </div>
          <div className="resultSingleTopItem2">체크박스</div>
        </div>
        <div className="resultSingleQ">
          <div
            className={
              multiSelection.essential === true
                ? "resultSingleQItem1"
                : "resultSingleQItem1-2"
            }
          >
            {multiSelection.essential === true ? "필수" : ""}
          </div>
          <div className="resultSingleQItem2">{multiSelection.title}</div>
        </div>
        <div className="resultSingleA"></div> //결과 그래프
      </div>
    </>
  );
};

export default ResultMultipleSelection;
