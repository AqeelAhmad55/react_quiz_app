import React from "react";

const Progress = ({ index, numQuestions, maxPoints, points, answer }) => {
  return (
    <div className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question{" "}
        <strong>
          {index + 1} / {numQuestions}
        </strong>
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints} points
      </p>
    </div>
  );
};

export default Progress;
