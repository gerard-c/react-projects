import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {

  const [infoToggle, setInfoToggle] = useState(false);
  const toggleInfo = () => {
    infoToggle ? setInfoToggle(false) : setInfoToggle(true);
  }

  return (
    <article className="question">
      <header>
        <h2>{title}</h2>
        <button className="btn" onClick={toggleInfo}>{infoToggle ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
      </header>
      {infoToggle && <p>{info}</p>}
    </article>
  );
};

export default Question;
