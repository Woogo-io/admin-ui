import React, { FC, PropsWithChildren } from 'react';
import theme from '../../theme/default';

const SectionTitle: FC<PropsWithChildren<unknown>> = ({
  children,
}: PropsWithChildren<unknown>) => {
  return <h2 className={theme.sectionTitle.base}>{children}</h2>;
};

export default SectionTitle;
