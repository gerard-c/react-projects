import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import Title from './components/Title';
import Review from './components/Review';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let autoSlide = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return (() => {
      clearInterval(autoSlide);
    })
  }, [index])

  return (
    <section className="section">
      <Title />
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
            position = 'lastSlide';
          }
          return (
            <Review
              key={id}
              image={image}
              name={name}
              title={title}
              quote={quote}
              position={position}
            />
          );
        })}
        <button className="prev" onClick={(() => setIndex(index - 1))}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={(() => setIndex(index + 1))}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
