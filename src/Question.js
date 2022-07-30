import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, title, info }) => {
  const [answer, setAnswer] = useState(false);
  function showAnswer() {
    setAnswer(!answer);
  }
  return (
    <article className="question" key={id}>
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={showAnswer}>
          {answer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {answer && <p>{info}</p>}
    </article>
  );
};

export default Question;
