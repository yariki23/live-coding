import React from 'react';

const Pagination = props => {
  return (
    <div className="pagination">
      <button className="btn">←</button>
      <span className="pagination__page">1</span>
      <button className="btn">→</button>
    </div>
  );
};

export default Pagination;
