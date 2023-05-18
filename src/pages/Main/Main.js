import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Main = () => {
  return (
    <>
      <Login />
      <Link to="/signup">회원가입</Link>
    </>
  );
};

export default Main;

// TODO:
// auth 로그인 상태 확인
