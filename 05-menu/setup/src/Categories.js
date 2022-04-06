import React from 'react';

const Categories = ({ filterItems }) => {

  const buttons = 'oi-oi-oi-oi';

  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() => filterItems('all')}>All</button>
      <button className="filter-btn" onClick={() => filterItems('breakfast')}>Breakfast</button>
    </div>
  );
};

export default Categories;
