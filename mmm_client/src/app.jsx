import "./app.css";
import { Route, Routes } from "react-router-dom";

/* page들 import */
import Login from "./pages/login";
import Signup from "./pages/signup";
import Main from "./pages/main";
import Agreement from "./pages/agreement";
import SurveyList from "./pages/surveyList";
import SurveyJoin from "./pages/surveyJoin";
import MyPage from "./pages/myPage";
import SurveyWrite from "./pages/surveyWrite";

function App() {
  const Options = [
    { id: "1", value: "단일선택형" },
    { id: "2", value: "다중선택형" },
    { id: "3", value: "서술형" },
  ];

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/agreement" element={<Agreement />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/surveyList" element={<SurveyList />}></Route>
        <Route exact path="/surveyJoin" element={<SurveyJoin />}></Route>
        <Route exact path="/myPage" element={<MyPage />}></Route>
        <Route exact path="/surveyWrite" element={<SurveyWrite />}></Route>
      </Routes>
    </>
  );
}

export default App;
