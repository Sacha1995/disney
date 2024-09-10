import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../Hooks";
import Interaction from "../MovieCards/Interaction";
import Button from "../Reusable-code/Button";
import Answer from "./Answer";
import Score from "./Score";

const Game = ({ information, onToggle }) => {
  const [threeNumbers, setThreeNumbers] = useState();
  const [question, setQuestion] = useState();
  let [nextQuestion, setNextQuestion] = useState(0);
  let [score, setScore] = useState(0);
  let [highScore, setHighScore] = useState(0);
  let [trackAnswers, setTrackAnswers] = useState(["", "", ""]);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

  useEffect(() => {
    const storedHighScore = getLocalStorage("highScore");
    if (storedHighScore) {
      setHighScore(storedHighScore);
    }
  }, []);

  useEffect(() => {
    if (information && information.length > 0) {
      const randomNumbersArray = randomNumbers(information);
      setThreeNumbers(randomNumbersArray);
      setQuestion(information[randomNumbersArray[randomIndex()]]);
    }
  }, [nextQuestion]);

  function randomNumbers(array) {
    let arr = [];
    while (arr.length < 3) {
      let newRandomInt = Math.floor(Math.random() * array.length);
      if (!arr.includes(newRandomInt)) {
        arr.push(newRandomInt);
      }
    }
    return arr;
  }

  const onNextQuestion = () => {
    if (!answeredCorrectly) {
      return;
    }
    let add = nextQuestion + 1;

    const _trackAnswers = trackAnswers.map((item, i) => {
      return "";
    });
    setAnsweredCorrectly(false);
    setTrackAnswers(_trackAnswers);
    setNextQuestion(add);
  };

  const randomIndex = () => {
    return Math.floor(Math.random() * 3);
  };

  const onCheck = (e, index) => {
    if (answeredCorrectly) {
      return;
    }
    if (e.title === question.title) {
      let _score = score + 1;
      setScore(_score);
      setAnsweredCorrectly(true);
      if (_score > highScore) {
        setHighScore(_score);
        setLocalStorage("highScore", _score);
      }
      const _trackAnswers = trackAnswers.map((item, i) => {
        if (i === index) {
          return "true";
        } else {
          return "";
        }
      });
      setTrackAnswers(_trackAnswers);
    } else if (e.title !== question.title) {
      const _trackAnswers = trackAnswers.map((item, i) => {
        if (i === index) {
          return "wrong";
        } else {
          return "";
        }
      });
      setTrackAnswers(_trackAnswers);
    } else {
      console.log("something went wrong with the game");
    }
  };

  if (!question || threeNumbers.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="containerGame">
      <Score score={score} highScore={highScore} />
      <p className="description">
        Welcome to the Disney Classics game. Do you know which movie is being
        described?
      </p>
      <div className="containerQuestion">
        <Interaction
          love={question.love}
          wantToWatch={question.wantToWatch}
          watched={question.watched}
          onToggle={onToggle}
          id={question.movieId}
        />
        <p className="question">{question.summary}</p>
      </div>
      <div className="containerAnswers">
        <Answer
          className="answerOne"
          onCheck={onCheck}
          info={information[threeNumbers[0]]}
          index={0}
          animation={trackAnswers}
        />
        <Answer
          className="answerTwo"
          onCheck={onCheck}
          info={information[threeNumbers[1]]}
          index={1}
          animation={trackAnswers}
        />
        <Answer
          className="answerThree"
          onCheck={onCheck}
          info={information[threeNumbers[2]]}
          index={2}
          animation={trackAnswers}
        />
      </div>
      <Button text="Next" onClick={onNextQuestion} className={"next"} />
    </div>
  );
};

export default Game;
