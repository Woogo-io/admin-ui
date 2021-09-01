import React from 'react';

export interface SidebarCategoryProps {
  name: string;
}

const SidebarCategory = ({ name }: SidebarCategoryProps) => (
  <div className="w-full flex items-center mt-5 px-5 space-x-2">
    <hr className="border-gray-500 border w-full" />
    <span className="font-bold uppercase text-xs">
      {name}
    </span>
    <hr className="border-gray-500 border w-full" />
  </div>
);

export default SidebarCategory;
