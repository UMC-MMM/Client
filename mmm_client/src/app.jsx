import "./app.css";
import { Route, Routes } from "react-router-dom";

/* page들 import */
import Login from "./pages/login";
import Signup from "./pages/signup";
import Main from "./pages/main";
import Agreement from "./pages/agreement";
import SurveyList from "./pages/surveyList";
import SurveyJoin from "./pages/surveyJoin";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/agreement" element={<Agreement />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/surveyList" element={<SurveyList />}></Route>
        <Route exact path="/surveyJoin" element={<SurveyJoin />}></Route>
      </Routes>
    </>
  );
}

export default App;
