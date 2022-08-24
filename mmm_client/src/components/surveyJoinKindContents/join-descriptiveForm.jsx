import React from "react";

const JoinDescriptiveForm = () => {
  const descriptiveForm = {
    essential: true,
    title: "서술형 질문",
  };
  return (
    <div className="joinBox4">
      <div className="joinBox4Shape">
        <div className="joinBox4Cond">
          {descriptiveForm.essential === true ? "필수" : ""}
        </div>
        <div className="joinBox4Q">{descriptiveForm.title}</div>
        <div className="joinBox4A">
          <div className="joinBox4A1">
            <input type="text" placeholder="내 답변" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinDescriptiveForm;
