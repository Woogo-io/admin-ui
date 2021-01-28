import React, { FC, PropsWithChildren } from 'react';

const Table: FC<PropsWithChildren<unknown>> = ({
  children,
}: PropsWithChildren<unknown>) => {
  return (
    <table className="w-full whitespace-no-wrap table-auto">{children}</table>
  );
};

export default Table;
