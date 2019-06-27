import React, { Fragment } from 'react';
const Navbar = () => {
  return (
    <Fragment>
      <div className="py-6">
        <div
          className="flex py-8 bg-white border-b border-gray-200 fixed top-0 inset-x-0 h-16 items-center px-10"
          style={{ zIndex: 100 }}
        >
          <div className="w-full max-w-screen-xl relative mx-auto px-6">
            <div className="flex items-center -ml-6">
              <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
                <div className="flex items-center">
                  <a href="/" className="block lg:mr-4">
                    <div className="hover:text-gray-900 font-medium text-gray-600">
                      Waste Management App
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex flex-grow lg:w-3/4 xl:w-4/5">
                <div className="hidden lg:flex lg:items-center lg:justify-between ml-auto ">
                  <div className="outline-all  flex justify-between items-center px-2 py-2 border-gray-300 border rounded-sm cursor-pointer">
                    <img
                      src="https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0-200w.jpeg"
                      alt="some-face"
                      className="rounded-full w-6 mx-2"
                    />
                    <div className="text-gray-600 text-sm font-medium mx-2 font-maison">
                      Casprine Assempah
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
