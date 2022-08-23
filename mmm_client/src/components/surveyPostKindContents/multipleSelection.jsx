import React, { useState } from "react";
import { BsSquare } from "react-icons/bs";
import { BsX } from "react-icons/bs";

const MultipleSelection = () => {
  const [selections, setSelections] = useState([{ key: 0 }, { key: 1 }]);

  const handleSurveyPostChoosePlusBtn = () => {
    const newSelections = [...selections, { key: Date.now() }];
    setSelections(newSelections);
  };

  const handleJoinBoxDelete = (survey) => {
    const newSelections = selections.filter((item) => item.key !== survey.key);
    setSelections(newSelections);
  };

  return (
    <div className="joinBoxy">
      <div className="joinBox2Shape">
        <div className="joinBox2A">
          {selections.map((selection) => {
            return (
              <label>
                <div className="joinBox2A1">
                  <div className="joinBox2A1Btn" id="circleBtn1">
                    <BsSquare size="20px" />
                  </div>
                  <div clssName="joinBox2A1Text">
                    <input
                      id="surveyQuestionDistractor"
                      type="text"
                      name="text"
                      placeholder="선택지"
                    ></input>
                  </div>
                  <div onClick={() => handleJoinBoxDelete(selection)}>
                    <BsX size="30" />
                  </div>
                </div>
              </label>
            );
          })}
        </div>
      </div>
      <div
        className="surveyPostChoosePlusBtn"
        onClick={handleSurveyPostChoosePlusBtn}
      >
        선택지 추가
      </div>
    </div>
  );
};

export default MultipleSelection;
