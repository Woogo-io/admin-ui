import clsx from 'clsx';
import React from 'react';

import { render } from '@testing-library/react';

import { Button, ButtonProps } from '../components/buttons';
import theme from '../theme/default';

const renderButton = (props: Partial<ButtonProps> = {}) => {
  const defaultProps: ButtonProps = {
    size: 'regular',
  };
  return render(
    <Button {...defaultProps} {...props}>
      Test button
    </Button>,
  );
};

describe('<Button>Test button</Button>', () => {
  it('should display a regular button with the default theme', async () => {
    const { findByTestId } = renderButton();
    const buttonTest = await findByTestId('test-button');
    expect(buttonTest.className).toEqual(
      clsx(theme.button, theme.button.size.regular),
    );
  });
});
