import React from "react";

const Score = ({ score, highScore }) => {
  return (
    <div className="scores">
      <p className="score">Score: {score}</p>
      <p className="score highScore">High score: {highScore}</p>
    </div>
  );
};

export default Score;
