import React from "react";

const Button = ({ onNav, text }) => {
  return (
    <button
      className="btn"
      onClick={() => {
        onNav(text);
      }}
    >
      {text}
    </button>
  );
};

export default Button;
