import React from "react";

const Interaction = ({ watched, wantToWatch, love, onToggle, id }) => {
  return (
    <div className="interaction">
      <img
        src={wantToWatch ? "./eyesed.svg" : "./eyes.svg"}
        alt="Want to watch button"
        className="control wantToWatch"
        tabIndex="0"
        title="Want to watch"
        onClick={() => onToggle(id, "wantToWatch")}
      />
      <img
        src={watched ? "./check-marked.svg" : "./check-mark.svg"}
        alt="Have watched button"
        className="control haveWatched"
        tabIndex="0"
        title="Have watched"
        onClick={() => onToggle(id, "watched")}
      />
      <img
        src={love ? "./liked.svg" : "./like.svg"}
        alt="Love button"
        className="control love"
        tabIndex="0"
        title="Love"
        onClick={() => onToggle(id, "love")}
      />
    </div>
  );
};

export default Interaction;
