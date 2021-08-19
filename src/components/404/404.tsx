import React, { FC, MouseEvent } from 'react';

import { ForbiddenIcon } from '../../theme/icons/index';
import { Button } from '../buttons';

export interface NotFoundProps {
  handleBack?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const NotFoundContainer: FC<NotFoundProps> = ({ handleBack }: NotFoundProps) => (
  <div className="flex flex-col items-center">

    <h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200 flex space-x-5 items-center mt-10">
      <ForbiddenIcon
        className="w-16 h-16 text-purple-200"
        aria-hidden="true"
      />
      <span className="-mt-2">404</span>
    </h1>
    <p className="text-gray-700 dark:text-gray-300 mt-5">
      Page not found. Check the address or
      <Button
        styleType="link"
        size="normal"
        className="ml-1"
        onClick={handleBack}
      >
        go back
      </Button>
      .
    </p>
  </div>
);

export default NotFoundContainer;
