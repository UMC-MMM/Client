import React, { useState } from "react";
import { BsCircle } from "react-icons/bs";
import { BsX } from "react-icons/bs";

const SingleSelection = ({ showData }) => {
  const [selections, setSelections] = useState([{ key: 0 }, { key: 1 }]);

  const [count, setCount] = useState(1);

  const [singleSelectionDistractorList, setSingleSelectionDistractorList] =
    useState({
      0: "",
      1: "",
    });

  const handleSurveyPostChoosePlusBtn = () => {
    const newCount = count + 1;
    setCount(newCount);
    const newSelections = [...selections, { key: newCount }];
    setSelections(newSelections);
  };

  const handleJoinBoxDelete = (survey) => {
    const newSelections = selections.filter((item) => item.key !== survey.key);
    delete singleSelectionDistractorList[survey.key];
    setSelections(newSelections);
  };

  const handleSingleSelectionDistractor = (e) => {
    const { name, value } = e.target;
    setSingleSelectionDistractorList({
      ...singleSelectionDistractorList,
      [name]: value,
    });
  };

  showData(singleSelectionDistractorList);

  return (
    <div className="joinBoxy">
      <div className="joinBox2Shape">
        <div className="joinBox2A">
          {selections.map((selection) => {
            return (
              <label>
                <div className="joinBox2A1">
                  <div className="joinBox2A1Btn" id="circleBtn1">
                    <BsCircle size="20px" />
                  </div>
                  <div clssName="joinBox2A1Text">
                    <input
                      id="surveyQuestionDistractor"
                      type="text"
                      name={selection.key}
                      placeholder="선택지"
                      onChange={handleSingleSelectionDistractor}
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

export default SingleSelection;
