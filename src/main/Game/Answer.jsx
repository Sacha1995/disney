import React from "react";
import Sparkles from "react-sparkle";

const Answer = ({ className, info, onCheck, index, animation }) => {
  return (
    <div
      className={`answer ${className} ${
        animation[index] === "wrong"
          ? "wrong"
          : animation[index] === "true"
          ? "true"
          : ""
      }`}
      onClick={() => {
        onCheck(info, index);
      }}
    >
      <p>
        {info.title === "Frankenweenie" ? (
          <>
            Franken
            <wbr />
            weenie
          </>
        ) : (
          info.title
        )}
      </p>
      <img src={info.image} alt={info.title} />
      {animation[index] === "true" && <Sparkles flicker={false} />}
    </div>
  );
};

export default Answer;
