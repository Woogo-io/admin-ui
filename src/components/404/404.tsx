import React, { FC, MouseEvent } from 'react';

import { ForbiddenIcon } from '../../theme/icons/index';
import { Button } from '../buttons';
import theme from '../../theme/default';

export interface NotFoundProps {
  handleBack?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const NotFoundContainer: FC<NotFoundProps> = ({ handleBack }: NotFoundProps) => (
  <div className={theme.notFound.container}>

    <h1 className={theme.notFound.title}>
      <ForbiddenIcon
        className={theme.notFound.icon}
        aria-hidden="true"
      />
      <span className={theme.notFound.statusCode}>404</span>
    </h1>
    <p className={theme.notFound.text}>
      Page not found. Check the address or
      <Button
        styleType="link"
        size="normal"
        className={theme.notFound.button}
        onClick={handleBack}
      >
        go back
      </Button>
      .
    </p>
  </div>
);

export default NotFoundContainer;
