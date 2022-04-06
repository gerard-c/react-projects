import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const questions = data.map((question) => {
    return <SingleQuestion key={question.id} {...question} />
  })
  console.log(questions);
  return (
    <div className="container">
      <h3>Questions and Answers About Login</h3>
      <section className="info">
        {questions}
      </section>
    </div>
  )
}

export default App;
