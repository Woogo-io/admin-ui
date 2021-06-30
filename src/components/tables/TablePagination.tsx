import React, { FC } from 'react';

import theme from '../../theme/default';

const ArrowLeft = () => (
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

const ArrowRight = () => (
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
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  const paginator = [];

  for (let i = 0; i < totalPages; i += 1) {
    paginator.push(i);
  }

  return (
    <div className={theme.pagination.base}>
      <span className="flex items-center font-semibold tracking-wide uppercase">
        Showing
        {' '}
        {(currentPage * resultsPerPage) + 1}
        {' '}
        -
        {' '}
        {(currentPage * resultsPerPage) + resultsPerPage}
        {' '}
        of
        {' '}
        {totalResults}
      </span>
      <div className="flex mt-2 sm:mt-auto sm:justify-end">
        <nav>
          <ul className="inline-flex items-center">
            <li>
              <button
                className={
                  currentPage === 0
                    ? theme.pagination.arrow.inactive
                    : theme.pagination.arrow.active
                }
                type="button"
                disabled={currentPage === 0}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <ArrowLeft />
              </button>
            </li>
            {paginator
              && paginator.length > 0
              && paginator.map((i) => (
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
                    {i + 1}
                  </button>
                </li>
              ))}
            <li>
              <button
                className={
                  currentPage + 1 >= totalPages
                    ? theme.pagination.arrow.inactive
                    : theme.pagination.arrow.active
                }
                type="button"
                disabled={currentPage + 1 >= totalPages}
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
