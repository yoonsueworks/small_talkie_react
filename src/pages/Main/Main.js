import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Main = () => {
  return (
    <div>
      <Login />
      <Link to="/Signup">회원가입</Link>
    </div>
  );
};

export default Main;

// TODO:
// auth 로그인 상태 확인
