import clsx from 'clsx';
import React, {
  PropsWithChildren, useEffect, useRef, useState,
} from 'react';
import { BellIcon } from '../../theme/icons';

export interface HeaderNotifyProps {
  haveNotification: boolean;
}

const HeaderNotify = (props: PropsWithChildren<HeaderNotifyProps>) => {
  const { haveNotification, children } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) setDropdownOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <li ref={ref} className="relative">
      <button
        className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-label="Notifications"
        aria-haspopup="true"
        type="button"
      >
        <BellIcon className="w-5 h-5" aria-hidden="true" />
        {haveNotification && (
        <span
          aria-hidden="true"
          className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
        />
        )}
      </button>
      <div className={clsx('absolute top-10 right-0 w-32 p-2 rounded bg-white dark:bg-gray-800 border-b border-purple-800 text-gray-700 dark:text-white', { hidden: !dropdownOpen })}>
        {children}
      </div>
    </li>
  );
};
export default HeaderNotify;
