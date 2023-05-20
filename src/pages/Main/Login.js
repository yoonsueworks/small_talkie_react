import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../../utils/validationUtils";
import { api } from "../../config";

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const valueHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const { email, password } = values;
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);

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
