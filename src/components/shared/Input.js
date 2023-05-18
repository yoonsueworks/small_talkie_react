import React from "react";

const Input = ({ setState, type, placeholder }) => {
  return (
    <>
      <input
        onChange={(e) => setState(e, type)}
        placeholder={placeholder}
      ></input>
    </>
  );
};

export default Input;
