/* eslint-disable jsx-a11y/no-static-element-interactions */
import clsx from 'clsx';
import React from 'react';
import { Icon, IconType } from '../../../theme/icons/index';
import theme from '../../../theme/default';
import { OnToggleType, TypeToggleType } from './constants';

export interface StyleButtonProps {
  onToggle: OnToggleType;
  label: string;
  type: TypeToggleType;
  style: string;
  active?: boolean;
  icon?: IconType;
}

const StyleButton = (props: StyleButtonProps) => {
  const {
    onToggle, label, type, style, active, icon,
  } = props;

  return (
    <span
      className={clsx(active ? theme.editor.header.icon.select : theme.editor.header.icon.classic)}
      onMouseDown={(e) => {
        e.preventDefault();
        onToggle(type, style);
      }}
      title={label}
    >
      {icon ? (
        <Icon icon={icon} className="w-4 h-4" ariaHidden="false" />
      ) : label}
    </span>
  );
};

export default StyleButton;
