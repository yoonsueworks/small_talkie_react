import React, { useState } from "react";
import Email from "./Email";
import Password from "./Password";
import Interest from "./Interest";
import SignupLayout from "./SignupLayout";

const Signup = () => {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount(Number.parseInt(count) + 1);
  };

  return (
    <>
      <SignupLayout
        count={count + 1}
        length={EX_PROCESS.length}
        key={EX_PROCESS[count].id}
        description={EX_PROCESS[count].description}
        comp={EX_PROCESS[count].comp}
        countHandler={countHandler}
      />
    </>
  );
};

export default Signup;

const EX_PROCESS = [
  { id: "1", description: "1번 설명", comp: <Interest /> },
  { id: "2", description: "2번 설명", comp: <Email /> },
  { id: "3", description: "3번 설명", comp: <Password /> },
];
