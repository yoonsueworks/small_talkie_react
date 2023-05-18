import React from "react";

const SignupLayout = ({
  id,
  description,
  comp,
  countHandler,
  length,
  count,
}) => {
  return (
    <div key={id}>
      {count}/{length}
      <div>{description}</div>
      <div>{comp}</div>
      <button onClick={countHandler}>다음</button>
    </div>
  );
};

export default SignupLayout;
