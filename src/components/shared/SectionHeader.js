import React, { Fragment } from 'react';

const SectionHeader = ({ title, children }) => {
  return (
    <Fragment>
      <div className="my-6 font-maison w-full flex items-center ">
        <p className="font-medium text-gray-700 text-2xl mr-auto"> {title}</p>
        {children}
      </div>
    </Fragment>
  );
};

export default SectionHeader;
