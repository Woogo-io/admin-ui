import clsx from 'clsx';
import React, {
  PropsWithChildren, useEffect, useRef, useState,
} from 'react';
import { AccountIcon } from '../../theme/icons';

const HeaderAccount = ({ children } : PropsWithChildren<{}>) => {
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
    <li className="relative" ref={ref}>
      <button
        className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-label="Account"
        aria-haspopup="true"
        type="button"
      >
        <AccountIcon className="w-5 h-5" />
      </button>

      <div className={clsx('absolute top-10 right-0 w-32 p-2 rounded bg-white dark:bg-gray-800 border-b border-purple-800 text-gray-700 dark:text-white', { hidden: !dropdownOpen })}>
        {children}
      </div>
    </li>
  );
};
export default HeaderAccount;
