import React from "react";
import Button from "../Reusable-code/Button";

const Buttons = ({ onNav }) => {
  return (
    <div className="containerBtn">
      <Button text="Game" onNav={onNav} />
      <Button text="Movies" onNav={onNav} />
    </div>
  );
};

export default Buttons;
