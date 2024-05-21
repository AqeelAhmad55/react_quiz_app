import React from "react";

const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <div className="start">
      <h2 className=" text-6xl">Welcome to the React Quiz</h2>
      <p className=" text-4xl">
        {numQuestions} questions to test your react mastery
      </p>
      <button className="btn btn-ui mt-10" onClick={()=> dispatch({ type : "start"})}>Let&apos;s start</button>
    </div>
  );
};

export default StartScreen;
