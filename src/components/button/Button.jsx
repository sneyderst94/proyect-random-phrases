import React from "react";
import "./button.css";

const Button = ({ changePhrase, backgroundChange }) => {
  const buttonHandleclick = () => {
    changePhrase();
    backgroundChange();
  };
  return (
    <button className="btn" onClick={buttonHandleclick}>
      <i className="fa-solid fa-repeat text-xl"></i>
    </button>
  );
};

export default Button;
