import React from "react";

const Finish = ({ points, maxPoints, highScore, dispatch }) => {
  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <div className="result">
        You scored {points} out of {maxPoints} ({Math.round(percentage)}%)
      </div>
      <div>
        <p className="highscore">High Score: {highScore}</p>
      </div>
      <button
        onClick={() => dispatch({ type: "restart" })}
        className="btn btn-ui"
      >
        Restart
      </button>
    </>
  );
};

export default Finish;
