import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

const MainContainer = ({ children }: PropsWithChildren<{}>) => (
  <main className={clsx('px-5 top-0 pb-5 transition-all')}>
    {children}
  </main>
);
export default MainContainer;
