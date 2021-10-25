import clsx from 'clsx';
import React, {
  ChangeEvent, ReactNode, useEffect, useReducer, useRef,
} from 'react';
import { Icon } from '../..';

import theme from '../../theme/default';

interface SelectSearchProps<T> {
  data: T[];
  limit?: number;
  keySearch?: string[];
  children: (row: T) => ReactNode;
  placeholder?: string;
  className?: string;
  onClick?: (params: { row: T, index: number }) => any;
  selected?: T;
  selectedComponent?: (row: T) => ReactNode
}

function SelectSearch<T>({
  children, className, data,
  keySearch, limit, placeholder, onClick, selected, selectedComponent,
}: SelectSearchProps<T>) {
  const [state, setState] = useReducer(
    (pState: any, payload: any) => ({ ...pState, ...payload }),
    {
      search: '', isFocus: false, searchArray: data,
    },
  );

  const { search, isFocus, searchArray } = state;

  const containerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const tempSearch = [];
    data.forEach((v: T) => {
      if (typeof keySearch !== 'object') {
        if (typeof v === 'string') {
          if (v.includes(search)) tempSearch.push(v);
        } else {
          tempSearch.push(v);
        }
      } else {
        keySearch.forEach((ks: string) => {
          if (v[ks].includes(search)) tempSearch.push(v);
        });
      }
    });
    setState({ searchArray: tempSearch });
  }, [search]);

  useEffect(() => {
    setState({ searchArray: data });
  }, [data]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) setState({ isFocus: false });
      else setState({ isFocus: true });
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef, inputRef]);

  useEffect(() => {
    if (isFocus) inputRef.current.focus();
  }, [isFocus, inputRef]);

  return (
    <div className="w-full relative" ref={containerRef}>
      {selected && !isFocus ? (
        <div className="w-full flex items-center justify-between dark:bg-gray-700 border dark:border-gray-600 dark:text-white p-2 rounded">
          <div>
            {selectedComponent ? selectedComponent(selected) : children(selected)}
          </div>
          <div>
            <Icon icon="AngleDownIcon" ariaHidden="true" className="w-5 h-5" />
          </div>
        </div>
      ) : (
        <>
          <input
            type="text"
            value={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setState({ search: e.target.value })}
            placeholder={placeholder || 'Search'}
            className={clsx(theme.input.classic)}
            ref={inputRef}
          />
          <div className={
        clsx(
          theme.input.dropdown,
          className,
          !isFocus && 'hidden',
        )
        }
          >
            {searchArray.length
              ? searchArray.slice(0, limit || 10).map((row, index) => (
                <button
                  type="button"
                  key={(row as any)?.id || row}
                  onClick={() => {
                    if (onClick) onClick({ row, index });
                    setState({ search: '', isFocus: false });
                  }}
                  className="block w-full text-left"
                >
                  {children(row)}
                </button>
              ))
              : 'No result'}
          </div>
        </>
      )}
    </div>
  );
}

export default SelectSearch;
