import clsx from 'clsx';
import React from 'react';

import { render } from '@testing-library/react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
  TableRow,
} from '../components/tables';
import theme from '../theme/default';

const renderTable = () => {
  return render(
    <TableContainer>
      <Table>
        <TableHeader>
          <tr>
            <TableCell>Column 1</TableCell>
            <TableCell>Column 2</TableCell>
          </tr>
        </TableHeader>
        <TableBody>
          <TableRow key={1}>
            <TableCell>11</TableCell>
            <TableCell>12</TableCell>
          </TableRow>
          <TableRow key={2}>
            <TableCell>21</TableCell>
            <TableCell>22</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <TableFooter />
    </TableContainer>,
  );
};

describe('<Table/>', () => {
  it('should display a table with 2 columns, one head and 2 rows (with the default theme)', async () => {
    const { findByTestId } = renderTable();
  });
});
