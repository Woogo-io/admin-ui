import clsx from 'clsx';
import React, {
  PropsWithChildren, useEffect, useRef, useState,
} from 'react';
import { BellIcon } from '../../theme/icons';
import theme from '../../theme/default';

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
    <li ref={ref} className={theme.header.notify.default}>
      <button
        className={theme.header.notify.button}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-label="Notifications"
        aria-haspopup="true"
        type="button"
      >
        <BellIcon className={theme.header.notify.icon} aria-hidden="true" />
        {haveNotification && (
        <span
          aria-hidden="true"
          className={theme.header.notify.haveNotification}
        />
        )}
      </button>
      <div className={clsx(theme.header.notify.dropdown, { [theme.hidden]: !dropdownOpen })}>
        {children}
      </div>
    </li>
  );
};
export default HeaderNotify;
