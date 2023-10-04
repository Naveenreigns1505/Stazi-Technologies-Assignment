import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Pagination = ({ carsPerPage, totalCars, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCars / carsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <button onClick={() => paginate(currentPage - 1)} className="page-link">
          Previous
        </button>

        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <Link
              to={`/page/${number}`}
              onClick={() => paginate(number)}
              className="page-link"
            >
              {number}
            </Link>
          </li>
        ))}
        <button onClick={() => paginate(currentPage + 1)} className="page-link">
          Next
        </button>
      </ul>
    </nav>
  );
};

export default Pagination;
