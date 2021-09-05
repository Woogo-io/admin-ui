/* eslint-disable react/no-array-index-key */
import React, {
  ReactNode, useEffect, useReducer,
} from 'react';
import TableCell from './TableCell';
import TableRow from './TableRow';
import theme from '../../theme/default';
import { ArrowLeft, ArrowRight } from '../../theme/icons';

export interface TableProps<T> {
  headers: string[];
  data: T[];
  searchActive?: boolean;
  paginationActive?: boolean;
  resultsPerPage?: number;
  children: (data: T) => ReactNode;
}

export function Table<T>({
  headers,
  data,
  children,
  paginationActive,
  resultsPerPage,
}: TableProps<T>) {
  const [state, dispatch] = useReducer((pState, payload) => ({ ...pState, ...payload }), { page: 0, data: [], maxPage: 0 });

  useEffect(() => {
    if (paginationActive) {
      const indexStart = state.page * resultsPerPage;

      dispatch({
        data: data.slice(indexStart, indexStart + resultsPerPage),
        maxPage: Math.floor(data.length / resultsPerPage),
      });
    } else dispatch({ data });
  }, [data, resultsPerPage, state.page]);

  return (
    <div className={theme.tableContainer.base}>
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap table-auto">
          <thead className={theme.tableHeader.base}>
            <TableRow>
              {headers.map((header, index) => <TableCell key={index}>{header}</TableCell>) }
            </TableRow>
          </thead>
          <tbody className={theme.tableBody.base}>
            {state.data.length
              ? state.data.map((value) => children(value))
              : (
                <TableRow>
                  <td colSpan={headers.length} className="w-full text-center p-3 text-sm">No result to display.</td>
                </TableRow>
              )}
          </tbody>
        </table>
        {paginationActive && data.length > resultsPerPage && (
        <div className={theme.tableFooter.base}>
          <div className={theme.pagination.base}>
            <span className="flex items-center font-semibold tracking-wide uppercase">
              {`Showing ${state.page * resultsPerPage + 1} - ${state.page * resultsPerPage + state.data.length} of ${data.length}`}
            </span>
            <div className="flex mt-2 sm:mt-auto sm:justify-end">
              <nav>
                <ul className="inline-flex items-center">
                  <li>
                    <button
                      className={state.page <= 0 ? theme.pagination.arrow.inactive : theme.pagination.arrow.active}
                      type="button"
                      disabled={state.page <= 0}
                      onClick={() => dispatch({ page: state.page - 1 })}
                    >
                      <ArrowLeft className="h-3 w-3" />
                    </button>
                  </li>
                  {(() => {
                    const rows = [];
                    for (let i = 0; i < state.maxPage + 1; i += 1) {
                      rows.push((
                        <li key={i}>
                          <button
                            className={
                            i === state.page
                              ? theme.pagination.button.current
                              : theme.pagination.button.base
                          }
                            type="button"
                            onClick={() => dispatch({ page: i })}
                          >
                            {i + 1}
                          </button>
                        </li>
                      ));
                    }
                    return rows;
                  })()}
                  <li>
                    <button
                      className={state.page >= state.maxPage ? theme.pagination.arrow.inactive : theme.pagination.arrow.active}
                      type="button"
                      disabled={state.page >= state.maxPage}
                      onClick={() => dispatch({ page: state.page + 1 })}
                    >
                      <ArrowRight className="h-3 w-3" />
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
  );
}
export default Table;
