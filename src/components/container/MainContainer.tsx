import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

const MainContainer = ({ children }: PropsWithChildren<{}>) => (
  <main className={clsx('fixed z-0 w-full h-full overflow-y-auto bg-gray-50 dark:bg-gray-900 px-5 top-0 pt-16 pb-5 lg:pr-5 lg:pl-72')}>
    {children}
  </main>
);

export default MainContainer;
