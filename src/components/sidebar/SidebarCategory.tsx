import React from 'react';
import theme from '../../theme/default';

export interface SidebarCategoryProps {
  name: string;
}

const SidebarCategory = ({ name }: SidebarCategoryProps) => (
  <div className={theme.sidebar.category.default}>
    <hr className={theme.sidebar.category.hr} />
    <span className={theme.sidebar.category.text}>
      {name}
    </span>
    <hr className={theme.sidebar.category.hr} />
  </div>
);

export default SidebarCategory;
