import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {

  const [infoToggle, setInfoToggle] = useState(false);
  const toggleInfo = () => {
    infoToggle ? setInfoToggle(false) : setInfoToggle(true);
  }

  return (
    <div className="container">
      <header>
      <h2>{title}</h2>
      <button onClick={toggleInfo}>{infoToggle ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
      </header>
      <p>{infoToggle && info}</p>
    </div>
  );
};

export default Question;
