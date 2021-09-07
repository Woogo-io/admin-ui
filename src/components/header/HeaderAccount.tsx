import clsx from 'clsx';
import React, {
  PropsWithChildren, useEffect, useRef, useState,
} from 'react';
import { AccountIcon } from '../../theme/icons';
import theme from '../../theme/default';

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
    <li className={theme.header.account.default} ref={ref}>
      <button
        className={theme.header.account.button}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-label="Account"
        aria-haspopup="true"
        type="button"
      >
        <AccountIcon className={theme.header.account.icon} />
      </button>

      <div className={clsx(theme.header.account.dropdown, { [theme.hidden]: !dropdownOpen })}>
        {children}
      </div>
    </li>
  );
};
export default HeaderAccount;
