import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const questions = data.map((question) => {
    return <SingleQuestion key={question.id} title={question.title} info={question.info} />
  })
  console.log(questions);
  return (
    <>
      {questions}
    </>
  )
}

export default App;
