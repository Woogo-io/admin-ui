import clsx from 'clsx';
import React, {
  ChangeEvent, ReactNode, useEffect, useRef, useState,
} from 'react';

import theme from '../../theme/default';

interface SelectSearchProps<T> {
  data: T[];
  limit?: number;
  keySearch?: string[];
  children: (params: { row: T, index: number }) => ReactNode;
  placeholder?: string;
  className?: string;
  onClick?: (params: { row: T, index: number }) => any;
}

function SelectSearch<T>({
  children, className, data, keySearch, limit, placeholder, onClick,
}: SelectSearchProps<T>) {
  const [search, setSearch] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [searchArray, setSearchArray] = useState(data);

  const ref = useRef(null);

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
    setSearchArray(tempSearch);
  }, [search]);

  useEffect(() => {
    setSearchArray(data);
  }, [data]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) setIsFocus(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="w-full relative" ref={ref}>
      <input
        type="text"
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        onFocus={() => setIsFocus(true)}
        placeholder={placeholder || 'Search'}
        className={clsx(theme.input.classic)}
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
                setIsFocus(false);
              }}
              className="block w-full"
            >
              {children({ row, index })}
            </button>
          ))
          : 'No result'}
      </div>
    </div>
  );
}

export default SelectSearch;
