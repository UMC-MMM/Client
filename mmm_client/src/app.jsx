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
import MyPageCoupon from "./components/myPageCoupon";

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
        <Route exact path="/myPage" element={<MyPage />}></Route>
        <Route exact path="/myPageCoupon" element={<MyPageCoupon />}></Route>
      </Routes>
    </>
  );
}

export default App;
