import "./app.css";
import { Route, Routes } from "react-router-dom";

/* page들 import */
import Login from "./components/login";
import Signup from "./components/signup";
import Main from "./components/main";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
