import React from "react";
import Button from "../Reusable-code/Button";

const Buttons = ({ onNav }) => {
  return (
    <div className="containerBtn">
      <Button text="Game" onClick={onNav} />
      <Button text="Movies" onClick={onNav} />
    </div>
  );
};

export default Buttons;
