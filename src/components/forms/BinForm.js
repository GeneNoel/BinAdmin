import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
const BinForm = ({ toggleModal }) => {
  return (
    <Fragment>
      <div className="modal-content font-maison">
        <div className="box bg-white w-full p-5 shadow rounded">
          <form className="w-full">
            {/* Collector Name */}
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold font-sans mb-2"
                  htmlFor="grid-first-name"
                >
                  Latititude
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold font-sans mb-2"
                  htmlFor="grid-last-name"
                >
                  Longitude
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* // Collector Name */}

            {/* Location & Car Details*/}

            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold font-sans mb-2"
                  htmlFor="grid-state"
                >
                  Active Status
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option className="font-inter">True</option>
                    <option className="font-inter">False</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/*// Location */}
          </form>

          <div className="flex items-center row justify-start mt-8 font-inter">
            <button className="mr-2 bg-blue text-white p-2 px-6 rounded shadow</div>">
              Create
            </button>
            <button
              className="mr-2 bg-red text-white p-2 px-6 rounded shadow</div>"
              onClick={() => toggleModal()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default hot(module)(BinForm);
