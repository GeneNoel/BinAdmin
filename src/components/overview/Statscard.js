import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const StatsCard = ({ title, children: Icon, count }) => {
  return (
    <Fragment>
      <div className="bg-white shadow rounded-lg p-6 mr-12  w-1/3 flex items-center">
        <div className="bg-indigo-200 opacity-25 rounded-full px-2  h-10 w-10 flex justify-center items-center">
          {Icon}
        </div>
        <div className="flex flex-col ml-4">
          <div className="text-gray-600 text- font-medium pt-2 font-maison">{title}</div>
          <div className="text-gray-900 font-medium text-xl  mr-auto ">{count}</div>
        </div>
      </div>
    </Fragment>
  );
};

StatsCard.propTypes = {
  Icon: PropTypes.element,
  count: PropTypes.string,
  title: PropTypes.string,
};

export default StatsCard;
