import clsx from 'clsx';
import React, { FC, PropsWithChildren } from 'react';

import theme from '../../theme/default';
import { FieldType } from './FormGroup';

export type FormLabelProps = {
  className?: string;
  htmlFor?: string;
  type?: FieldType;
  errors?: string | false;
};

const FormLabel: FC<PropsWithChildren<FormLabelProps>> = ({
  className,
  children,
  htmlFor,
  type,
  errors,
}: PropsWithChildren<FormLabelProps>) => {
  let selectedTheme: string[] = theme.label.classic;
  if (type === 'checkbox') selectedTheme = theme.label.checkbox;
  if (type === 'radio') selectedTheme = theme.label.radio;
  return (
    <label
      htmlFor={htmlFor}
      className={clsx(
        selectedTheme,
        className,
      )}
    >
      {children}
      { errors && (
      <span className="ml-2 font-bold text-red-600 text-xs">
        {errors}
      </span>
      )}
    </label>
  );
};
FormLabel.defaultProps = {
  className: '',
};

export default FormLabel;
