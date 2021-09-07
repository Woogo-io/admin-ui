/* eslint-disable react/no-array-index-key */
import React, {
  ChangeEvent,
  ReactNode, useEffect, useReducer,
} from 'react';
import clsx from 'clsx';
import TableCell from './TableCell';
import TableRow from './TableRow';
import theme from '../../theme/default';
import { ArrowLeft, ArrowRight } from '../../theme/icons';
import { pagination } from '../utils/pagination';

export interface TableProps<T> {
  headers: string[];
  data: T[];
  paginationActive?: boolean;
  resultsPerPage?: number;
  children: (data: T) => ReactNode;
  searchKey?: string[]
}

function Table<T>({
  headers,
  data,
  children,
  paginationActive,
  resultsPerPage,
  searchKey,
}: TableProps<T>) {
  const [state, dispatch] = useReducer((pState, payload) => ({ ...pState, ...payload }), {
    page: 0, data: [], search: '', searchResult: [],
  });

  const {
    page, data: stateData, search, searchResult,
  } = state;

  const MaxItem = search !== '' ? searchResult.length : data.length;
  const MaxPage = Math.floor((search !== '' ? searchResult.length : data.length) / resultsPerPage);

  useEffect(() => {
    if (paginationActive) {
      const indexStart = page * resultsPerPage;
      const dataToSlice = search !== '' ? searchResult : data;
      dispatch({
        data: dataToSlice.slice(indexStart, indexStart + resultsPerPage),
      });
    } else dispatch({ data });
  }, [data, resultsPerPage, page, searchResult]);

  useEffect(() => {
    if (search === '') dispatch({ searchResult: [], page: 0 });
    else {
      dispatch({
        searchResult: data.filter((v: T) => {
          const find = searchKey.find((key: string) => v[key].includes(search));
          return !!find;
        }),
        page: 0,
      });
    }
  }, [search, data]);

  return (
    <>
      {!!searchKey?.length && (
        <div className="mb-2 flex justify-end">
          <div>
            <input
              type="text"
              className={clsx(theme.input.classic)}
              placeholder="Search"
              value={search}
              onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch({ search: e.target.value })}
            />
          </div>
        </div>
      )}
      <div className={theme.tableContainer.base}>

        <div className={theme.tableContainer.wrapper}>
          <table className={theme.tableContainer.table}>
            <thead className={theme.tableHeader.base}>
              <TableRow>
                {headers.map((header, index) => <TableCell key={index}>{header}</TableCell>) }
              </TableRow>
            </thead>
            <tbody className={theme.tableBody.base}>
              {stateData.length
                ? stateData.map((value) => children(value))
                : (
                  <TableRow>
                    <td colSpan={headers.length} className={theme.tableRow.noResult}>No result to display.</td>
                  </TableRow>
                )}
            </tbody>
          </table>
          {paginationActive && MaxItem > resultsPerPage && (
          <div className={theme.tableFooter.base}>
            <div className={theme.pagination.base}>
              <span className={theme.pagination.left}>
                {`Showing ${page * resultsPerPage + 1} - ${page * resultsPerPage + MaxItem} of ${MaxItem}`}
              </span>
              <div className={theme.pagination.right.default}>
                <nav>
                  <ul className={theme.pagination.right.list}>
                    <li>
                      <button
                        className={page <= 0 ? theme.pagination.arrow.inactive : theme.pagination.arrow.active}
                        type="button"
                        disabled={page <= 0}
                        onClick={() => dispatch({ page: page - 1 })}
                      >
                        <ArrowLeft className={theme.pagination.arrow.icon} />
                      </button>
                    </li>
                    {pagination(page + 1, MaxPage + 1).map((value: number | string) => {
                      if (typeof value === 'string') {
                        return (
                          <li key={value}>
                            <button disabled className={clsx(theme.pagination.dot)}>{value}</button>
                          </li>
                        );
                      }
                      return (
                        <li key={value}>
                          <button
                            className={
                          value - 1 === page
                            ? theme.pagination.button.current
                            : theme.pagination.button.base
                        }
                            type="button"
                            onClick={() => dispatch({ page: value - 1 })}
                          >
                            {value}
                          </button>
                        </li>
                      );
                    })}
                    <li>
                      <button
                        className={page >= MaxPage ? theme.pagination.arrow.inactive : theme.pagination.arrow.active}
                        type="button"
                        disabled={page >= MaxPage}
                        onClick={() => dispatch({ page: page + 1 })}
                      >
                        <ArrowRight className={theme.pagination.arrow.icon} />
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Table;
