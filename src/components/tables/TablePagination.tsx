import React, { FC, useState } from 'react';

import theme from '../../theme/default';

const ArrowLeft = () => {
  return (
    <svg
      className="h-3 w-3"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  );
};

const ArrowRight = () => {
  return (
    <svg
      className="h-3 w-3"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  );
};

type PaginationProps = {
  totalResults: number;
  resultsPerPage: number;
  currentPage: number;
  setCurrentPage(i: number): void;
};

const TablePagination: FC<PaginationProps> = ({
  totalResults,
  resultsPerPage,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const totalPages = Math.floor(totalResults / resultsPerPage);

  const paginator = [];

  for (let i = 1; i <= totalPages; i += 1) {
    paginator.push(i);
  }

  return (
    <div className={theme.pagination.base}>
      <span className="flex items-center font-semibold tracking-wide uppercase">
        Showing 1 - 10 of {totalResults}
      </span>
      <div className="flex mt-2 sm:mt-auto sm:justify-end">
        <nav>
          <ul className="inline-flex items-center">
            <li>
              <button
                className={
                  currentPage === 1
                    ? theme.pagination.arrow.inactive
                    : theme.pagination.arrow.active
                }
                type="button"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <ArrowLeft />
              </button>
            </li>
            {paginator &&
              paginator.length > 0 &&
              paginator.map((i) => (
                <li key={i}>
                  <button
                    className={
                      i === currentPage
                        ? theme.pagination.button.current
                        : theme.pagination.button.base
                    }
                    type="button"
                    onClick={() => setCurrentPage(i)}
                  >
                    {i}
                  </button>
                </li>
              ))}
            <li>
              <button
                className={
                  currentPage >= totalPages
                    ? theme.pagination.arrow.inactive
                    : theme.pagination.arrow.active
                }
                type="button"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <ArrowRight />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TablePagination;
