import React, { Fragment } from 'react';

const CollectorTableHeader = () => {
  return (
    <Fragment>
      <div className="flex bg-gray-300 w-full p-4 pl-6 font-inter items-center font-maison border-top-rounded table-header">
        <div className="w-8 mr-8" />
        <div className="w-1/4">Collector's name</div>
        <div className="w-1/4 "> Location</div>
        <div className="w-1/6 "> Car Number</div>
        <div className="w-1/3 text-center">Actions</div>
      </div>
    </Fragment>
  );
};

const BinCollectorTableHeader = () => {
  return (
    <Fragment>
      <div className="flex bg-gray-300 w-full p-4 pl-6 font-inter items-center font-maison border-top-rounded table-header">
        <div className="w-1/6">Bin ID</div>
        <div className="w-1/4 ">Latititude</div>
        <div className="w-1/5 text-gray-800">Longitude</div>

        <div className="w-1/6  flex justify-center">Active Status</div>

        <div className="w-1/3 flex item-center justify-center font-maison">Actions</div>
      </div>
    </Fragment>
  );
};

export { CollectorTableHeader, BinCollectorTableHeader };
