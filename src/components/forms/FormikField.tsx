import clsx from 'clsx';
import React, { ChangeEvent, FC, PropsWithChildren } from 'react';
import { Field } from 'formik';
import theme from '../../theme/default';
import { FieldType } from './FormGroup';

export type FormikFieldProps = {
  name?: string;
  className?: string;
  placeholder?: string;
  ariaLabel?: string;
  value?: string;
  type?: FieldType;
  disabled?: boolean;
  multiple?: boolean;
  component?: string;
  errors?: boolean;
  onChange?: (e: ChangeEvent<any>) => any;
};

const FormikField: FC<FormikFieldProps> = ({
  name,
  className,
  placeholder,
  ariaLabel,
  disabled,
  type,
  value,
  component,
  multiple,
  children,
  errors,
  onChange,
}: PropsWithChildren<FormikFieldProps>) => {
  let selectedTheme: string[] = theme.input.classic;
  if (errors) {
    selectedTheme = theme.input.invalid;
  }
  if (type === 'radio') {
    selectedTheme = theme.radio.classic;
    if (errors) selectedTheme = theme.radio.invalid;
  }
  if (type === 'checkbox') {
    selectedTheme = theme.checkbox.classic;
    if (errors) selectedTheme = theme.checkbox.invalid;
  }

  return (
    <Field
      name={name}
      type={type}
      value={value}
      disabled={disabled}
      className={clsx(
        selectedTheme,
        className,
        disabled && theme.disabledCursorNotAllowed,
      )}
      placeholder={placeholder}
      aria-label={ariaLabel}
      component={component}
      multiple={multiple}
      onChange={onChange}
    >
      {children}
    </Field>
  );
};

FormikField.defaultProps = {
  name: undefined,
  className: undefined,
  placeholder: undefined,
  ariaLabel: undefined,
  type: 'text',
  disabled: false,
};

export default FormikField;
