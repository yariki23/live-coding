import React from 'react';

const Pagination = props => {
  const { currentPage, goPrev, goNext, totalItems, itemsPerPage } = props;

  const isPrevPageAvailable = currentPage === 1;
  const isNextPageAvailable = currentPage === Math.ceil(totalItems / itemsPerPage);

  const showLeftArrow = () => (!isPrevPageAvailable ? '←' : '');
  const showRightArrow = () => (!isNextPageAvailable ? '→' : '');

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={isPrevPageAvailable}>
        {showLeftArrow()}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNext} disabled={isNextPageAvailable}>
        {showRightArrow()}
      </button>
    </div>
  );
};

export default Pagination;
