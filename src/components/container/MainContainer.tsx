import React, { PropsWithChildren } from 'react';
import theme from '../../theme/default';

const MainContainer = ({ children }: PropsWithChildren<{}>) => (
  <main className={theme.mainContainer.default}>
    {children}
  </main>
);
export default MainContainer;
