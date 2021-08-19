import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import theme from '../../theme/default';

export type FieldType = 'text' | 'email' | 'radio' | 'checkbox' | 'password' | 'select' | 'textarea';

export interface FormGroupProps {
  className?: string;
  type?: FieldType
}

const FormGroup = ({ children, className, type }: PropsWithChildren<FormGroupProps>) => {
  let selectedTheme: string[] = theme.formGroup.classic;
  if (type === 'radio') selectedTheme = theme.formGroup.radio;
  if (type === 'checkbox') selectedTheme = theme.formGroup.checkbox;

  return (
    <div className={clsx(selectedTheme, className)}>
      {children}
    </div>
  );
};
export default FormGroup;
