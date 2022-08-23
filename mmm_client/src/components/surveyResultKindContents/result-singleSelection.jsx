import React from "react";

const ResultSingleSelection = () => {
  const singleSelection = {
    number: 10,
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
    <>
      <div className="resultSingle">
        <div className="resultSingleTop">
          <div className="resultSingleTopItem1">
            응답 {singleSelection.number}개
          </div>
          <div className="resultSingleTopItem2">객관식</div>
        </div>
        <div className="resultSingleQ">
          <div
            className={
              singleSelection.essential === true
                ? "resultSingleQItem1"
                : "resultSingleQItem1-2"
            }
          >
            {singleSelection.essential === true ? "필수" : ""}
          </div>
          <div className="resultSingleQItem2">{singleSelection.title}</div>
        </div>
        <div className="resultSingleA"></div> //결과 그래프
      </div>
    </>
  );
};

export default ResultSingleSelection;
