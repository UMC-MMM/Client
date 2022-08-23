import React from "react";

const ResultDescriptiveForm = () => {
  const descriptiveForm = {
    number: 4,
    essential: false,
    title: "서술형 질문",
  };

  return (
    <>
      <div className="resultSingle">
        <div className="resultSingleTop">
          <div className="resultSingleTopItem1">
            응답 {descriptiveForm.number}개
          </div>
          <div className="resultSingleTopItem2">서술형</div>
        </div>
        <div className="resultSingleQ">
          <div
            className={
              descriptiveForm.essential === true
                ? "resultSingleQItem1"
                : "resultSingleQItem1-2"
            }
          >
            {descriptiveForm.essential === true ? "필수" : "선택"}
          </div>
          <div className="resultSingleQItem2">{descriptiveForm.title}</div>
        </div>
        <div className="resultSingleA"></div> //결과 그래프
      </div>
    </>
  );
};

export default ResultDescriptiveForm;
