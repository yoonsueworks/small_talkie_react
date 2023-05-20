import React, { useEffect, useState } from "react";
import Input from "../../components/shared/Input";

const Password = () => {
  const [password, setpassword] = useState("");
  const [passwordCheck, setpasswordCheck] = useState("");

  const inputs = [
    { id: 1, state: password, type: "password", placeholder: "비밀번호" },
    {
      id: 2,
      state: passwordCheck,
      type: "passwordCheck",
      placeholder: "비밀번호 확인",
    },
  ];

  const updateInput = (e, type) => {
    type === "password"
      ? setpassword(e.target.value)
      : setpasswordCheck(e.target.value);
  };

  const checkPassword = () => {
    passwordCheck !== "" &&
      (() => {
        console.log(password === passwordCheck);
      })();
  };

  useEffect(() => {
    checkPassword();
  }, [passwordCheck]);

  return (
    <div>
      {inputs.map(({ id, state, type, placeholder }) => {
        return (
          <Input
            key={id}
            state={state}
            setState={updateInput}
            type={type}
            placeholder={placeholder}
          />
        );
      })}
    </div>
  );
};

export default Password;
