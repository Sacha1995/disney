const Game = ({ information }) => {
  let threeNumbers = randomNumbers(information);
  console.log(threeNumbers);
  function randomNumbers(array) {
    return [
      Math.floor(Math.random() * array.length),
      Math.floor(Math.random() * array.length),
      Math.floor(Math.random() * array.length),
    ];
  }

  const randomIndex = () => {
    return Math.floor(Math.random() * 3);
  };

  return (
    <div className="containerGame">
      <p className="question">
        {information[threeNumbers[randomIndex()]].summary}
      </p>
      <div className="containerAnswers">
        <div className="answerOne answer">
          <p>{information[threeNumbers[0]].title}</p>
          <img
            src={information[threeNumbers[0]].image}
            alt={information[threeNumbers[0]].title}
          />
        </div>
        <div className="answerTwo answer">
          <p>{information[threeNumbers[1]].title}</p>
          <img
            src={information[threeNumbers[1]].image}
            alt={information[threeNumbers[1]].title}
          />
        </div>
        <div className="answerThree answer">
          <p>{information[threeNumbers[2]].title}</p>
          <img
            src={information[threeNumbers[2]].image}
            alt={information[threeNumbers[2]].title}
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
