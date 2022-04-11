import React from 'react';

function Pagination({ pagination, pageChanger }) {
  return (
    <div className="flex justify-center mt-12 gap-2">
      <button
        disabled={pagination.prev === null}
        className="pagination-button"
        onClick={() => {
          pageChanger(pagination.prev);
        }}
      >
        Previous
      </button>
      <button
        disabled={pagination.next === null}
        className="pagination-button"
        onClick={() => {
          pageChanger(pagination.next);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
