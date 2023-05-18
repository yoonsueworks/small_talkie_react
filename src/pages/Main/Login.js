import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../config";

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const valueHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  //email: a-z와 A-Z/숫자/+와 - 허용, @와 a-z 그리고 \. a-z 사용가능
  //password: a-z와 A-Z/숫자/특수 문자(공백 제외) 허용, 2개이상 조합, 최소 10자 이상
  const { email, password } = values;
  const emailRegEx = /[a-zA-Z0-9+_]+@[a-z]+\.+[a-z]/;
  const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{7,})/;
  const isEmailValid = emailRegEx.test(email);
  const isPasswordValid = passwordRegEx.test(password);

  const fetchUserInfo = () => {
    fetch(`${api.signin}`, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error("에러 발생, check status code");
      })
      .then((data) => {
        if (data.message === "LOGIN_SUCCESS") {
          localStorage.setItem("token", data.access_token);
          navigate("/");
        }
      });
  };

  const submitUserInfos = (e) => {
    const checkValid = isEmailValid && isPasswordValid;
    e.preventDefault();
    checkValid && fetchUserInfo();
  };

  return (
    <div>
      <form action="submit">
        <input name="email" placeholder="email" onChange={valueHandler}></input>
        <input
          name="password"
          placeholder="password"
          onChange={valueHandler}
        ></input>
        <button onClick={submitUserInfos}>login</button>
      </form>
    </div>
  );
};

export default Login;
