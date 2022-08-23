import React from "react";
import axios from "axios";
import { useState } from "react";
import MyPageListBox from "../myPageListBox";

const MySurvey = () => {
  const [mySurveyBox, setMySurveyBox] = useState([]);

  axios
    .get("https://www.survave.com/users/mysurveys")
    .then(function (response) {
      setMySurveyBox(response.data.result);
    })
    .catch(function (error) {
      console.log(error);
      // 되긴 되는데 에러도 출력나는 것 같음
    });

  return (
    <div className="myPageSurvey">
      {mySurveyBox.map((survey) => {
        return (
          <MyPageListBox
            key={survey.surveyIdx}
            title={survey.surveyTitle}
            point={survey.surveyPointValue}
            time={survey.surveyTime}
            age={survey.preferAge}
            gender={survey.preferGender}
            hashtag={survey.hashtag}
            date={survey.deadlineAt}
            participant={survey.totalParticipant}
          />
        );
      })}
    </div>
  );
};

export default MySurvey;
