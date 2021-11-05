import clsx from 'clsx';
import React, {
  ReactNode, useEffect, useRef, useState,
} from 'react';
import { AccountIcon } from '../../theme/icons';
import theme from '../../theme/default';

export interface HeaderAccountProps {
  profileImg?: {
    src: string;
    width?: string | number;
    height?: string | number;
    alt?: string;
    className?: string;
  },
  children?: ReactNode
}

const HeaderAccount = ({ children, profileImg }: HeaderAccountProps) => {
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
        {profileImg ? (
          <img
            alt={profileImg.alt}
            src={profileImg.src}
            width={profileImg.width}
            height={profileImg.height}
            className="w-6 h-6 rounded"
          />
        ) : <AccountIcon className={theme.header.account.icon} />}
      </button>

      <div className={clsx(theme.header.account.dropdown, { [theme.hidden]: !dropdownOpen })}>
        {children}
      </div>
    </li>
  );
};
export default HeaderAccount;
