import React, { Fragment } from 'react';

const SearchBox = ({ placeholder }) => {
  // eslint-disable-next-line

  return (
    <Fragment>
      <div className="w-full xl:w-2/4">
        <div className="relative">
          <input
            id="docsearch"
            className="transition w-full focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-900 rounded bg-white shadow-md py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input"
            type="text"
            placeholder={placeholder}
            autoComplete="off"
            spellCheck="false"
            // eslint-disable-next-line
            role="combobox"
            aria-autocomplete="list"
            aria-expanded="false"
            aria-label="search input"
            aria-owns="algolia-autocomplete-listbox-0"
            dir="auto"
            style={{ position: 'relative', verticalAlign: 'top' }}
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
            <svg
              className="fill-current pointer-events-none text-gray-600 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SearchBox;
