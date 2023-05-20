import React, { useEffect, useState } from "react";
import Input from "../../components/shared/Input";
import { validatePassword } from "../../utils/validationUtils";

const Password = () => {
  const [password, setpassword] = useState("");
  const [passwordCheck, setpasswordCheck] = useState("");
  const [isPasswordChecked, setIsPasswordChecked] = useState(false);

  const isPasswordValid = validatePassword(password);

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
    setIsPasswordChecked(
      isPasswordValid && passwordCheck !== "" && password === passwordCheck
        ? true
        : false
    );
  };

  const warnPasswordCheck = passwordCheck !== "" && passwordCheck !== password;

  useEffect(() => {}, [password]);

  useEffect(() => {
    checkPassword();
    // TODO: checkPassword() true일 경우 context -> signupdata set 실행
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

      {!isPasswordValid && <div>비밀번호1 유효성 검사 중</div>}
      {!isPasswordChecked && <div>비밀번호2 유효성 검사 중</div>}
      {warnPasswordCheck && <div>불일치</div>}
    </div>
  );
};

export default Password;
