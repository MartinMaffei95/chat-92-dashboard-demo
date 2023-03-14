import React from 'react';

export type DataModuleContainerTypes = {
  sectionName: string;
  sxContainer?: string;
  sxName?: string;
  children: JSX.Element | JSX.Element[];
};
const DataModuleContainer = ({
  sectionName,
  sxContainer = '',
  sxName = '',
  children,
}: DataModuleContainerTypes) => {
  return (
    <div className={`p-4 rounded flex flex-col gap-2 ${sxContainer}`}>
      <h3 className={`text-2xl border-b-2 ${sxName}`}>{sectionName}</h3>

      <div className="flex gap-2">{children}</div>
    </div>
  );
};

export default DataModuleContainer;
