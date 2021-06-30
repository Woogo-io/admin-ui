import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

const MainContainer = ({ children }: PropsWithChildren<{}>) => (
  <main className={clsx('fixed z-0 w-full h-full overflow-y-auto bg-gray-50 dark:bg-gray-900 lg:pl-72 top-0 pt-16 pr-5 pb-5')}>
    {children}
  </main>
);

export default MainContainer;
