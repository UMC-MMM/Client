import React from "react";

const ResultSingleSelection = () => {
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
    <>
      <div>
        <div>
          <div>응답</div>
          <div>객관식</div>
        </div>
        <div>
          <div>
            <div>필수</div>
            <div>질문</div>
          </div>
          <div></div> //결과 그래프
        </div>
      </div>
    </>
  );
};

export default ResultSingleSelection;
